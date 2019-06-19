import React,{PureComponent} from 'react';
import { 
        Image,
        View,
        StyleSheet,
        TouchableOpacity
} from 'react-native';

import { Carousel } from '@ant-design/react-native';
import Devices from '../utils/size';
import * as PropTypes from 'prop-types';
import ComImage from './ComImage';


export default class BannerCarousel extends PureComponent{
    constructor(props){
        super(props);
    }
    static propTypes = {
        advert:PropTypes.array,
        height:PropTypes.number,
        width:PropTypes.number
    }
    static defaultProps = {
        advert:[],
        height:Devices.height,
        width:Devices.width
    }

    render(){
        const {height,width} = this.props;
        const iheight = parseInt(height * Devices.remWidth);
        const iwidth = parseInt(width * Devices.remWidth);
    
        return (
        <View style={[styles.UCarousel,{height:iheight}]}>
            <Carousel 
                    autoplay
                    infinite
                    autoplayInterval={this.props.autoplayInterval || 8000}
                    dotStyle={{width:12,height:3,backgroundColor:'#fff'}}
                >
                {
                    this.props.advert.map((item,idx) => {

                        return (
                            <View key = {idx}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style = {{height:iheight,overflow:'hidden'}}
                                >
                                    <ComImage 

                                        style={{width:iwidth ,height:iheight}} 
                                        source={ {uri:item.ad_pic} }
                                    />
                                </TouchableOpacity>
                            </View>
                        )

                    })
                }
            </Carousel>
        </View>)
                    
    }
}

const styles = StyleSheet.create({
    UCarousel:{
        // paddingLeft:15,
        // paddingRight:15,
    }
})