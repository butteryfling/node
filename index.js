
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");

//创建服务器实例
var app = express();

app.listen(8888,function(){
	console.log("服务器已开启，端口号是8888");
})


//托管静态文件
app.use(express.static("./web"));


//设置路由
app.get("/",function(req,res){
	res.sendFile(__dirname + "/web/index.html");
})

//帮助页面
app.get("/help",function(req,res){
	res.sendFile(__dirname + "/web/help.html");
})


//资讯页面
app.get("/zixun",function(req,res){
	res.sendFile(__dirname + "/web/zixun.html");
})

//活动页面
app.get("/activity",function(req,res){
	res.sendFile(__dirname + "/web/activity.html");
})


//存储用户信息的数组，每一个数组元素就是一个用户信息
var userArr = [];

//使用body-parser这个模块中的url编码的函数，将请求体中的参数获取到,post方式需用
var urlencode = bodyParser.urlencoded({extended:false});

app.post("/zhuce",urlencode,function(req,res){

	// res.send("注册页面---------get");
	for (var i = 0; i < userArr.length; i++) {
		if (userArr[i].username == req.body.username) {
			res.send("0")
			return;
		}
	}

	userArr.push(req.body);
	console.log(userArr);
	res.send("1");
})


//登录页面

app.get("/denglu",function(req,res){

	for (var i = 0; i < userArr.length; i++) {
		if (userArr[i].username == req.query.username) {
			if (userArr[i].pwd == req.query.pwd) {
				res.send("1");
				return;
			}else{
				res.send("2");
				return;
			}
		}
	}

	res.send("0");
})

//资讯页内容，三个页面

var page1 = "";
var page2 = "";
var page3 = "";

request("http://duif.applinzi.com/leyuan/news.php?pageNum=1",
	function(err,res,body){
		if (!err&&res.statusCode == 200) {
			page1+=body;
		}
	}
);

request("http://duif.applinzi.com/leyuan/news.php?pageNum=2",
	function(err,res,body){
		if (!err&&res.statusCode == 200) {
			page2+=body;
		}
	}
);
request("http://duif.applinzi.com/leyuan/news.php?pageNum=3",
	function(err,res,body){
		if (!err&&res.statusCode == 200) {
			page3+=body;
		}
	}
);

var pagea = "";
//活动页面
request("http://duif.applinzi.com/leyuan/activitys.php",
	function(err,res,body){
		if (!err&&res.statusCode == 200) {
			pagea+=body;
			console.log(pagea);
		}
	}
);


//资讯页面
app.get("/zixunpage",function(req,res){
	// res.sendFile(__dirname + "/web/zixun.html");
	if (req.query.pageindex == 1) {
		res.send(page1);
	}
	if (req.query.pageindex == 2) {
		res.send(page2);
	}
	if (req.query.pageindex == 3) {
		res.send(page3);
	}

})

//活动
app.get("/activitypage",function(req,res){
	// res.sendFile(__dirname + "/web/zixun.html");
		// console.log(pagea);
		res.send(pagea);

})


