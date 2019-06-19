/** 
 * @des 用于页面底部提示
*/
import React,{PureComponent} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {
    WingBlank,
    WhiteSpace
} from '@ant-design/react-native';

export default class BottomTip extends PureComponent{
    constructor(props){
        super(props);
    }

    render(){

        const { text } = this.props;

        return(
            <View>
              
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank>
                    <Text style = {styles.BottomTipText}>{text || '—— 更多精彩，敬请期待 ——'}</Text>
                </WingBlank>
                <WhiteSpace/>
                <WhiteSpace/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    BottomTipText:{
        fontSize:14,
        textAlign:'center',
        color:'#666'
    }
})