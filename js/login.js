$(function(){
	$(".login_inner").on("click",".loginBtn",function(e){
		e.preventDefault();
		var username = $('#txtUserName').val();
		var password = $('#txtPassword').val();
		var check = $('#autologin').is(':checked');
		$.ajax({
			type: 'post',
			url: 'http://localhost/buy07/php/login.php',
			data: {username:username,password:password},
			async: true,
			dataType: 'json',
			success:function(data){
				if(data.status == 1){
					if(check){
						$.cookie("user",$('#txtUserName').val(),{expires:30,path:'/'});
						$.cookie("pwd",$('#txtPassword').val(),{expires:30,path:'/'});
					}
					location.href = "首页.html?username="+$('#txtUserName').val();
				}else{
					console.log(data.msg);
				}
			},
			error:function(data){
				console.log(data);
			}
		})
	});
})