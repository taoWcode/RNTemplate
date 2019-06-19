import React,{Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import {Button} from '@ant-design/react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class RNAsyncStorage extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    async _set(key,val){
        try{
            await AsyncStorage.setItem(key,val);
        }catch(error)=>{
            console.log('Saving error');
            console.log(error);
        }
    }

    async _get(key){
        try{
            const result = await AsyncStorage.getItem(key);
            console.log('result');
            console.log(result);
            return result;
        }catch(error){
            return false;
            console.log('error');
            console.log('getData faulure');
        }
    }

    render(){
        return (
            <View>
                <Button></Button>
            </View>
        )
    }
}