$(function(){
				$.get("json/banner.json", function(data){
					//console.log(data); 
					var arr = data;
					for (var i=0; i<arr.length; i++) {
						var obj = arr[i];
						$("<li><img src="+ obj.img +" ></li>").appendTo("#list3");
						var li = $("<li></li>").appendTo("#list4");
						if (i==0) {
							li.addClass("current");
						}
					}
					//轮播
					lunbo();
				})
				//banner轮播图
				function lunbo(){
				var list1 = $("#list3");
				var list2 = $("#list4");
				var oli = $("#list3 li");
				var ali = $("#list4 li");
				
				//复制第一张图到最后
				oli.first().clone(true).appendTo(list1);
				var size = $("#list3 li").size();
				list1.width(1198*size);
				//开启定时器
			var index=0;
			var timer=setInterval(function(){
				index++;
				move();
			},3000);
			//移动函数
			function move(){
				if(index<0){
					list1.css("left", -1198*(size-1));
					index=size-2;
				}
				if(index>=size){
					list1.css("left", 0);
					index=1;
				}
				list1.stop().animate({left:-index*1198}, 500);
				ali.eq(index).addClass("current").siblings().removeClass("current");
					if (index == size-1) {
						ali.eq(0).addClass("current").siblings().removeClass("current");
					}
				}
			//上一张
			$("#fsl").click(function(){
				index--;
				move();
			})
			//下一张
			$("#fsr").click(function(){
				index++;
				move();
			})
			//鼠标移入暂停
			ali.mouseenter(function(){
					index = $(this).index();
					move();
				})
				
				$("#banner-wrapper").hover(function(){
					$("#fsl").show();
					$("#fsr").show();
					clearInterval(timer);
				},
				function(){
					$("#fsl").hide();
					$("#fsr").hide();
					timer = setInterval(function(){
						index++;
						move();
					}, 2000);
				})
				
				}
				})