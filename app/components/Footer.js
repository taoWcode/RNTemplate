import React,{PureComponent} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking
} from 'react-native';
import ComStyle from '../styles/CommonStyle';


export default class Footer extends PureComponent{

    openUrl(){
        Linking
            .openURL('https://www.junnet.net/')
            .catch(err => {
                console.error(err);
            })
    }

    render(){
        return (
            <View style={styles.footer}>
                <Text style={styles.footer_text}>
                    Copyright © 2019 eyesee All rights reserved.
                </Text>
                <View style={ComStyle.flex_row_lt}>
                    <Text style={styles.footer_text}>粤ICP备19022760号-1,由</Text>
                    <TouchableOpacity
                        onPress={this.openUrl}
                    >
                        <Text  style={styles.footer_link}>junnet.net</Text>
                    </TouchableOpacity>
                    <Text style={styles.footer_text}>提供技术服务</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer:{
        paddingTop:30,
        paddingBottom:15,
        paddingHorizontal: 10,
        backgroundColor:'#fff'
    },
    footer_text:{
        fontSize:12,
        color:'#666',
        textAlign:'center',
        lineHeight:20
    },
    footer_link:{
        fontSize:12,
        color:'#333',
        paddingHorizontal:3
    }
})