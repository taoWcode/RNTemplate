import React, { Component, PureComponent } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList
} from "react-native";
import Http from "../../utils/http.js";
import Api from "../../utils/api.js";
import { Icon,ActivityIndicator,WhiteSpace } from "@ant-design/react-native";

import { SafeAreaView } from "react-navigation";
import ComImage from "../../components/ComImage";
import Carousel from "../../components/Carousel";
import CalcImage from "../../components/CalcImage";
import Footer from "../../components/Footer";

import Devices from "../../utils/size";
import ComStyle from "../../styles/CommonStyle";
import IndexStyle from "../../styles/IndexStyle";
import GoodsListStyle from "../../styles/GoodsListStyle";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advert: [],//轮播广告
      navList: [],//导航列表
      cateBlock:[],//分类块
      canBg: false, //给固定头部添加背景色，默认为false
      recommendList:[],//推荐列表
      recommendPage:1,//列表页码
      recommendFinish:false,//是否已加载全部
      recommendLoading:false,//是否正在加载
      recommendEmpty:false,//是否为空
    };
    this._onScroll = this._onScroll.bind(this);
    this._onScrollEndDrag = this._onScrollEndDrag.bind(this);
    this.getIndexData = this.getIndexData.bind(this);
    this.getRecommendData = this.getRecommendData.bind(this);
  }

 /**
  * 实时监听滚动，滚动高度超过轮播更改固定顶部的背景色
  */
  _onScroll(event) {
    const contentHeight = event.nativeEvent.contentSize.height;
    const scrollViewHeight = event.nativeEvent.layoutMeasurement.height;
    const scrollOffset = event.nativeEvent.contentOffset.y;

    const { canBg } = this.state;
    if (scrollOffset >= 183) {
      if (!canBg) {
        this.setState({
          canBg: true
        });
      }
    } else {
      if (canBg) {
        this.setState({
          canBg: false
        });
      }
    }
  }
  /**
   * @des 滚动结束，监听到底部进行产品推荐分页加载
   */
  _onScrollEndDrag(event){
        const contentHeight = event.nativeEvent.contentSize.height;
        const scrollViewHeight = event.nativeEvent.layoutMeasurement.height;
        const scrollOffset = event.nativeEvent.contentOffset.y;
        const isEndReached = scrollOffset + scrollViewHeight >= contentHeight - 250;
        const isContentFillPage = contentHeight >= scrollViewHeight; // 内容高度是否大于列表高度
 
        if (isContentFillPage && isEndReached) {
            console.log('滚动到底部');
            this.getRecommendData();
        }
  }

  /**
   * @des 获取推荐列表数据
   */
  getRecommendData(){

    console.log('出发')
    let {recommendList,recommendPage,recommendFinish,recommendLoading} = this.state;
    const {url} = this.props;
    if(recommendLoading || recommendFinish){
        return;
    }

    this.setState({
        recommendLoading:true
    })

    Http.getRequest(
        Api.GetRecommend,
        {
            data:{page:recommendPage}
        }).then(res => {
            console.log('商品列表')
            console.log(res);
            let obj = {};
            const data = res.data.goodsList;

            if(data.data.length > 0){
                obj.recommendList = recommendList.concat(data.data);
                if(obj.recommendList.length >= data.total){
                    obj.recommendFinish = true;
                }
            }else{
                if(recommendList.length < 1){
                    obj.recommendEmpty = true
                }
                obj.recommendFinish = true;
            }
            obj.recommendLoading = false;
            obj.recommendPage = recommendPage + 1;
            this.setState(obj);
        })
}

  /**
   * @des 获取首页数据
   */
  getIndexData() {
    Http.getRequest(Api.GetIndex, {}).then(res => {
      if (res.code === 200) {
        const {
          banner,
          index_category_list,
          nav,
          next_list,
          now_end_time,
          now_tome_slot,
          selected_time_slot,
          time_slot
        } = res.data;
        console.log(index_category_list);
        this.setState({
          advert: banner,
          navList: nav,
          cateBlock:index_category_list
        });
      }
    });
  }

  componentWillMount(){
      
  }
  componentDidMount() {
    this.getIndexData();
  }

  render() {
    const { 
            advert, 
            canBg, 
            navList, 
            cateBlock,
            isUpdate,
            recommendFinish,
            recommendEmpty,
            recommendList,
    } = this.state;

    return (
      <View style={[ComStyle.flex, ComStyle.ps_re]}>
        {/* 固定顶部 */}
        <FHeaderUI canBg={canBg} />

        <ScrollView 
            style={[ComStyle.flex]} 
            onScroll={this._onScroll}
            onScrollEndDrag = {this._onScrollEndDrag}
        >
          {/* 轮播banner */}
          <Carousel height={183} width={375} advert={advert} />

          {/* 导航条 */}
          <NavUI navList={navList} />
          
          {/* 中间广告 */}
          <SingBannerUI
            source={{
              uri:
                "http://m.360buyimg.com/mobilecms/jfs/t27841/156/1398092062/91852/a52cc40a/5bc7fe15N02b6e859.jpg"
            }}
          />

          {/* 分类块 */}
          {cateBlock.map((item,idx) => {
                return <BannerBlockUI key={idx} data={item}/>
          })}

          {/* 推荐列表 */}
          <RecommendUI 
              list = {recommendList}
              empty = {recommendEmpty}
              finish = {recommendFinish}
          />
          <Footer />
        </ScrollView>
      </View>
    );
  }
}

