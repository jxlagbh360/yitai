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

//截取问号
$(function(){
	var params = location.search.substring(1);
	//把整个lu'you路由传到函数去除我要的ID值
	var Gid = getParam(params,"id");
	
	//获取和当前id相同的商品数据
	function getParam(params,key){
		var arr = params.split("&");
		for(var i=0;i<arr.length;i++){
			var str = arr[i];
			var arr2 = str.split("=");
			if(arr2[0] == key){
				return arr2[1];
			}
		}
		return "";
	}
	
	//获取json中与点击进入详情的id相同的数据
	
	 $.ajax({
	    type: 'get',
	    url: './json/goods.json',
	    async: true,
	    data:{},
	    dataType:'json',
	    success:function (data) {
	        for (var i = 0; i < data.length; i++) {
	        	if(data[i].id == Gid){
	        		var obj = data[i];
	        		goodsData(obj);
					magnifier();
					
	        		break;
	        	}
	        }
	    },
	    error:function () {
	        alert("获取数据失败！");
	    }
	   
	    
	});
	
	//商品数据渲染   只传过来一个商品信息所以不需要创建节点渲染
	function goodsData(obj){
		
		//创建放大镜所需要的节点
		var arr1 = [];
		for(var j=0;j<obj.img2.length;j++){
		 	arr1.push(obj.img2[j]);
		$("<li class='item' ><img src="+arr1[j]+" alt='#'></li>").appendTo('.wrapper');
		
   		}
		$("<img src=" + arr1[0] + " class='small-img' alt='#'>").appendTo(".small-box");
		$("<img class='big-img' src= >").appendTo(".big-box");
		
		//创建商品详情节点
		$(".goods-info").find("h2").eq(0).html(obj.name);
		$(".m-top").find("a").eq(5).html(obj.name);
		$("<strong class='yt-num'>" +obj.unit+obj.price1+"</strong>").appendTo(".YTprice");
		$("<span class='prev-price'>" +obj.unit+obj.price2+"</span>").appendTo(".marketPriceNum");
		var colorChose = $("<a href='javascript:;' title="+obj.color+" class='color01'></a>").appendTo(".colors .item")
		$("<img src="+arr1[0]+"/>").appendTo(colorChose);
		$("<span >"+obj.color+"</span>").appendTo(colorChose);
		
		colorChecked = $(".color01 span").html();
	}
	var i = 0;
		

	
	//点击选中，再点击取消选中  选择颜色
	var colorChecked;
	
	$(".colors").on("click",".color01",function(e){
		e.preventDefault();
		i++;
		if(i%2==1){
			$(".colors .xiabiao").show();
			$(".colors .item").css({"border":"2px solid #f40"});
			
			
		}
		
		if(i%2==0){
			$(".colors .xiabiao").hide();
			$(".colors .item").css({"border":"none"});
		}
		colorChecked = $(this).text();
	})
		
		
		//点击选中， 选择尺寸
		var sizeChecked = "L";
		
		$(".sizes").on("click",".item",function(e){
			e.preventDefault();
			$(this).find(".xiabiao").show().parent().siblings().find(".xiabiao").hide();
			$(this).addClass(".active");
			 sizeChecked = $(this).find("span").text();
			 
		})
			var goodsNum=1;
		 $(".buynum").blur(function(){
		 	if($(".buynum").val() <= 1||isNaN($(".buynum").val())){
		 		$(".buynum").val(1);
	    		goodsNum=$(".buynum").val();
	    	}
	    	goodsNum=$(".buynum").val();
	   })
	    $(".p-num-add").click(function(){
	    	goodsNum=$(".buynum").val();
	    	goodsNum++;
	    	$(".buynum").val(goodsNum);
	    })
	    
	      $(".p-num-red").click(function(){
	      	goodsNum=$(".buynum").val();
	    	goodsNum--;
	    	if(goodsNum <= 1){
	    		goodsNum=1;
	    	}
	    	$(".buynum").val(goodsNum);
	    	
	    })

	      
	     //点击加入购物车，购物车上数量变为添加的数量，并且保存cookie
	     
		//商品添加到cookie 实现购物车
		var arr = $.cookie("cart")?JSON.parse($.cookie("cart")):[];
		var onOff = false;
		$(".incart").click(function(e){
		    e.stopPropagation();
		    var obj = {
		    	id:Gid,
		    	color:colorChecked,
		    	img:$(".colors img").attr("src"),
		    	price:$(".yt-num").text(),
		    	discount:$(".prev-price").text(),
		    	num:goodsNum,
		    	ischecked:true,
		    	name:$(".goods-info h2").text(),
		    	size:sizeChecked
		    	};
		   //加入购物车 如果存在相同则数量添加
		    for(var i=0;i<arr.length;i++){
		        if(arr[i].id == obj.id){
		            arr[i].num+=goodsNum;
		            onOff = true;
		            break;
		        }
		    }
		    //如果与数组不相同则新添加到新数组中
		    if(!onOff){
		        arr.push(obj);
		    
		    }
		    $.cookie("cart",JSON.stringify(arr),{expires:30,path:'/'});

			console.log($.cookie("cart"));
			console.log(sizeChecked);
		});
		
		//点击立即购买，保存cookie，然后跳转到购物车页面
		$(".buynow").click(function(e){
			
			e.stopPropagation();
			var obj = {
		    	id:Gid,
		    	color:colorChecked,
		    	img:$(".colors img").attr("src"),
		    	price:$(".yt-num").text(),
		    	discount:$(".prev-price").text(),
		    	num:goodsNum,
		    	ischecked:true,
		    	name:$(".goods-info h2").text(),
		    	size:sizeChecked
		    	};
		   //加入购物车 如果存在相同则数量添加
		    for(var i=0;i<arr.length;i++){
		        if(arr[i].id == obj.id){
		            arr[i].num+=goodsNum;
		            onOff = true;
		            break;
		        }
		    }
		    //如果与数组不相同则新添加到新数组中
		    if(!onOff){
		        arr.push(obj);
		    
		    }
		    $.cookie("cart",JSON.stringify(arr),{expires:30,path:'/'});
		
		    //跳转到购物车页面
		    location.href="mycart.html";
		    
		    
		})
		
		function goodsNum(){
		    var goodNum = 0;
		    var arr1 = JSON.parse($.cookie("cart"));
		    for(var i=0;i<arr1.length;i++){
		        goodNum+=arr1[i].num;
		    }
		    console.log(goodNum)
		    $('.goodsNum').html(goodNum);
		    $.cookie("cart",JSON.stringify(arr1),{expires:30,path:'/'});
		    console.log($.cookie("cart"));
		}
	     
		
	
	//放大镜
	function magnifier(){
		
		
	//将最下面的图的src传到上面的图中
	$(".wrapper").on("mouseenter",".item",function(){
		var aa = $(this).find("img").eq(0).attr("src");
		$(".small-img").attr("src",aa);
	})
	
	$(".small-box").on("mouseenter",".small-img",function(){
		var aa = $(this).attr("src");
		$('.big-box').find('img').attr('src',aa)
	})
	
    //小图width/大图width == 小区域width/大区域width
    $(".hover").width( $(".small-box").width() * $(".big-box").width() / $(".big-img").width() );
    $(".hover").height( $(".small-box").height() * $(".big-box").height() / $(".big-img").height() );
   
    //放大系数
    var scale = $(".big-img").width() / $(".small-box").width();
   
    //在小图中移动
    $(".small-box").mousemove(function(e){
        $(".hover").show(); //显示小区域
        $(".big-box").show(); //显示大区域
        var x = e.pageX - $(".small-box").offset().left - $(".hover").width()/2;
        var y = e.pageY - $(".small-box").offset().top - $(".hover").height()/2;
        //控制不超出左右边界
        if (x < 0){
            x = 0;
        }
        else if (x > $(".small-box").width()-$(".hover").width()){
            x = $(".small-box").width()-$(".hover").width();
        }
        //控制不超出上下边界
        if (y < 0){
            y = 0
        }
        else if (y > $(".small-box").height()-$(".hover").height()) {
            y = $(".small-box").height()-$(".hover").height();
        }
        //小区域移动
        $(".hover").css({left:x, top:y});
        //大图移动
        $(".big-img").css({left: -scale*x,top: -scale*y});
    })
    //移除小图
    $(".small-box").mouseleave(function(){
        $(".hover").hide(); //隐藏小区域
        $(".big-box").hide(); //隐藏大区域
    })
}

	

	
	
	
})



















