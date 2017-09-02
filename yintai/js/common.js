

//顶部导航移入移出效果
$(function(){
	
	//移入微信位置
	$("#topper-wrapper .bt02").mouseenter(function(){
		$("#topper-wrapper .ewm01").fadeIn();
	})
	//移出微信位置
	$("#topper-wrapper .ewm01").mouseleave(function(){
		$("#topper-wrapper .ewm01").fadeOut();
	})
	
	
	//移入手机银泰位置
	$("#topper-wrapper .bt03").mouseenter(function(){
		$("#topper-wrapper .ewm02").fadeIn();
	})
	//移出手机银泰位置
	$("#topper-wrapper .ewm02").mouseleave(function(){
		$("#topper-wrapper .ewm02").fadeOut();
	})
	
	//移入手机银泰位置
	$(".topper-right .r-bt03").mouseenter(function(){
		$(".topper-right .t-right-list01").fadeIn();
	})
	//移出手机银泰位置
	$(".topper-right .t-right-list01").mouseleave(function(){
		$(".topper-right .t-right-list01").fadeOut();
	})
	
	
	//移入购物车位置
	$(".h-top .h-cart").mouseenter(function(){
		$(".h-top .h-cart-hover").fadeIn();
	})
	//移出购物车位置
	$(".h-top .h-cart-hover").mouseleave(function(){
		$(".h-top .h-cart-hover").fadeOut();
	})
	
	//移入全部商品显示下拉菜单
//	$("").mouseenter(function(){
////		alert(11);
//		$(".b-list01").show();
//	})
//	
	//移入单数左侧列表的位置
	$(".b-list01-li01").mouseenter(function(){
//		alert(11);
		$(".second-classNav01").show();
	})
	$(".second-classNav01").mouseenter(function(){
//		alert(11);
		$(".second-classNav01").show();
	})
	
	
	//移出单数左侧列表的位置
	$(".b-list01-li01").mouseleave(function(){
		$(".second-classNav01").hide();
	})
	
	$(".second-classNav01").mouseleave(function(){
		$(".second-classNav01").hide();
	})
	
	//移入双数左侧列表的位置
	$(".b-list01-li02").mouseenter(function(){
		$(".second-classNav02").show();
	})
	
	$(".second-classNav02").mouseenter(function(){
		$(".second-classNav02").show();
	})
	//移出双数左侧列表的位置
	$(".b-list01-li02").mouseleave(function(){
		$(".second-classNav02").hide();
	})
	
	$(".second-classNav02").mouseleave(function(){
		$(".second-classNav02").hide();
	})
	
})
