class FHeaderUI extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { canBg } = this.props;

    return (
      <SafeAreaView
        style={[
          ComStyle.ps_ab_top,
          { paddingTop: Devices.statusbarHeight },
          canBg && IndexStyle.fheader_bg
        ]}
      >
        <View style={[ComStyle.flex_row_l, IndexStyle.fheader]}>
          <TouchableOpacity
            style={[IndexStyle.fheader_menu, ComStyle.flex_column_lt]}
            activeOpacity={0.5}
          >
            <Icon name="menu" size={20} color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[IndexStyle.fheader_search, ComStyle.flex]}
            activeOpacity={0.9}
          >
            <View style={[ComStyle.flex_row_l]}>
              <Image
                source={{
                  uri:
                    "http://b2c.juntest.com/images/781ad24f052dd93ae173d33827b8cde5.png"
                }}
                style={IndexStyle.fheader_search_logo}
              />
              <View
                style={[
                  IndexStyle.fheader_search_bar,
                  ComStyle.flex_row_l,
                  ComStyle.flex
                ]}
              >
                <Icon size={16} name="search" color="#aaa" />
                <Text style={[IndexStyle.fheader_search_placeholder]}>
                  iPhone X
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[IndexStyle.fheader_user, ComStyle.flex_column_lt]}
          >
            <Text style={IndexStyle.fheader_user_text}>登陆</Text>
            {/* <View style = {IndexStyle.fheader_user_avatar}>
                            <ComImage source={{uri:'htttp:aa'}} style = {IndexStyle.fheader_user_avatar_img} />
                        </View> */}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

class NavUI extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { navList } = this.props;

    return (
      <ImageBackground
        source={require("../../assets/images/nav-bg.jpg")}
        style={{ width: "100%" }}
      >
        <View style={[ComStyle.flex_row_wrap, IndexStyle.navlist]}>
          {navList.map((item, idx) => {
            return (
              <TouchableOpacity
                style={IndexStyle.navlist_item}
                key={item.id || idx}
              >
                <View>
                  <ComImage
                    style={IndexStyle.navlist_item_icon}
                    source={{ uri: item.icon }}
                  />
                  <Text style={IndexStyle.navlist_item_label}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ImageBackground>
    );
  }
}

class SingBannerUI extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { source } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.9}>
        <CalcImage source={source} />
      </TouchableOpacity>
    );
  }
}

class BannerBlockUI extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;
    
    return (
      <View style={IndexStyle.banner}>
        {data['14'].map((item,idx) => {
            return (
                <View style={IndexStyle.banner_header} key={item.id || idx}>
                    <ComImage
                        source={{uri:item.img}}
                        style={IndexStyle.banner_header_img}
                    />
                </View>
            )
        })}
        
        <View style={[IndexStyle.banner_body, ComStyle.flex_row_wrap]}>
          
          {data['15'].map((item,idx) => {
              
                return (
                    <TouchableOpacity 
                        style={[IndexStyle.banner_body_item]}
                        key = {item.id || idx}
                    >
                        <Text
                            style={IndexStyle.banner_body_item_title}
                            numberOfLines={1}
                            ellipsizeMode={"tail"}
                            >
                            {item.title}
                        </Text>
                        <Text
                            style={IndexStyle.banner_body_item_tip}
                            numberOfLines={1}
                            ellipsizeMode={"tail"}
                            >
                            {item.v_title}
                        </Text>
                        <ComImage
                        style={IndexStyle.banner_body_item_img}
                        source={{
                            uri:item.img
                        }}
                        />
                    </TouchableOpacity>
                )
           
          })}
          </View>
          <View style={[IndexStyle.banner_body, ComStyle.flex_row_wrap]}>
          {data['16'].map((item,idx) => {
              return (
                <TouchableOpacity
                    style={[
                    IndexStyle.banner_body_item,
                    IndexStyle.banner_body_item_small
                    ]}
                    key = {item.id || idx}
                >
                    <Text
                    style={IndexStyle.banner_body_item_title}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                    >
                    {item.title}
                    </Text>
                    <Text
                    style={IndexStyle.banner_body_item_tip}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                    >
                    {item.v_title}
                    </Text>
                    <ComImage
                    style={[
                        IndexStyle.banner_body_item_img,
                        IndexStyle.banner_body_item_small_img
                    ]}
                    source={{
                        uri:item.img
                    }}
                    />
                </TouchableOpacity>
              )
          })}
          
          
        </View>
      </View>
    );
  }
}

class RecommendUI extends Component {
  constructor(props) {
    super(props);
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
    const {list,finish,empty} = this.props;
    return (
      <View style={[IndexStyle.recommend]}>
        <View style={[ComStyle.flex_row_lt, IndexStyle.recommend_header]}>
          <Icon name="heart" size={20} color="#ccc" />
          <Text style={IndexStyle.recommend_header_text}>为您推荐</Text>
        </View>
        <FlatList
        data={list}
        keyExtractor={item => item.id.toString()}
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
            return empty ? (<Text style={{fontSize:14,color:'#666',textAlign:'center'}}>空空如也</Text>):(<WhiteSpace/>)
        }}
        />
      </View>
    );
  }
}

export default Index;
