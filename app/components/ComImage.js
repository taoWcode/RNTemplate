import React,{PureComponent} from 'react';
import FastImage from 'react-native-fast-image';
import {  StyleSheet, View,Image } from 'react-native';
import { ActivityIndicator,Icon } from '@ant-design/react-native';
import Api from '../utils/api';

const errImg = require('../assets/images/img-err.png');

class CustomImage extends PureComponent{
    constructor(props){
        super(props);

        let source = this.props.source;
        if(source.uri){
            if(source.uri){
                if(((source.uri).indexOf('http://')) == -1 && ((source.uri).indexOf('https://') == -1)){
                        source.uri = Api.RootUrl + source.uri;
                }
        }
        }

        this.state = {
            imageLoading: true,
            loadStatus:'pending',
            source:source
        }
    }

    imageLoadError(){
        console.log('onError');
        this.setState({
            loadStatus:'error'
        });

        this.props.onError && this.props.onError();
    }

    imageLoadStart(){

        const {loadStatus} = this.state;
        loadStatus != 'pending' && this.setState({
            loadStatus:'pending'
        })
    }

    imageLoadSuccess(){
       
        this.setState({
            loadStatus:'success'
        },()=>{
            this.props.onLoad && this.props.onLoad();
        })
    }
    renderPending(){
        return (
            <View style = {styles.pendingImageView}>
                <ActivityIndicator size="small" color="#ddd"/>
            </View>
        )
    }

    renderError(){
            return(
                <View style = {styles.pendingImageView}>
                    <Image
                        style = {this.props.style}
                        source = {errImg}
                        resizeMode={'contain'}
                    />
                </View>
            )
            
    }

    render(){
    
        const {style,resizeMode} = this.props;
        const {source,loadStatus} = this.state;
        
        return (
            <View style={[styles.customImageView]}>
                <FastImage
                    {...this.props}
                    style = {style}
                    source={source}
                    resizeMode = {loadStatus != 'pending' ? resizeMode : 'contain'}
                    onError = {this.imageLoadError.bind(this)}
                    onLoadStart = {this.imageLoadStart.bind(this)}
                    onLoad = {()=>{
                        this.imageLoadSuccess()
                    }}
                />

                {loadStatus === 'pending' && this.renderPending()}
                {loadStatus === 'error' && this.renderError()}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    customImageView: {
      flex: 1,
      justifyContent: 'center',
      position:'relative'
    },
    pendingImageView:{
        position:'absolute',
        right:0,
        top:0,
        left:0,
        bottom:0,
        zIndex:5,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    pendingImage:{
        width:32,
        height:32
    },
    errorText:{
        fontSize:12,
        color:'#ccc',
        textAlign:'center'
    }
});
  
  export default CustomImage;