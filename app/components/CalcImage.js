import React,{PureComponent} from 'react';
import {Image} from 'react-native';
import Devices from '../utils/size';
import  PropTypes from 'prop-types';

export default class CalcImage extends PureComponent{
    
    
    static propTypes = {
        width:PropTypes.number,
        source:PropTypes.object
    }
    static defaultProps = {
        width:375,
       
    }
    constructor(props){
        super(props);
        this.state = {
            height:0,
            width:0
        }
        
    }

    componentDidMount(){
        const {source,width} = this.props;
        Image.getSize(source.uri,(rwidth,rheight) => {
            
            const wh = rwidth / rheight;
            const iwidth = parseInt(width * Devices.remWidth);
            const iheight = parseInt(iwidth / wh);
            console.log(width);
            this.setState({
                height:iheight,
                width:iwidth
            })
            
        })
    }

    render(){

        const {source} = this.props;
        const {width,height} = this.state;

        return (
            <Image
                source = {source}
                style = {{width:width,height:height}}
            />
        )
    }
}