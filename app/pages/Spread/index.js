import React,{Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Button,
         WhiteSpace,
         WingBlank
} from '@ant-design/react-native';
class Spread extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style = {{flex:1,justifyContent:'center'}}>
                <WingBlank>
                    <WhiteSpace/>
                    <Button 
                        type="ghost"
                        onPress = {()=>{
                            this.props.navigation.navigate('ImagePicker');
                        }}
                    >图片上传Demo</Button>
                    <WhiteSpace/>
                    <WhiteSpace/>
                        <Button 
                            type="ghost"
                            onPress = {()=>{
                                this.props.navigation.navigate('RNScrollView');
                            }}
                        >滚动视图Demo</Button>
                    <WhiteSpace/>
                </WingBlank>
                
            </View>
        )
    }
}

export default Spread;