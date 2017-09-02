//移入全部商品显示下拉菜单
$(function(){
			$(".header .allgoods,.b-list01,second-classNav01,second-classNav02,.second-list01,second-list02").mouseenter(function(){
				$(".b-list01").show();
			})
			$(".header .allgoods,.b-list01,second-classNav01,second-classNav02,.second-list01,second-list02").mouseleave(function(){
				$(".b-list01").hide();
			})
		
		
		})

//商品详情属性

//获取json
	$(function(){
		
		var myArr = [];
		$.get("json/goods.json",function(arr){
		myArr = arr;	
//		console.log(data);
		for(var i=0;i<arr.length;i++){
			var obj = arr[i];
			
			var li = $("<li></li>").appendTo("#list");
			
			var img1 = $("<img src="+obj.img3+">").appendTo(li);
			var img2 = $("<img src="+obj.img3+">").appendTo(li);
			var price = $("<p >"+obj.unit+obj.price1+"<span>"+obj.unit+obj.price1+"</span></p>").appendTo(li);
			var describe = $("<p >"+obj.name+"</p>").appendTo(li);
			$(img1).addClass("bigImg");
			$(img2).addClass("smallImg");
			$(price).addClass("price");
			$(describe).addClass("describe");
		}
		
		})
		$("#list").on("click", "li",function(){
			//下标
			var index = $(this).index();
			var obj = myArr[index];
			console.log(obj.id);
			
			//进入商品详情
			location.href = "goods.html?id=" + obj.id;
		})
		
		
		
		
		
	})





















