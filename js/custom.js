$(function(){

	new WOW().init();
	
	$(window).scroll(function () {
		
		if($(this).scrollTop() > 200) {
			
			
			$(".header").addClass("HeaderFixed");
						
		} else {
			
			$(".header").removeClass("HeaderFixed");
		}
		
	});

	

	$(".open-menu").click(function () {
		
		$("body").addClass("overflowH");
		$(".menuMobile").fadeIn();
		$(".transformPage,.menuMobile .menuContent").addClass("active");
		
	});
	

	$(".closeX,.BgClose,.menuMobile .menuContent .menuRes li a").click(function () {
		
		$("body").removeClass("overflowH");
		$(".menuMobile").fadeOut();
		$(".transformPage,.menuMobile .menuContent").removeClass("active");
		
	});
	
	$(".header2 .subDetails .openSubMenu").click(function () {
		
		$(this).siblings().slideToggle();
		
	});
	
	$('body,html').on('click', function(e) {
		var container = $(".header2 .subDetails .openSubMenu, .header2 .subDetails .listSubMenu , .header2 .subDetails .listSubMenu *"),
		Sub = $(".header2 .subDetails .listSubMenu");
		

	    if( !$(e.target).is(container) ){
	        Sub.slideUp();
	    }
	

	});
	
	
	/****************************************************************************/
		
	var lFollowX = 0,
	    lFollowY = 0,
	    x = 0,
	    y = 0,
	    friction = 1 / 30;
	
	function moveBackground() {
	  x += (lFollowX - x) * friction;
	  y += (lFollowY - y) * friction;
	  
	  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
	
	  $('.bgMove').css({
	    '-webit-transform': translate,
	    '-moz-transform': translate,
	    'transform': translate
	  });
	
	  window.requestAnimationFrame(moveBackground);
	}
	
	$(window).on('mousemove click', function(e) {
	
	  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
	  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
	  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
	  lFollowY = (10 * lMouseY) / 100;
	
	});
	
	moveBackground();
	/****************************************************************************/
	

	$('.the-slider-inner').bxSlider({
		useCSS: false,
		auto: true,
		controls: true,
		pager: true,
		autoHover: true,
		responsive: true,
		onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
			$('.active-slide').removeClass('active-slide');
			$('.the-slider-inner > li').eq(currentSlideHtmlObject + 1).addClass('active-slide');
			$(".fade-In").addClass("animated fadeIn");
			$(".fade-In-Down").addClass("animated fadeInDown");
			$(".fade-In-DownBig").addClass("animated fadeInDownBig");
			$(".fade-In-Left").addClass("animated fadeInLeft");
			$(".fade-In-LeftBig").addClass("animated fadeInLeftBig");
			$(".fade-In-Right").addClass("animated fadeInRight");
			$(".fade-In-RightBig").addClass("animated fadeInRightBig");
			$(".fade-In-Up").addClass("animated fadeInUp");
			$(".fade-In-UpBig").addClass("animated fadeInUpBig");
		},
		onSlideBefore: function () {
			$(".fade-In").removeClass("animated fadeIn");
			$(".fade-In-Down").removeClass("animated fadeInDown");
			$(".fade-In-DownBig").removeClass("animated fadeInDownBig");
			$(".fade-In-Left").removeClass("animated fadeInLeft");
			$(".fade-In-LeftBig").removeClass("animated fadeInLeftBig");
			$(".fade-In-Right").removeClass("animated fadeInRight");
			$(".fade-In-RightBig").removeClass("animated fadeInRightBig");
			$(".fade-In-Up").removeClass("animated fadeInUp");
			$(".fade-In-UpBig").removeClass("animated fadeInUpBig");
		},
		onSliderLoad: function () {
			$('.the-slider-inner > li').eq(1).addClass('active-slide');
		}
	});
	
	
	
	 /* var owlmobile = $('#owlmobile');
	 
	  owlmobile.owlCarousel({
	      
	      items : 1, //10 items above 1000px browser width
	      itemsDesktop : [1200,1], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,1], // betweem 900px and 601px
	      itemsTablet: [768,1], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      
	  });*/

	  var owlmobile = $('#owlmobile');
	 
	  owlmobile.owlCarousel({
	  	items:1,
	    stagePadding:0,
	    loop:true,
	    margin:0,
	    nav:true,
	    autoplay:true,
	    navText:["<i class='flaticon-back'></i>","<i class='flaticon-right-arrow'></i>"],
	    responsive:{
	        0:{
	            items:1,
	            stagePadding: 0,
	            margin:0
	        },
	        480:{
	            items:1,
	            stagePadding: 0,
	            margin:0
	        },
	        1000:{
	            items:1
	        }
	    }
	  });
	

	  var owlFeatures = $('#owlFeatures');
	 
	  owlFeatures.owlCarousel({
	  	items:5,
	    stagePadding:120,
	    loop:true,
	    margin:0,
	    nav:false,
	    autoplay:true,
	    responsive:{
	        0:{
	            items:1,
	            stagePadding:0
	        },
	        480:{
	            items:2,
	            stagePadding:0
	        },
	        767:{
	            items:2,
	            stagePadding:0
	        },
	        1000:{
	            items:4,
	            stagePadding:0
	        },
	        1200:{
	            items:4
	        },
	    }
	  });
	
	$.scrollIt({topOffset:-90});
	
	$(window).load(function () {
		
 
		$(".splash").fadeOut(1000,function () {
				
			$(this).remove();
			
		});
	});
	
	

	  var owlSlider = $('#owlSlider');
	 
	  owlSlider.owlCarousel({
	  	items:1,
	    stagePadding:0,
	    loop:true,
	    margin:0,
	    nav:false,
	    autoplay:true,
	    navText:["<i class='flaticon-back'></i>","<i class='flaticon-right-arrow'></i>"],
	    responsive:{
	        0:{
	            items:1,
	            stagePadding: 0,
	            margin:0
	        },
	        480:{
	            items:1,
	            stagePadding: 0,
	            margin:0
	        },
	        1000:{
	            items:1
	        }
	    }
	  });
	
	
});
