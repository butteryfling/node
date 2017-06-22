function showMsg(arr){
	// $(".zx-list").remove($(".list-li"));
	$(".list-li").remove();
	for (var i = 0; i < arr.length; i++) {
		var $oli = $("#clone").clone(true).appendTo($(".zx-list")).removeAttr("id").addClass("list-li");
		$oli.find("h3").html(arr[i].title);
		$oli.find("#right-title>span").html("活动时间:"+arr[i].time.substr(0,10));
		$oli.find("p").html(arr[i].content);
		if (arr[i].img=="0") {
			arr[i].img = "../img/zapya-football.png";
		}	
		$oli.find("img").attr("src",arr[i].img);
		// console.log(typeof arr[i].time);	
		var month = arr[i].time.substr(5,2);
		var day = arr[i].time.substr(8,2);
		var year = arr[i].time.substr(0,4);
		$oli.find(".date").html(month+"."+day);
		$oli.find(".year").html(year);
	}
}

$(function(){

	$.get("http://localhost:8888/activitypage",
		  function(data){
			var obj = JSON.parse(data);
			showMsg(obj.data);
		  }
	)

})