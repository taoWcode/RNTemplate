import React,{Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

class User extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style = {{flex:1,justifyContent:'center'}}>
                <Text style = {{textAlign:'center'}}>我的</Text>
            </View>
        )
    }
}

export default User;