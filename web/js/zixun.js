
function showMsg(arr){
	// $(".zx-list").remove($(".list-li"));
	$(".list-li").remove();
	for (var i = 0; i < arr.length; i++) {
		var $oli = $("#clone").clone(true).appendTo($(".zx-list")).removeAttr("id").addClass("list-li");
		$oli.find("h3").html(arr[i].title);
		$oli.find("p").html(arr[i].content);	
		// console.log(typeof arr[i].time);	
		var month = arr[i].time.substr(5,2);
		var day = arr[i].time.substr(8,2);
		var year = arr[i].time.substr(0,4);
		$oli.find(".date").html(month+day);
		$oli.find(".year").html(year);
	}
	$("body").scrollTop(0);
}

$(function(){
	$(".page a").click(function(e){
		$(".page a").css({
			"background-color":"",
			"color":""
		})
		$(this).css({
			"background-color":"#ffffff",
			"color":"#000000"
		});
		var pagenum = $(this).index() + 1;
		$.get("http://localhost:8888/zixunpage",{pageindex:pagenum},function(data){
			var obj = JSON.parse(data);
			showMsg(obj.data);
		})
		e.preventDefault();
	})


	$.get("http://localhost:8888/zixunpage",
		  {pageindex:1},
		  function(data){
			var obj = JSON.parse(data);
			showMsg(obj.data);
		  }
	)

})