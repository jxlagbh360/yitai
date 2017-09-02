$(function(){
	//$.ajax()
	//$.getJSON();
	//$.get()
	var myArr = [];
	$.get("json/shop.json",function(arr){
//		console.log(data);
		myArr = arr;
		//创建节点
		for(var i=0;i<arr.length;i++){
			var obj = arr[i];
			var li = $("<li></li>").appendTo(".clearfix");
			var a = $("<a href='#'></a>").appendTo(li);
			$("<img src="+obj.img+">").appendTo(a);
			var div = $("<div></div>").appendTo(a);
			div.addClass("item-msg");
			$("<span>"+obj.name+"</span>").appendTo(div);
			div.find("span").eq(0).addClass("f1");
			var span = $("<span></span>").appendTo(div);
			span.addClass("fr");
			$("<em>"+obj.price+obj.unit+"</em>").appendTo(span);
		}

	})
	
	
	var parmas=location.search.substring(1);
			var myname=getparmas(parmas,"username");
			
			function getparmas(parmas,key){
				var arr=parmas.split("&");
				for(var i=0;i<arr.length;i++){
					var str=arr[i];
					var arr2=str.split("=");
					if(arr2[0]==key){
						return arr2[1];
					}
				}
				return "";
			}
			console.log(myname);
		//点击商品进入商品详情
		$(".clearfix").on("click","li",function(){
			//先得到点击的商品下标
			var index = $(this).index();
			//当前点击的商品对象
			var obj = myArr[index];
			//进入商品详情
			location.href = "detail.html?id="+obj.id+"&index="+index+"&username="+myname;

		})
})
