
//轮播图位置
$(function(){
	
	//先获取轮播图数据
	$.getJSON("json/lunbotu.json",function(data){
		// console.log("d");
		var arr = data;
		for (var i=0; i<arr.length; i++) {
			var obj = arr[i];
			
			$("<li><img src="+ obj.img01 +" ></li>").appendTo("#list1");
			$("<li><img src="+ obj.img02 +" ></li>").appendTo("#list3");
			var li = $("<li></li>").appendTo("#list2");
			
			if (i==0) {
				li.addClass("active");
			}
		}
		
	})
//	console.log($("#list1 li").size());
		//初始化显示第一张图
		$("#list1 li").eq(0).show().siblings().hide();
		$("#list3 li").eq(0).show().siblings().hide();
		//图片总数量
		var size = $("#list1 li").size(); //4
		
		//自动轮播
		var i = 0; //记录图片下标
		var timer = setInterval(function(){
			
			
			move(); 
			i++;
		}, 2000);
		
		//移动的函数
		function move(){
			// console.log(i);
//			console.log(size);
			//如果i超出了图片总数量
			if (i == 5) {
				i = 0; //即将移动到2张图
			}
			//假如小于0直接跳转5
			if(i<0){
				i=4;
			}
			//透明度切换到第i张图
			$("#list1 li").eq(i).stop().fadeIn().siblings().stop().fadeOut();
			$("#list3 li").eq(i).stop().fadeIn().siblings().stop().fadeOut();
			
			//改变ul2的按钮状态
			$("#list2 li").eq(i).removeClass().addClass("active").siblings().removeClass("active"); 
			
		}
		
		//li2上面的按钮
		
			$("#list2 li").hover(function(){
				var index = $(this).index();
				console.log(11);
				i = index;
				move();
			})
			
			//点击prev 往前 翻，点击next往后翻
			//上一页
			$("#prev").click(function(){
				i--;
				move();
			})
			
			//下一页
			$("#next").click(function(){
				i++;
				move();
			})
			//移入轮播图, 移出轮播图
			$(".banner").hover(function(){
				//移入, 关闭定时器
				clearInterval(timer);
				$("#prev").show();
				$("#next").show();
			}, 
			function(){
				//移出, 重新开启定时器
				
				timer = setInterval(function(){
					i++;
					move();
				}, 2000);
			})
			$("#prev").hide();
			$("#next").hide();
	})







		//右侧固定导航
		$(function(){
		//点击楼层按钮，让页面滚动到对应的位置
//		var index = 0;
		//点击最下面向上按钮，返回顶部
//		$("#nav .back-top").click(function(){
//			$(window).off("scroll");
//			 $("html,body").animate({scrollTop:0}, 1000);
//		})
		$("#nav li").mouseenter(function(){
			$(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
		})
		$("#nav li").mouseleave(function(){
			$(this).find("span").removeClass("active");
		})
	
	
		$("#nav li").click(function(){
			

			index = $(this).index();
			var top = $(".main").eq(index).offset().top;  
//			console.log(top);			
		
			//动画移动
			$(window).off("scroll");
			$("html,body").animate({scrollTop:top}, 500, function(){
				$(window).scroll(fn);
			});
		})
		
			//页面滚动时，让对应楼层的按钮选中
			$(window).scroll(fn);
			
			function fn(){
				var scrollTop = $(window).scrollTop();
//				console.log(scrollTop);
				
				var index =0;
				$(".main").each(function(){
					var top = $(this).offset().top;
					var winH = $(window).height();
//					console.log(scrollTop);
//					console.log(scrollTop + winH/2);
//					console.log(top);
					if (scrollTop + winH/2 >= top) {
						index = $(this).index();
					}
				})
				//console.log(index);
				
				$("#nav li").eq(index).find("span").addClass("active")
				.parent().siblings().find("span").removeClass("active");

			}
			
			
		
		
		
	
	})
		
		
		
		
		
		
		
		
	
	//主体左边点击轮播
	$(function(){
		
		function fn(id){
			
		var list1 = id.find(".include");
		var li1 = id.find(".include-inner");
//		console.log(li1);
				//复制第一张图到最后
			li1.first().clone(true).appendTo(list1);
//			console.log(li1)
				var size = $(id.find(".include-inner")).size();
				list1.width(160*size);
//				console.log(size);
				
				var i=0;
				id.find(".li-next").click(function(){
					console.log(i);
//					console.log(size)
					i++;
					if (i < 0) {
						list1.css("left", -160*(size-1));
						i = 2;
					}
//					console.log(i);
					list1.stop().animate({left:-i*160}, 500,function(){
						console.log(i)
						if (i >= size-1){
							list1.css("left", 0);
							i = 0;
						}
					});
					
				})	
				
				id.find(".li-prve").click(function(){
					console.log(i);
//					console.log(size)
					i--;
					if (i < 0) {
						list1.css("left", -160*(size-1));
						i = 2;
					}
//					console.log(i);
					list1.stop().animate({left:-i*160}, 500,function(){
						
						if (i >= size-1){
							list1.css("left", 0);
							i = 0;
						}
					});
					
				})	
									
			}
			
			fn($("#main03-wrapper"));
			fn($("#main04-wrapper"));
			fn($("#main05-wrapper"));
			fn($("#main06-wrapper"));
			fn($("#main07-wrapper"));
			fn($("#main08-wrapper"));
			fn($("#main09-wrapper"));
			fn($("#main10-wrapper"));
			fn($("#main11-wrapper"));




		function move(){
					
					if (i < 0) {
						list1.css("left", -160*(size-1));
						i = 2;
					}
					
					if (i >= size){
						list1.css("left", 0);
						i = 0;
					}
					
					list1.stop().animate({left:-i*160}, 500);
					
				}
		
		
		
		
		
	//m03-m11的 m-b-middle 鼠标移入效果
		$(".m-b-middle").mouseenter(function(){
			$(this).find(".prev").animate({"left":0},500);
			$(this).find(".next").animate({"right":0},500);
		})
		
		$(".m-b-middle").mouseleave(function(){
			$(this).find(".prev").animate({"left":"-30px"},500);
			$(this).find(".next").animate({"right":"-30px"},500);
		})
		
		
		
		
		
		
		
		
		
		//	移入移出改变边框	
		//移入 
		$('.m-b-right ul li ').mouseenter(function(){
//				$(".border-animate01", ".border-animate02").appendTo(this)
				$(this).find(".border-animate01") .animate({width:258,height:178},1000);
			})
		$('.m-b-right ul li ').mouseenter(function(){
				$(this).find(".border-animate02") .animate({width:258,height:178},1000);
			})
		
		
		//移出
		$('.m-b-right ul li ').mouseleave(function(){
				$(this).find(".border-animate01") .animate({width:0,height:0},1000);
				
			})
		$('.m-b-right ul li ').mouseleave(function(){
				$(this).find(".border-animate02") .animate({width:0,height:0},1000);
			})
		
		
		
		
		
		
		})
	

	














