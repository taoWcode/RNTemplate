### ReactNativeTemplate
ReactNative以下由RN简写代替,RN模板，旨在快速创建项目，不用每次都配置环境
### RN常出现问题原因。
+ 往往是RN版本更新而第三方插件没有进行相应的更新，所以出现问题时，我们应该注意版本问题。
+ 在搜索问题寻求答案时，特别注意版本问题，很多解决方案都是旧版本，解决方案尽量找比较晚的日期发布的。
### 放弃Expo
expo构建RN项目，相对稳定，往往把常用的第三方插件包含在expo中，开发者不用为andorid或者ios配置特定的底层代码，可以完成百分之八十五的功能，但是因为是国外环境，所以所附带的一些功能不符合中国国情，比如第三方登入，支持fackbook，但是不支持微信，qq,支付宝。如果要完成这些功能必须引入第三方插件，必须配置底层代码，需要把expo eject，把android和ios包暴露出来。它本身就包含大部分功能，不像原生的RN要配置各种第三方插件，它自己把大部分第三方插件包含在里面，所以显得项目很大，如果不需要eject，特别是对于初级开发者还是很友好的，我的第一个项目就是expo创建的。
但是因为不符合国情，所以从第二个项目就不得不放弃expo，不过expo社区更新很快，如果没有贸易战原因，有一天我相信也会把符合中国国情的功能包含进去，还是值得关注，值得期待的。

# 开始构建。
  
### 1.基于版本0.57.7版本构建

###### 构建项目
`react-native init ReactNativeTemplate --version 0.57.7`

###### 运行项目

`cd ReactNativeTemplate`</br>
`react-native run-android`</br>
###### 出现问题 </br>

如果你是第一次使用，请确保你的模拟器或手机能被检测到，手机只要打开usb调试即可，模拟器需要手动链接，查看方式，命令行输入</br>
`adb devices`
，即使完成上述步骤，你还是会看到第一个红屏。</br>

!['图片'](https://raw.githubusercontent.com/taoWcode/RNTemplate/master/app/assets/RNImg/%7B%60AWODN%5DP7H%7D%40%5D~CX~XHVMV.png "Good luck")
</br>
这是经典的RN问题，网上搜索会有很多答案。请设置你的项目ip与电脑一致(终端必须同一个wifi)，且设置端口项目运行的端口一致，命令行执行</br>
`adb shell input keyevent 82`</br>

!['图片'](https://raw.githubusercontent.com/taoWcode/RNTemplate/master/app/assets/RNImg/%E7%AB%AF%E5%8F%A3%E9%97%AE%E9%A2%981.png "Good luck") </br>

!['图片'](https://raw.githubusercontent.com/taoWcode/RNTemplate/master/app/assets/RNImg/VVB%7DBG~GG2%5D3P6DPU%24B6UNQ.png "Good luck")  </br>

输入IP:端口,例如192.168.0.167：8081， Reload或者react-native run-android项目运行。</br>
adb 是安卓相关的命令行，不过多探讨，如果不成功请搜索进行安装。</br>

----
</br>
### 2.项目UI，使用支付宝的antd库</br>

&nbsp;&nbsp;[官方引入教程](https://rn.mobile.ant.design/docs/react/introduce-cn)</br>

###### 安装@ant-design/react-native</br>
`yarn add @ant-design/react-native`</br>
###### 安装相关的图标库@ant-design/icons-react-native
`yarn add @ant-design/icons-react-native`</br>
`react-native link @ant-design/icons-react-native`</br>
###### 按需加载安装babel-plugin-import
`yarn add babel-plugin-import --dev`</br>
然后在项目的根目录的.babelrc 文件添加代码</br>
(```)
    {
      "plugins":[
          ["import",{ libraryName: "@ant-design/react-native" }]
      ]
    }
(```)



