$(".tab-scroll .prev").on('click',function () {
    $(".tab-scroll ul").animate({left:'+=140'},300);
})


$(function(){
//console.log('123')
  $('.nextbtn2').on('click', function() {
//  console.log('123')
    $('.swiper-wrapper').animate({left: '-1200'},300)
  })

  $('.prevbtn2').on('click', function() {
//  console.log('123')
    $('.swiper-wrapper').animate({left: '0'},300)
  })
  
  //改变登录状态
  var parmas=location.search.substring(1);
  console.log(parmas);
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
  if(myname.length>0){
  	console.log(111);
		$('.uname').html("");
		$('.uname').append($('<span></span>'));
		$('.uname span').html(myname+"欢迎你");
  }
})


