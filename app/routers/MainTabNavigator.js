import React from 'react';
import { Image,StyleSheet } from 'react-native';

import {
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation'

import Index from '../pages/Index/index'; //首页
import User from '../pages/User/index';//个人中心
import Spread from '../pages/Spread/index';//推广
import Cart from '../pages/Cart/index';//购物车
import Category from '../pages/Category/index';//分类

//Demo页面
import ImagePicker from '../pages/Demo/RNImagePicker';//图片上传
import RNScrollView from '../pages/Demo/RNScrollView';//滚动视图

const indexIcon = require('../assets/images/nav/Select_home_s.png');
const indexSelectIcon = require('../assets/images/nav/Select_home.png');
const categoryIcon = require('../assets/images/nav/Select_know_how_s.png');
const categorySelectIcon = require('../assets/images/nav/Select_know_how.png');
const spreadIcon = require('../assets/images/nav/Select_community_s.png');
const spreadSelectIcon = require('../assets/images/nav/Select_community.png');
const cartIcon = require('../assets/images/nav/Select_shopping_cart_s.png');
const cartSelectIcon = require('../assets/images/nav/Select_shopping_cart.png');
const userIcon = require('../assets/images/nav/Select_User_s.png');
const userSelectIcon = require('../assets/images/nav/Select_User.png');

const IndexStack = createStackNavigator({
    Index:{
        screen:Index,
        navigationOptions:() => ({
            header:null
        })
    }
});

IndexStack.navigationOptions = {
    tabBarLabel: '首页',
    header:null,
    tabBarIcon:({focused}) => {
        if(focused){
            return (<Image 
                style = {{width:24,height:24}}
                source = {indexSelectIcon}
            />)
        }else{
            return (<Image 
                style = {{width:24,height:24}}
                source = {indexIcon}
            />) 
        }
    }
};

const CategoryStack = createStackNavigator({
    Category:{
        screen:Category,
        navigationOptions:() => ({
            header:null
        })
    }
});

CategoryStack.navigationOptions = {
    tabBarLabel: '分类',
    header:null,
    tabBarIcon:({focused}) => {
        if(focused){
            return (<Image 
                style = {{width:24,height:24}}
                source = {categorySelectIcon}
            />)
        }else{
            return (<Image 
                style = {{width:24,height:24}}
                source = {categoryIcon}
            />) 
        }
    }
};

const CartStack = createStackNavigator({
    Cart:{
        screen:Cart,
        navigationOptions:() => ({
            header:null
        })
    }
});

CartStack.navigationOptions = {
    tabBarLabel: '购物车',
    header:null,
    tabBarIcon:({focused}) => {
        if(focused){
            return (<Image 
                style = {{width:24,height:24}}
                source = {cartSelectIcon}
            />)
        }else{
            return (<Image 
                style = {{width:24,height:24}}
                source = {cartIcon}
            />) 
        }
    }
};

const SpreadStack = createStackNavigator({
    Spread:{
        screen:Spread,
        navigationOptions:() => ({
            header:null
        })
    }
});

SpreadStack.navigationOptions = {
    tabBarLabel: '推广',
    header:null,
    tabBarIcon:({focused}) => {
        if(focused){
            return (<Image 
                style = {{width:24,height:24}}
                source = {spreadSelectIcon}
            />)
        }else{
            return (<Image 
                style = {{width:24,height:24}}
                source = {spreadIcon}
            />) 
        }
    }
};

const UserStack = createStackNavigator({
    User:{
        screen:User,
        navigationOptions:() => ({
            header:null
        })
    }
});

UserStack.navigationOptions = {
    tabBarLabel: '我的',
    header:null,
    tabBarIcon:({focused}) => {
        if(focused){
            return (<Image 
                style = {{width:24,height:24}}
                source = {userSelectIcon}
            />)
        }else{
            return (<Image 
                style = {{width:24,height:24}}
                source = {userIcon}
            />) 
        }
    }
};


const BottomTabNavigator = createBottomTabNavigator({
    IndexStack,
    CategoryStack,
    SpreadStack,
    CartStack,
    UserStack
    
},{
    tabBarOptions:{
        activeTintColor:'#333',
        inactiveTintColor:'#aaa',
        initialRouteName:'IndexStack'
    }
});

const RootStack = createStackNavigator({
    BottomTab:{
        screen:BottomTabNavigator,
        navigationOptions:()=>({
            header:null,
        })
    },
    ImagePicker:{
        screen:ImagePicker,
        navigationOptions:()=>({
            title:'ImagePicker'
        })
    },
    RNScrollView:{
        screen:RNScrollView,
        navigationOptions:()=>({
            header:null
        })
    }
})

export default RootStack;
