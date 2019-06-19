import React,{Component} from 'react';
import Header from '../../components/Header';
import {
    View,
    Text,
} from 'react-native';

class Cart extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style = {{flex:1}}>
                <Header title="购物车"/>
                <Text style = {{textAlign:'center'}}>购物车</Text>
            </View>
        )
    }
}

export default Cart;