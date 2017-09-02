

$(function(){
//			 console.log($("input").eq(1).length)
			
			
			
			
			
			var onOff1 = false;
			var onOff2 = false;
			var onOff3 = false;
			var onOff4 = false;
			
		$(".m-form input").eq(0).keyup(function(){
			if($(this).val().length == 11){
				onOff1 = true;
			}
			else{
				onOff1 = false;
			}
//					console.log(onOff1);
			
		})	
				
		$(".m-form input").eq(1).keyup(function(){
			if($(this).val().length != 0){
				onOff2 = true;
			}
			else{
				onOff2 = false;
			}
//					console.log(onOff2);
			
		})		
		$(".m-form input").eq(2).keyup(function(){
			if($(this).val().length != 0){
				onOff3 = true;
			}
			else{
				onOff3 = false;
			}
//					console.log(onOff3);
			
		})		
		$(".m-form input").eq(3).keyup(function(){
			if($(this).val().length != 0){
				onOff4 = true;
			}
			else{
				onOff4 = false;
			}
//					console.log(onOff4);
		})	
		//键盘松开调用fn
		document.onkeyup = function(){
			fn();
		}
				
		function fn(){
//					console.log("onOff1:"+onOff1);
			$("#btn01").removeClass("active");
			
			if(onOff1 == true && onOff2 == true && onOff3 == true && onOff4 == true){
//						console.log("变色");
				$("#btn01").addClass("active");
				
				//点击事件检查输入是否有误
				var flag5 = false;
				var flag6 = false;
				var flag7 = false;
				var flag8= false;
				
				$("#btn01").click(function(){
					//验证手机号
//							console.log($(".m-form input").eq(0).val())
					var reg1 = /^1((3[0-9])|(4(5|7))|(5([0-3]|[5-9]))|(7(7|8))|(8[0-9]))\d{8}$/;
					if( reg1.test( $(".m-form input").eq(0).val() ) ){
						flag5=true;
					}
					else{
						flag5=false;
						$("#zhezhao").show();
						$("#inform").show();
						$("#inform h4").show().html("用户"+$(".m-form input").eq(0).val()+"状态异常,请到门店柜台处理");
					};
//							console.log(flag5);
					//验证 验证码
//							var reg2=/^\d{4}$/;
					if( /^\d{4}$/.test( $(".m-form input").eq(1).val() ) ){
						flag6=true;
					}
					else{
						flag6=false;
						
					};
//							console.log(flag6);
					
					//验证密码
					if( /^\w{6,12}$/.test( $(".m-form input").eq(2).val() ) ){
						flag7=true;
					}
					else{
						flag7=false;
						$("#zhezhao").show();
						$("#inform").show();
						$("#inform h4").show().html("请输入6到12位英文+数字的护照密码");
					};
//							console.log(flag7);
					
					//验证确认密码
					if(  $(".m-form input").eq(3).val() == $(".m-form input").eq(2).val() ){
						flag8=true;
					}
					else{
						flag8=false;
						$("#zhezhao").show();
						$("#inform").show();
						$("#inform h4").show().html("两次输入的密码不一致");
					};
//							console.log(flag8);
					
					//假如输入正确就提交，进行提交验证
				var username = $(".m-form input").eq(0).val();
				var password = $(".m-form input").eq(2).val();
//				var a = true;
				if(flag5 &&　flag6 &&　flag7 &&　flag8){
					$.ajax({
						type: 'post',
						url: 'http://localhost/study/yintai/php/register.php',
						data:{username:username,password:password},
						async: true,
						dataType: 'json',
						success:function(data){
							console.log(data)
							if(data.status == 1){
								alert(data.msg);
								location.href = "login.html";
							}else{
								alert(data.msg);
							}
						},
						error:function(data){
							console.log(data);
						}
					})
				}else{
					alert("请正确填写信息！");
				}
					
					
					
				})
				
				
				//点击确认关闭弹窗和遮罩层
				$("#inform h5").click(function(){
					$("#inform").hide();
					$("#zhezhao").hide();
				})
				
		}
	}
				
		})