
//获取某元素的样式属性值
function getStyleAttr(obj, attr){
	if (window.getComputedStyle) {
		return window.getComputedStyle(obj, null)[attr];
	}
	return obj.currentStyle[attr];
}

//封装运动函数
//支持同时改变多个属性
//animate(box, {left:300, top:300, width:300, height:300, opacity:20})
//参数：
//第一个参数： 需要修改的节点对象
//第二个参数：需要修改的css样式属性级目标值
//第三个参数：运动完成后的回调函数
function animate(obj, json, fn){
		
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		
		//遍历json对象，遍历所有的属性及目标值
		var bStop = true; //表示是否可以停止运动
		
		for (var attr in json){
			//attr: 属性值
			//itarget : 目标值
			var itarget = json[attr]; //目标值
			
			//1, current
			var current;
			if (attr == "opacity") { //透明度opacity
				current = Math.round( getStyleAttr(obj, attr) * 100);
			}
			else { //left,top, width,height
				current = parseFloat( getStyleAttr(obj, attr) );
				current = Math.round(current);
			}
			
			//2, speed
			var speed = (itarget-current)/8;
			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
	 		
			//3, 临界值
			if (current != itarget) { 
				bStop = false;
			}
			
			//4, 运动
			if (attr == "opacity") { //透明度opacity
				obj.style[attr] = (current+speed) / 100;
				obj.style.filter = "alpha(opacity=" + (current+speed) + ")";
			}
			else { //left,top, width,height
				obj.style[attr] = current + speed + "px";
			}
			
		}
		
		if (bStop) {
			clearInterval(obj.timer); //停止运动
				
			//运动结束时回调
			if (fn) fn();
		}
		
	}, 30);
	
}








				
