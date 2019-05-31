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

如果你是第一次使用，恭喜你，你将看到第一个红屏。</br>

!['图片'](https://raw.githubusercontent.com/taoWcode/RNTemplate/master/app/assets/RNImg/%7B%60AWODN%5DP7H%7D%40%5D~CX~XHVMV.png "Good luck")
</br>
----
</br>
### 2.项目UI，使用支付宝的antd库</br>

&nbsp;&nbsp;[官方引入教程](https://rn.mobile.ant.design/docs/react/introduce-cn)</br>

###### 安装</br>
`yarn add @ant-design/react-native`</br>


