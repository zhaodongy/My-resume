$(document).ready(function(){
	$('#navbar-example').on('activate.bs.scrollspy',function(e){
		var currentItem = $('#navbar-example li.active a').text();
		document.title = currentItem;
	});
	$('#tohash').click(function(event) {
		$('html,body').animate({scrollTop: $('#about-me').offset().top}, 1500);
	});	
	$('.btn-start').click(function(event) {
		$('html,body').animate({scrollTop: $('#about-me').offset().top}, 1500);
	});
	$('.my-skill .col-md-6').eq(0).hide();
	$('.my-skill .col-md-6').eq(1).css('position','relative').css('bottom',-447);
	$(window).scroll(function(event) {		
		var sTop = $(window).scrollTop();		
		if (sTop <= 667) {
			$('.navbar').hide();
		}else {
			$('.navbar').show();
		}
		if (sTop < 700) {
			$('.introduce-me .col-md-4').eq(0).animate({left: '0'}, 3000);
			$('.introduce-me .col-md-4').eq(1).animate({top: '0'}, 3000);
			$('.introduce-me .col-md-4').eq(2).animate({right: '0'}, 3000);
		}
		if (sTop >= 1300 && sTop <= 2200){                                      
			$('.my-skill .col-md-6').eq(0).delay(1500).slideDown('slow');
			$('.my-skill .col-md-6').eq(1).animate({bottom:'0'}, 1500);
			$('.95').delay(500).animate({width: '95%'}, 2000);
			$('.80').delay(1000).animate({width: '80%'}, 2000);
			$('.90').delay(1200).animate({width: '90%'}, 2000);
			$('.85').delay(1400).animate({width: '85%'}, 2000);
			$('.82').delay(1600).animate({width: '82%'}, 2000);
			$('.75').delay(1800).animate({width: '75%'}, 2000);
		}
	});	
	$('#experience-single-wrap').hide();
	$('.folio-expand').click(function(event) {
		$('#experience-single-wrap').show();
	});	
	$('#experience-single-wrap').click(function(event) {
		$(this).hide();
	});	
	$('#experience-single').click(function(event) {
		$('#experience-single-wrap').show();
		return false;
	});
	$('img').click(function(event) {
		$(this).hide();
	});
	$('.navbar-nav li').eq(0).click(function(event) {
		$('html,body').animate({scrollTop: $('#about-me').offset().top}, 1500);
	});
	$('.navbar-nav li').eq(1).click(function(event) {
		$('html,body').animate({scrollTop: $('#skills').offset().top}, 1500);
	});
	$('.navbar-nav li').eq(2).click(function(event) {
		$('html,body').animate({scrollTop: $('#experience').offset().top}, 1500);
	});
	$('.navbar-nav li').eq(3).click(function(event) {
		$('html,body').animate({scrollTop: $('#project').offset().top}, 1500);
	});
	$('.navbar-nav li').eq(4).click(function(event) {
		$('html,body').animate({scrollTop: $('#contact').offset().top}, 1500);
	});
});