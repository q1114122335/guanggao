/*
* @Author: admin
* @Date:   2018-10-17 18:36:37
* @Last Modified by:   admin
* @Last Modified time: 2018-10-17 18:48:20
*/
$(function(){
	$('.sl1').hover(function() {
		$(this).children().children('h3').css({'margin-left':'20px','color':"#000"});
		$(this).children('.sp').stop().animate({'top':'0px'});
		$(this).children().children('span').show();
		$(this).children('img').css('opacity', '0.6');
	}, function() {
		$(this).children().children('h3').css({'margin-left':'0px','color':"#ccc"});
		$(this).children('.sp').stop().animate({'top':'-130px'});
		$(this).children('img').css('opacity', '1');
		// $(this).children().children('span').hide();
	});

	$(window).scroll(function(event) {
		if($(window).scrollTop()>=55){
			$('.nav1').addClass('lf')
		}else{
			$('.nav1').removeClass('lf')
		}
	});


})