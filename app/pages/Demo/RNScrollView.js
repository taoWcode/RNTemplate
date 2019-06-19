import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,RefreshControl} from 'react-native';
import {Toast,Provider} from '@ant-design/react-native';

import Header from '../../components/Header';

class RNScrollView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            countArr:[],
            refreshing:false,//是否正在刷新
        }

        this.createArr = this.createArr.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
    }

    createArr(){
        let {count,countArr} = this.state;
        
        let total = count + 30;
        for(let i = count; i<total;i++){
            countArr.push(i);
        }

        this.setState({
            count:total,
            countArr:countArr
        })
    }

    _onRefresh(){
        let {countArr} = this.state;
        countArr.unshift('a')
        this.setState({
            countArr:countArr
        },()=>{
            Toast.info('已更新了一条数据')
        })
    }

    componentDidMount(){
        this.createArr();
    }

    render(){

        const {countArr,refreshing} = this.state;

        return (
            <Provider>
                <View style = {{flex:1}}>
                    <Header title="RNScrollView"/>
                    <ScrollView
                        style = {{flex:1}}
                        refreshControl = {
                            <RefreshControl
                                refreshing = {refreshing}
                                onRefresh = {this._onRefresh}
                                colors = {['rgb(20,214,100)']}

                                //ios 颜色 文字 文字颜色
                                tintColor = 'rgb(20,214,100)'
                                title = "正在获取最新数据"
                                titleColor = '#999'
                            />
                        }
                    >
                        {countArr.map((item,idx)=>{
                            return (
                                <View
                                    key = {idx}
                                    style={{padding:10,borderBottomWidth:1,borderBottomColor:'#eee'}}
                                >
                                    <Text style={{textAlign:'center'}}>{item}</Text>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View> 
            </Provider>
        )
               
    }
}

export default RNScrollView;
