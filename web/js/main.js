$(function(){
		$('#downbtn1').click(function() {
			$('#downbtn1').hide();
			$('#downbtn2').show().get(0).currentTime = 0;
			$('#downbtn2').show().get(0).play();
		});

    $('#downbtn2').click(function () {
			$('#downbtn2').hide().get(0).pause();
    	$('#downbtn1').show();
    }) 

	$("#loginname a").click(function(e){
		$("#loginname").hide();
		$("#in-reg").show();
		e.preventDefault();
	})
//关闭表单
	$(".close").click(function(){
		$(this).parents(".box").hide();
	})
//点击登录
	$("#btnd").click(function(e){
		$("#box1").css("display","block");
		$("#box1 .tip").html("");
		$("#box1").find("input:text").val("");
		e.preventDefault();
	})

//点击注册
	$("#btnz").click(function(e){
		$("#box2").css("display","block");
		$("#box2").find(".tip").html("");
		$("#box2").find("input:text").val("");
		e.preventDefault();
	})

//登录验证
	
	$("#guser").focus(function(){
		gusertip.innerHTML = "请输入用户名";
	});

	$("#guser").blur(gublur);

	function gublur(){
		if (!guser.value) {
			gusertip.innerHTML = "用户名不能为空";
			return false;
		}else{
			return true;
		}
	}

	$("#gpwd").focus(function(){
		gpwdtip.innerHTML = "请输入密码";
	});

	$("#gpwd").blur(gpblur);

	function gpblur(){
		if (!gpwd.value) {
			gpwdtip.innerHTML = "密码不能为空";
			return false;
		}else{
			return true;
		}
	}

	$("#gcbtn").click(function(){
		$("#guser").blur();
		$("#gpwd").blur();

		if (gublur() && gublur()) {
			$.get("http://localhost:8888/denglu",
				  {username:$("#guser").val(),pwd:$("#gpwd").val()},
				  function(data){
				  	switch(data){
				  		case "0":
				  			$("span.tip").html("用户不存在");
				  			break;
				  		case "1":
				  			$("#box1").hide();
				  			$("#in-reg").hide();
				  			$("#loginname").show().children("span").html("欢迎回来!" + $("#guser").val());
				  			$("#box1").find("input:text").val("");
				  			break;
				  		case "2":
				  			$("span.tip").html("您输入的密码有误");
				  			break;
				  	}
				  }
			  )
		}
	});

	//用户注册

	$("#username").focus(function(){
		$("#username").val("");
		usertip.innerHTML = "要求字母、数字、下划线构成，6位，首字母不可以是数字";
	});

	$("#username").blur(zcublur);

	function zcublur(){
		if (username.value == "") {
			usertip.innerHTML = "用户名不能为空!";
			return false;
		}
	
		var regex = /^[a-zA-Z_]\w{5,11}$/;
	
		if (regex.test(username.value)) {
			usertip.innerHTML = "√";
			return true;
		}else{
			usertip.innerHTML = "×";
			return false;
		}
	}

	$("#pwd").focus(function(){
		$("#pwd").val("");
		pwdtip.innerHTML = "要求6-16个字符，英文字母数字下线组成。不能以数字头";
	})

	$("#pwd").blur(zcpblur);

	function zcpblur(){
		if (pwd.value == "") {
			pwdtip.innerHTML = "密码不能为空";
			return false;
		}

		var regex = /^[a-zA-Z_]\w{5,15}$/;

		if (regex.test(pwd.value)) {
			pwdtip.innerHTML = "√";
			return true;
		}else{
			pwdtip.innerHTML = "密码输入有误";
			return false;
		}
	}


	$("#repwd").focus(function(){
		$("#repwd").val("");
		repwdtip.innerHTML = "重新输入密码";
	});


	$("#repwd").blur(zcrepblur);

	function zcrepblur(){
		if (repwd.value == "") {
			repwdtip.innerHTML = "密码不能为空";
			return false;
		}
		if (repwd.value != pwd.value) {
			repwdtip.innerHTML = "两次输入密码不同,请重新输入";
			return false;
		}else{
			repwdtip.innerHTML = "√";
			return true;
		}
	}

	$("#email").focus(function(){
		$("#email").val("");
		emailtip.innerHTML = "电子邮件：格式为xxxxx@xxxxxx.com/cn/net/com.cn/edu/gov";
	})

	$("#email").blur(zceblur);

	function zceblur(){
		if (email.value == "") {
			emailtip.innerHTML = "邮箱不能为空!";
			return false;
		}
	
		var regex = /^\w+@\w+\.(com|cn|net|com\.cn|edu|gov)$/;
	
		if (regex.test(email.value)) {
			emailtip.innerHTML = "√";
			return true;
		}else{
			emailtip.innerHTML = "邮箱格式不正确，请重新填写";
			return false;
		}
	}

	$("#relname").focus(function(){
		$("#relname").val("");
		relnametip.innerHTML = "请输入真实姓名";
	})

	$("#relname").blur(zcrelblur);

	function zcrelblur(){
		if (!relname.value) {
			relnametip.innerHTML = "姓名不能为空";
			return false;
		}else{
			relnametip.innerHTML = "√";
			return true;
		}
	}

	$("#codeid").focus(function(){
		$("#codeid").val("");
		codeidtip.innerHTML = "请输入您的身份证号,长度需大于等于18位";
	})

	$("#codeid").blur(zcciblur);
	function zcciblur(){
		if (!codeid.value) {
			codeidtip.innerHTML = "身份证号码不能为空";
			return false;
		}

		if (codeid.value.length < 18) {
			codeidtip.innerHTML = "输入身份证号不足18位，请重新输入";
			return true;
		}else{
			codeidtip.innerHTML = "√";
			return true;
		}
	}

	$("#certain").click(function(){
		$("#username").blur();
		$("#pwd").blur();
		$("#repwd").blur();
		$("#email").blur();
		$("#relname").blur();
		$("#codeid").blur();
		if (zcublur() && zcpblur() && zcrepblur() && zceblur() 
			&& zcrelblur() && zcciblur() && agree.checked) {
				$.post("http://localhost:8888/zhuce",
						{username:$("#username").val(),pwd:$("#pwd").val()},
						function(data){
							switch(data){
								case "0":
									alert("该用户名已被注册");
									break;
								case "1":
									var flag = confirm("注册成功,是否登录?");
									if (flag) {
										$("#btnd").click();
										$("#box2").css("display","none");
									}else{
										location.href = "http://localhost:8888/";
									}
							}
						})
		}
	})
})

