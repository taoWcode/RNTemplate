import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {
    Button,
    WhiteSpace,
    WingBlank,
    Icon,
    Provider,
    Toast,
} from '@ant-design/react-native';

import ImagePicker from 'react-native-image-picker';

import CStyle from '../../styles/CommonStyle';



class RNImagePicker extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgs:[],//多图数组
            imgsFile:[],
            img:[],//单图
            imgFile:[],
        }

        this.getImg = this.getImg.bind(this);
        this.singleDelete = this.singleDelete.bind(this);
    }

    /**
     * @des 删除图片
     */
    singleDelete(type,idx){

        if(type === 'multi'){
            
            let {imgs,imgsFile} = this.state;
            imgsFile.splice(idx,1);
            imgs.splice(idx,1);

            this.setState({
                imgs:imgs,
                imgsFile:imgsFile
            })

        }else if(type === 'single'){

            let {imgFile,img} = this.state;
            imgFile.pop();
            img.pop();

            this.setState({
                img:img,
                imgFile:imgFile
            })
        }

        
    }

    /**
     * @des 获取图片文件
     * @params {String} type  'single' 表示处理单图  'multi'表示处理多图
     */
    getImg(type){

        const options = {
            title:'上传图片文件',
            quality:0.5,
            cancelButtonTitle:'取消',
            noData:true,
            takePhotoButtonTitle:"拍照",
            chooseFromLibraryButtonTitle:'从图库中获取',
            permissionDenied:{
                title:'权限请求',
                text:'我们需要获取查看你相册的权限。',
                reTryTitle:'重试',
                okTitle:'确定'
            }
        };

        ImagePicker.showImagePicker(options,(res) => {
            if(res.error === 'Cannot launch camera'){
                Toast.info('没有相机或无法打开相机！');
                return;
            }else{
                if(type === 'multi'){

                    let {imgs, imgsFile} = this.state;
                    imgsFile.push(res.uri);
                    this.setState({imgsFile:imgsFile});

                }else if(type === 'single'){
                    
                    const {img,imgFile} = this.state;
                    imgFile[0] = res.uri;

                    this.setState({
                        imgFile:imgFile
                    })
                }

            }

        })
    }

 

    componentDidMount(){

    }

    singleImgUpload(props){
        return (
            <View>
                <WhiteSpace/>
                    <View style = {CStyle.flex_row}>
                        {(props.img.length > 0) ? (
                            <View style = {[styles.imgBox,CStyle.ps_re]}>
                                <Image
                                    style={styles.img}
                                    source = {{uri:props.img[0]}}

                                />
                                <TouchableOpacity 
                                    style={[CStyle.ps_ab,{top:0,right:3}]} 
                                    activeOpacity = {0.9}
                                    onPress = {()=>this.singleDelete('single')}
                                    >
                                    <Icon name='close-circle' color='#fff' size={16} />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <TouchableOpacity
                                activeOpacity = {0.9}
                                style = {{padding:10,borderWidth:1,borderColor:'red'}}
                                onPress = {()=>this.getImg('single')}
                            >
                                <Icon
                                    name = {'plus'}
                                    size = {57}
                                    color = 'red'
                                />
                            </TouchableOpacity>
                        )}
                        
                        
                        
                    </View>
                <WhiteSpace/>
            </View>
        )
    }

    multiImgUpload(props){
        return(
            <View>
                <WhiteSpace/>
                    <View style = {CStyle.flex_row}>
                            {props.img.map((item,idx)=>{

                                if(props.max){
                                    if(idx < props.max){
                                        return (
                                            <View style = {[styles.imgBox,CStyle.ps_re]} key={idx}>
                                                <Image
                                                    style={styles.img}
                                                    source = {{uri:item}}

                                                />
                                                <TouchableOpacity 
                                                    style={[CStyle.ps_ab,{top:0,right:3}]} 
                                                    activeOpacity = {0.9}
                                                    onPress = {() => this.singleDelete('multi',idx)}
                                                    >
                                                    <Icon name='close-circle' color='#fff' size={16} />
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    }

                                }else{
                                    return (
                                        <View style = {[styles.imgBox,CStyle.ps_re]} key={idx}>
                                            <Image
                                                style={styles.img}
                                                source = {{uri:item}}

                                            />
                                            <TouchableOpacity 
                                                style={[CStyle.ps_ab,{top:0,right:3}]} 
                                                activeOpacity = {0.9}
                                                onPress = {() => this.singleDelete('multi',idx)}
                                                >
                                                <Icon name='close-circle' color='#fff' size={16} />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }

                                
                            })}

                            <TouchableOpacity
                                activeOpacity = {0.9}
                                style = {{padding:10,borderWidth:1,borderColor:'red'}}
                                onPress = {()=>this.getImg('multi')}
                            >
                                <Icon
                                    name = {'plus'}
                                    size = {57}
                                    color = 'red'
                                />
                            </TouchableOpacity>
                            
                    </View>
                <WhiteSpace/>
            </View>
        )
    }

    render(){

        const {imgFile,imgsFile} = this.state;

        return (
            <Provider>
            <View style = {{flex:1}}>
                <WingBlank>
                    <WhiteSpace/>
                        <Text>
                            处理单图
                        </Text>
                        {this.singleImgUpload({img:imgFile})}
                    <WhiteSpace/>

                    <WhiteSpace/>
                        <Text>
                            处理多图
                        </Text>
                        {this.multiImgUpload({img:imgsFile})}
                    <WhiteSpace/>
                </WingBlank>
            </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    imgBox:{
        width:79,
        height:79,
        marginRight:10
    },
    img:{
        width:79,
        height:79,
    }
})

export default RNImagePicker;