import React,{PureComponent} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native';
import * as PropTypes from 'prop-types';
import {SafeAreaView,withNavigation} from 'react-navigation';
import {Icon} from '@ant-design/react-native';

import HeaderStyle from '../styles/HeaderStyle.js';
import Devices from  '../utils/size';

 class Header extends PureComponent{

    static propTypes = {
        backgroundColor:PropTypes.string,
        noBack:PropTypes.bool,
        leftFun:PropTypes.func,
        title:PropTypes.string,
        rightText:PropTypes.string,
        rightFun:PropTypes.func,
        color:PropTypes.string
    }
    static defaultProps = {
        noBack:false,
        title:'jungo商城',
        rightText:'',
        color:'#333',
        rightFun:()=>{}
    }

    constructor(props){
        super(props);

        this.leftFun = this.leftFun.bind(this);
    }

    /** 
     * @des 默认返回事件
    */
    leftFun(){
        this.props.navigation.goBack();
    }


    render(){
               
        const {
                backgroundColor,
                noBack,
                leftFun,
                title,
                rightText,
                rightFun,
                color
        } = this.props;

        return (
            <SafeAreaView style={[HeaderStyle.header,{paddingTop:Devices.statusbarHeight},backgroundColor && {backgroundColor:backgroundColor,borderBottomWidth:0}]}>
              
                <TouchableOpacity
                    style = {HeaderStyle.header_left}
                    onPress = {()=>{
                        !noBack ? this.leftFun() : leftFun();
                    }}
                >
                    {noBack ? (<Text></Text>) : (<Icon name='arrow-left' color={color} size={20}/>)}
                    
                </TouchableOpacity>
               
                <View style = {HeaderStyle.header_middle}>
                    <Text style={[HeaderStyle.header_middle_text,{color:color}]}>{title}</Text>
                </View>
                <TouchableOpacity style = {HeaderStyle.header_right}
                    onPress = {()=>{rightFun()}}
                >
                    <Text style = {[HeaderStyle.header_right_text,{color:color}]}>{rightText}</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default withNavigation(Header)

