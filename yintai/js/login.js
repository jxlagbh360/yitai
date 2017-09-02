$(function(){
	$(".m-form").on("click","#btn01",function(e){
		e.preventDefault();
		var username = $('#user').val();
		var password = $('#pwd').val();
//		var check = $('.check').is(':checked');
		$.ajax({
			type: 'post',
			url: 'http://localhost/study/yintai/php/login.php',
			data: {username:username,password:password},
			async: true,
			dataType: 'json',
			success:function(data){
				if(data.status == 1){
						$.cookie("user",$('#user').val(),{expires:30,path:'/'});
						$.cookie("pwd",$('#pwd').val(),{expires:30,path:'/'});
//						alert(1)
					}
					location.href = "index.html";
			},
			error:function(data){
				console.log(data.msg);
			}
		})
	});
})