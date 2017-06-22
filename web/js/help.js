
$(function(){

	$(".help-left>ul").find("li:nth-child(1)").css({"background-color":"#ffffff","color":"#1d74d6"})

	$(".help-left>ul").on("click","li",function(){
		$(".help-left>ul").find("li").css({"background-color":"","color":""});
		$(this).css({"background-color":"#ffffff","color":"#1d74d6"});

		$(".help-right>ul").css("display","none");
		if ($(this).attr("id") == "guid") {
			$(".direction").css("display","block");
		}else if($(this).attr("id") == "watching"){
			$(".fundesc").css("display","block");
		}else{
			$(".ofpro").css("display","block");
		}

	})
})

