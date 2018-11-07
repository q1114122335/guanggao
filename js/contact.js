/*
* @Author: admin
* @Date:   2018-10-18 18:28:37
* @Last Modified by:   admin
* @Last Modified time: 2018-10-18 18:35:29
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