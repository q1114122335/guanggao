/*
* @Author: admin
* @Date:   2018-10-15 19:39:05
* @Last Modified by:   admin
* @Last Modified time: 2018-10-15 19:39:42
*/
$(function(){
	$(window).scroll(function(event) {
		if($(window).scrollTop()>=55){
			$('.nav1').addClass('lf')
		}else{
			$('.nav1').removeClass('lf')
		}
	});



	
})