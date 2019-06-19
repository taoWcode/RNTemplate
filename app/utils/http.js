
/**
 * Create by weitao 2019/05/16
 * @des 借鉴fetch轻量级封装
 * @from 借鉴于gongchenghui
 * @fromUrl https://blog.csdn.net/gongch0604/article/details/84630587 
 */

import {Component} from 'react'; 
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {Toast,Modal,Portal} from '@ant-design/react-native';
import CryptoJS from 'crypto-js';

const SECRET = 'ebiz_app_token'; //密钥

/**
 * @des fetch网络请求的header,可自定义header内容
 */
let header = {
    Accept:'application/json',
    "Content-Type":"application/json"
}

/**
 * @des GET请求时，拼接请求URL
 * @param url 请求url
 * @param params 请求参数
 * @returns {*}
 */
const handleUrl = (url) => (params) => {
    if(params){
        let paramsArray = [];
        
        Object.keys(params).forEach(key => {
            paramsArray.push(key + '=' + encodeURIComponent(params[key]));
        });

        if(url.search(/\?/) === -1){
            typeof params === 'object' ? (url += "?" + paramsArray.join('&')) : url;
        }else{
            url += "&" + paramsArray.join('&');
        }
    }
    console.log(url);
    return url;
}

/**
 * @des fetch网络请求超时处理
 * @param original_promise 原始的fetch
 * @param timeout 超时时间 30s
 * @returns {Promise.<*>}
 */
const timeoutFetch = (originalFetch, timeout = 30000) => {
    let timeoutBlock = ()=>{};
    let timeoutPromise = new Promise((resolve,reject) =>{
        timeoutBlock = () => {
            //请求超时处理
            reject({
                message:"请求超时了",
                code:500,
                errorCode:999
            })
        }
    });

    let abortablePromise = Promise.race([originalFetch,timeoutPromise])

    setTimeout(() => {
        timeoutBlock();
    },timeout);

    return abortablePromise;
}



/**
 * 网络请求工具类
 */
 class HttpUtils extends Component {

    constructor(props){
        super(props);
    }

    /**
     * @des 基于fetch 封装的GET 网络请求
     * @param {String} url 请求url
     * @param {Object} params 请求参数
     * @param {Boolean} keepLoging 是否需要登陆
     * @param {Boolean} needLoading 是否需要加载状态
     * @param {String} loadingStr 加载字眼
     * @returns {Promise}
     */
    static getRequest = async(url, params = {},keepLoging = false, needLoading = false, loadingStr = '正在请求数据') => {
        //data 请求参数，callbackData携带执行函数，常用与登陆返回或网络刷新,headers自定义头部
        const {data,callbackData} = params;

        let sessionId = '',
            keyLoading= null,
            headers = null;

        //需要登陆，获取sessionId，没有则跳转登陆页
        if(keepLoging){
            sessionId = await getLocalData('sessionId');
            if(!sessionId){
                this.props.navigation.navigate('Login',{callbackData:callbackData})
            }
        }

        //设置加载状态
        if( needLoading ){
            keyLoading = Toast.loading(loadingStr,0);
        }

        //加密
        const date = parseInt(+new Date()/1000);
        const str = [date, SECRET].join(',');
        const authSecret = CryptoJS.SHA1(str).toString();
        const json = JSON.stringify({
            "Date":date,
            "Auth-Secret":authSecret
        });
        const Authorization = 'Bearer ' + transEBC(authSecret, json);

        headers = {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'App-Version':'app/1.0',
            'Date':date,
            'www-authorization':Authorization,
            'Cookie':'PHPSESSID=' + sessionId
        }

        if(params.headers){
            headers = {
                ...headers,
                ...options.headers
            }
        }


        return timeoutFetch(
            fetch(handleUrl(url)(data),{
                method:"GET",
                headers:headers
            })
        ).then((response) => {
            if(response.ok){
                return response.json();
            }else{
                //alert("服务器繁忙，请稍后再试")
            }
        }).then((response) => {
            // response.code：是与服务器端约定code：200表示请求成功，非200表示请求失败，message：请求失败内容
            if(response.code == 200){
                return response;
            }else{
                //非 200,错误处理
                return response;
            }
        }).catch((error) => {
            console.log('error');
            console.log(error);
        })
    }

    /**
     * @des 基于fetch 的POST请求
     * @param url 请求的URL
     * @param params 请求参数
     * @param {Boolean} keepLoging 是否需要登陆
     * @param {Boolean} needLoading 是否需要加载状态
     * @param {String} loadingStr 加载字眼
     * @returns {Promise}
     */

     static postRequest = async(url, params = {}, keepLoging = false, needLoading = false, loadingStr = '正在请求数据') => {
        const {data,callbackData} = params;

        let sessionId = '',
            keyLoading= null,
            headers = null;

        //需要登陆，获取sessionId，没有则跳转登陆页
        if(keepLoging){
            sessionId = await getLocalData('sessionId');
            if(!sessionId){
                this.props.navigation.navigate('Login',{callbackData:callbackData})
            }
        }

        //设置加载状态
        if( needLoading ){
            keyLoading = Toast.loading(loadingStr,0);
        }

        //加密
        const date = parseInt(+new Date()/1000);
        const str = [date, SECRET].join(',');
        const authSecret = CryptoJS.SHA1(str).toString();
        const json = JSON.stringify({
            "Date":date,
            "Auth-Secret":authSecret
        });
        const Authorization = 'Bearer ' + transEBC(authSecret, json);

        headers = {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'App-Version':'app/1.0',
            'Date':date,
            'www-authorization':Authorization,
            'Cookie':'PHPSESSID=' + sessionId
        }

        if(params.headers){
            headers = {
                ...headers,
                ...options.headers
            }
        }

        let formData = new FormData();
         Object.keys(data).forEach(key => formData.append(key,data[key]));
         return timeoutFetch(
             fetch(url,{
                 method:"POST",
                 headers:header,
                 body:formData
             })
         ).then(response => {
             if (response.ok){
                 return response.json();
             } else {
                //alert("服务器繁忙。请稍后再试；\r\nCode:" + response.status)
             }
         }).then(response => {
             if(response && response.code === 200) {
                 return response;
             }else{
                 return response;
             }
         }).catch(error => {
             //alert("当前网络不可用，请检查网络设置")
         })
     }
}

function transEBC(key, value) {

    let key1 = CryptoJS.enc.Utf8.parse(key);

    const encrypted = CryptoJS.DES.encrypt(value, key1, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    return encrypted.toString();
}

function resolveEBC(key, value) {

    let key1 = CryptoJS.enc.Utf8.parse(key);
    if (typeOf(value) == 'number') {
        value = value.toString();
    }

    const encrypted = CryptoJS.DES.decrypt(value, key1, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    console.log('解密：' + key);
    console.log(encrypted.toString());
    return encrypted.toString();
}

async function setLocalData(name, val) {
    try {
       
        await AsyncStorage.setItem(name, JSON.stringify(val));
        
    } catch (error) {
        console.log(error);
        console.log('Error saving data');
    }
}

async function getLocalData(name) {
    try {
        const result = await AsyncStorage.getItem(name);
        console.log('result');
        console.log(result);
        return result;
    } catch (error) {
        return false;
        console.log(error);
        console.log('retrieveData failure!');
    }
}




export default withNavigation(HttpUtils)