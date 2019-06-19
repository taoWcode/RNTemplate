import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import { ActivityIndicator,WhiteSpace } from "@ant-design/react-native";

import ComImage from "./ComImage";
import Http from "../utils/http.js";
import Api from "../utils/api.js";
import GoodsListStyle from "../styles/GoodsListStyle";
import ComStyle from "../styles/CommonStyle";


export default class CoodsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
          list:[],//列表
          page:1,//页码
          finsh:false,//是否加载结束
          empty:false,//是否为空
          loading:false,//加载状态
    };

    this.getData = this.getData.bind(this);
  }

  /**
   * @des 获取推荐列表数据
   */
  getData(){

    console.log('出发')
    let {list,page,finish,loading} = this.state;
    const {url} = this.props;
    if(loading || finish){
        return;
    }

    this.setState({
        loading:true
    })

    Http.getRequest(
          url,
          {
              data:{page:page}
          }).then(res => {
              console.log('商品列表')
              console.log(res);
              let obj = {};
              const data = res.data.goodsList;

              if(data.data.length > 0){
                  obj.list = list.concat(data.data);
                  if(obj.list.length >= data.total){
                      obj.finish = true;
                  }
              }else{
                  if(recommendList.length < 1){
                      obj.empty = true
                  }
                  obj.finish = true;
              }
              obj.loading = false;
              obj.page = page + 1;
              this.setState(obj);
          })
}


  componentDidMount(){
    this.getData();
  }

  goodsItem({ item, idx }) {
    return (
      <TouchableOpacity 
        style={[GoodsListStyle.goods_item,((idx % 2 !== 0) && GoodsListStyle.goods_item_left)]} 
        activeOpacity={0.9}
        key = {item.id || idx}
      >
        <ComImage
          source={{ uri: item.thumb }}
          style={GoodsListStyle.goods_item_picture}
        />
        <View style={GoodsListStyle.goods_item_info}>
          <Text style={GoodsListStyle.goods_item_info_title}>{item.title}</Text>
          <Text>
            <Text style={GoodsListStyle.goods_item_info_price}>
              {item.shop_price}{" "}
            </Text>
            <Text style={GoodsListStyle.goods_item_info_num}>
              已付款{item.sales_sum}人
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    
    const {list, finish, loading, empty} = this.state;

    return (
      <FlatList
        data={list}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached = {this.getData}
        renderItem={this.goodsItem}
        numColumns={2}
        contentContainerStyle={[GoodsListStyle.goods_list]}
        ListFooterComponent = {()=>{
            
            return(
                  finish ? (
                    <View>
                      <WhiteSpace/>
                      <Text style={{fontSize:14,color:'#666',textAlign:'center'}}>- 到底了 -</Text>
                      <WhiteSpace/>
                      <WhiteSpace/>
                    </View>
                  ) : (
                    <View>
                      <WhiteSpace/>
                      <ActivityIndicator color='#999' text="正在加载.."/>
                      <WhiteSpace/>
                      <WhiteSpace/>
                    </View>
                  )
                
            )
        }}

        ListEmptyComponent = {()=>{
            return empty ? (<Text>空空如也</Text>):(<WhiteSpace/>)
        }}
      />
    );
  }
}
