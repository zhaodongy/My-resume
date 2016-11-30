$(document).ready(function(){
	$('#topcontrol').click(function(event) {
		$('html,body').animate({scrollTop:0}, 1000);		
	});
	var navPos = $('.nav-wrap').offset().top;	
	var navHeight = $('.nav-wrap').height();
	$(window).scroll(function(event) {
		var sTop = $(window).scrollTop();
		if (sTop >= 100) {
			$('#topcontrol').fadeIn('slow');
		} else {
			$('#topcontrol').fadeOut('slow');
		}
		if ( sTop >= navPos ) {
			if (!$('.nav-wrap').hasClass('fixed')) {					
				$('.nav-wrap').addClass('fixed');
				$('.banner').css('margin-bottom',navHeight);
			}
		} else {
			if ($('.nav-wrap').hasClass('fixed')) {					
				$('.nav-wrap').removeClass('fixed');
				$('.banner').css('margin-bottom','0px');
			}
		}
		var intro = {
			offsetTop:$('#post-intro').offset().top,
			height:$('#post-intro').outerHeight()
		}
		var usage = {
			offsetTop:$('#post-usage').offset().top,
			height:$('#post-usage').outerHeight()
		}
		var choiceness = {
			offsetTop:$('#choiceness').offset().top,
			height:$('#choiceness').outerHeight()
		}		
		if (sTop + navHeight >= intro.offsetTop && sTop + navHeight <= intro.offsetTop + intro.height) {			
			if (!$('.intro').hasClass('hover'))
				$('.intro').addClass('hover');
		} else {
			$('.intro').removeClass('hover');
		}
		if (sTop + navHeight >= usage.offsetTop && sTop + navHeight <= usage.offsetTop + usage.height) {			
			if (!$('.usage').hasClass('hover'))
				$('.usage').addClass('hover');
		} else {
			$('.usage').removeClass('hover');
		}
		if (sTop + navHeight >= choiceness.offsetTop && sTop + navHeight <= choiceness.offsetTop + choiceness.height) {			
			if (!$('.choice').hasClass('hover'))
				$('.choice').addClass('hover');
		} else {
			$('.choice').removeClass('hover');
		}		
	});
	$('.nav-wrap a').click(function(event) {		
		var offsetTop = $(this.hash).offset().top - navHeight + 7; 		
		$('html,body').animate({scrollTop:offsetTop}, 700);
		return false;
	});
});