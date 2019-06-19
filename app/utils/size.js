import {PixelRatio, Dimensions, Platform, NativeModules} from 'react-native';
let {width, height} =  Dimensions.get('window');
//获取状态栏高度
const { StatusBarManager } = NativeModules;
const statusbarHeight = Platform.os === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default {
    statusbarHeight:statusbarHeight,
    width:width,
    height:height,
    remWidth:width / 375
}