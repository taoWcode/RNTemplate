import React,{Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

class Category extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style = {{flex:1,justifyContent:'center'}}>
                <Text style = {{textAlign:'center'}}>分类</Text>
            </View>
        )
    }
}

export default Category;