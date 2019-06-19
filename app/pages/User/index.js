import React,{Component,PureComponent} from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

import {
    WhiteSpace
}from '@ant-design/react-native';

import Header from '../../components/Header';
import BottomTip from '../../components/BottomTips';
import ComImage from '../../components/ComImage';
import ComStyle from '../../styles/CommonStyle';
import UserStyle from '../../styles/UserStyle';

const icon1 = require('../../assets/images/icon/icon-fun-wallet.png'),
      icon2 = require('../../assets/images/icon/icon-fun-spread.png'),
      icon3 = require('../../assets/images/icon/icon-fun-team.png'),
      icon4 = require('../../assets/images/icon/icon-fun-share.png'),
      icon5 = require('../../assets/images/icon/icon-fun-collect.png'),
      icon6 = require('../../assets/images/icon/icon-fun-coupon.png'),
      icon7 = require('../../assets/images/icon/icon-fun-address.png'),
      icon8 = require('../../assets/images/icon/icon-fun-setting.png'),
      icon9 = require('../../assets/images/icon/icon-fun-idea.png'),
      icon10 = require('../../assets/images/icon/icon-fun-about.png'),
      icon11 = require('../../assets/images/icon/icon-fun-abort.png');

class User extends Component{
    constructor(props){
        super(props);
        this.state = {}

        //接口列表数据
        this.exportList = [
            {
                icon:icon1,
                label:'钱包',
                url:"page404"
            },
            {
                icon:icon2,
                label:'推广注册',
                url:"page404"
            },
            {
                icon:icon3,
                label:'我的团队',
                url:"page404"
            },
            {
                icon:icon4,
                label:'我的奖励',
                url:"page404"
            },
            {
                icon:icon5,
                label:'收藏',
                url:"page404"
            },
            {
                icon:icon6,
                label:'优惠券',
                url:"page404"
            },
            {
                icon:icon7,
                label:'收货地址',
                url:"page404"
            },
            {
                icon:icon8,
                label:'安全设置',
                url:"page404"
            },
            {
                icon:icon9,
                label:'意见反馈',
                url:"page404"
            },
            {
                icon:icon10,
                label:'帮助中心',
                url:"page404"
            },
            {
                icon:icon11,
                label:'退出登陆',
                url:"page404"
            },

        ]
    }

    componentDidMount(){

    }

    render(){
        return (
            <View style = {[ComStyle.flex,{backgroundColor:'#fff'}]}>
                
                <ScrollView

                    style = {ComStyle.flex}
                >
                    <Header title="我的主页" noBack = {true} backgroundColor={'#f6f6f6'}/>
                    <HeaderUI/>
                    <View style={UserStyle.main}>
                        <OrderListUI/>
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <OrderGroupUI/>
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <ExportListUI exportList={this.exportList} navigation={this.props.navigation}/>
                        <BottomTip/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

class HeaderUI extends PureComponent{
    render(){
        
        return(
            <View style = {[UserStyle.header,ComStyle.flex_row_l]}>
                <View style={[UserStyle.header_info,ComStyle.flex_row_l,ComStyle.flex]}>
                    <View style={UserStyle.header_info_left}>
                        <ComImage source={{uri:'http://placeho.it/88x88/222'}} style={UserStyle.header_info_picture}/>
                    </View>
                    <View style={[UserStyle.header_info_right,ComStyle.flex]}>
                        <Text style={UserStyle.header_info_name} numberOfLines={1} ellipsizeMode={'tail'}>游客</Text>
                        <Text style={UserStyle.header_info_level}>普通用户</Text>
                    </View>
                </View>
                <TouchableOpacity style = {UserStyle.header_link}>
                    <Text style = {UserStyle.header_link_text}>账户管理 ></Text>
                </TouchableOpacity>
            </View>
        )
        
    }
}

class OrderGroupUI extends PureComponent{
    render(){
        return(
            <View style = {[ComStyle.flex_row_l,UserStyle.order]}>
                <View style = {[ComStyle.flex,ComStyle.flex_row_l]}>
                    <TouchableOpacity
                        style={[ComStyle.flex,ComStyle.flex_column_lt,UserStyle.order_item]}
                    >
                        <Text style={UserStyle.order_item_value}>0</Text>
                        <Text style={UserStyle.order_item_label}>拼团中</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[ComStyle.flex,ComStyle.flex_column_lt,UserStyle.order_item]}
                    >
                        <Text style={UserStyle.order_item_value}>0</Text>
                        <Text style={UserStyle.order_item_label}>已成功</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[ComStyle.flex,ComStyle.flex_column_lt,UserStyle.order_item]}
                    >
                        <Text style={UserStyle.order_item_value}>0</Text>
                        <Text style={UserStyle.order_item_label}>已失效</Text>
                    </TouchableOpacity>
                    
                </View>
        
                <TouchableOpacity style = {[UserStyle.order_right,ComStyle.flex_column_lt]}>
                    <Text style = {[UserStyle.order_right_text]}>拼团订单</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

class OrderListUI extends PureComponent{
    render(){
        return(
            <View style = {[ComStyle.flex_row_l,UserStyle.order]}>
                <View style = {[ComStyle.flex,ComStyle.flex_row_l]}>
                    <TouchableOpacity
                        style={[ComStyle.flex,ComStyle.flex_column_lt,UserStyle.order_item]}
                    >
                        <Text style={UserStyle.order_item_value}>0</Text>
                        <Text style={UserStyle.order_item_label}>待付款</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[ComStyle.flex,ComStyle.flex_column_lt,UserStyle.order_item]}
                    >
                        <Text style={UserStyle.order_item_value}>0</Text>
                        <Text style={UserStyle.order_item_label}>待发货</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[ComStyle.flex,ComStyle.flex_column_lt,UserStyle.order_item]}
                    >
                        <Text style={UserStyle.order_item_value}>0</Text>
                        <Text style={UserStyle.order_item_label}>待收货</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[ComStyle.flex,ComStyle.flex_column_lt,UserStyle.order_item]}
                    >
                        <Text style={UserStyle.order_item_value}>0</Text>
                        <Text style={UserStyle.order_item_label}>评价</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style = {[UserStyle.order_right,ComStyle.flex_column_lt]}>
                    <Text style = {[UserStyle.order_right_text]}>退款售后</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[UserStyle.order_right,ComStyle.flex_column_lt]}>
                    <Text style = {[UserStyle.order_right_text]}>全部</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

class ExportListUI extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        const {exportList,navigation} = this.props;
        const rows = Math.floor(exportList.length / 3);
        return (
        <View style={[ComStyle.flex_row_wrap,UserStyle.export]}>
            {exportList.map((item, idx)=> (
                <TouchableOpacity 
                    style = {[UserStyle.export_item,((idx+1)%3 === 0)&&{borderRightWidth:0},(idx > rows * 3) && {borderBottomWidth:0}]} 
                    key={idx}
                    onPress = {()=>navigation.navigate(item.url)}
                >
                    <Image source={item.icon} style={UserStyle.export_item_icon}/>
                    <Text style={UserStyle.export_item_label}>{item.label}</Text>
                </TouchableOpacity>
            ))}
            
        </View>
        )
    }
}

export default User;