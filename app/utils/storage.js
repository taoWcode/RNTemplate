import AsyncStorage from '@react-native-community/async-storage';
//设置localData
async function setLocalData(name, val) {
    try {
        await AsyncStorage.setItem(name, JSON.stringify(val));
    } catch (error) {
        console.log(error);
        console.log('Error saving data');
    }
}

//获取localData
async function getLocalData(name) {
    try {
        const result = await AsyncStorage.getItem(name);
        console.log('result');
        console.log(result);
        return result;
    } catch (error) {
        
        console.log(error);
        console.log('retrieveData failure!');
        return false;
    }
}

//合并localData
async function mergeLocalData(key,val){
    try {
        await AsyncStorage.mergeItem(key,JSON.stringify(val))
    } catch (error) {
        console.log(error);
        console.log('merge failure')
        return false;
    }
}

//清除所有localData
async function clearLocalData(){
    try{
        await AsyncStorage.clear();
    } catch(error) {
        console.log(error);
        console.log('clear failure');
    }
}

export default {
    setLocalData,
    getLocalData,
    mergeLocalData,
    clearLocalData,
}