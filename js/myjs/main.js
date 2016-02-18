$(function(){
	$(".menu li").click(function(event){
		var index = $(".menu > li").index(this);
		console.log(index)
	})
});