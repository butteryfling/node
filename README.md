# node

#本项目是一个固定大小的PC端网站(因重点是练习ajax数据请求和nodejs搭建后台响应数据,不过与快牙官网整体风格也相差无几)
#4个页面的切换都是通过express路由实现,并且实现对web目录的静态托管

#运行
#安装依赖
#npm install
#开启服务器
#npm run start
#注 本项目并未使用前端构建工具,因为比较easy嘛

#实现功能

#1、首页 实现登录和注册功能(与后台是保持一致的,index.js中用一个数组变量来存储前端用户注册信息)
<br/>
![Image text](https://github.com/butteryfling/node/blob/master/shut5.png)
![Image text](https://github.com/butteryfling/node/blob/master/shut1.png)
![Image text](https://github.com/butteryfling/node/blob/master/shut2.png)


#2、帮助页面 纯静态,内容区分左右,点击左侧右侧显示相应内容
![Image text](https://github.com/butteryfling/node/blob/master/shut6.png)

#3、活动页面和帮助页面中的数据都是从第三方服务器远程获取,由于并没有可用的jsonp接口,所以此处用到request插件由本地服务器代理请求第三方数据
![Image text](https://github.com/butteryfling/node/blob/master/shut3.png)
![Image text](https://github.com/butteryfling/node/blob/master/shut4.png)


