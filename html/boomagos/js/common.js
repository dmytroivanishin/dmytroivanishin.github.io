function equalGallery(){
	var widthGallery = $(".gallery-photo__item").width();
	
	$(".gallery-photo__item").height(widthGallery);
	
	
}
function equalItem(){
	
	var heightEvents = $(".events__item").height();
	
	$(".events__calendar").height(heightEvents);
	
}

function weDo(){
	
	if($(window).width() <= 576){
		$(".we-do__info-title").on("click", function(){
			$(".we-do__info-text").not($(this).next(".we-do__info-text")).slideUp(200);
			$(".we-do__info-title").not($(this)).removeClass("we-do__info-title--active");

			$(this).next(".we-do__info-text").slideToggle(200);
			$(this).toggleClass("we-do__info-title--active")
		});
	}
	else{
		$(".we-do__info-title").off("click");
	}
	
}

$(document).ready(function(){
	
	$(".header__humburger").on("click", function(){
		$(this).toggleClass("header__humburger--active");
		$("body").toggleClass("hidden");
		$(".header__nav").fadeToggle(200);
	});
	
	$(".gallery-photo").slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: '<div class="gallery-photo__arrow gallery-photo__arrow-prev"></div>',
        nextArrow: '<div class="gallery-photo__arrow gallery-photo__arrow-next"></div>',
		responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			slidesToShow: 4
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 2
		  }
		}
	  ]
	});
	
	
	
	
	$(".faq__questions-header").on("click", function(){
		
		$(".faq__questions-content").not($(this).next(".faq__questions-content")).slideUp(400);
		$(".faq__questions-header").not($(this)).removeClass("faq__questions-header--active");
		
		$(this).next(".faq__questions-content").slideToggle(200);
		$(this).toggleClass("faq__questions-header--active");
	});
	
	$(".faq__questions-header").eq(3).trigger("click");
	
	$(".contact-us__message").on("focus", function(){
		
		$(this).height(200);
		
	});
	
	equalGallery();
	weDo();
	
	var carousel = $("#carousel").waterwheelCarousel({
		startingItem: 1,
         flankingItems: 1,
		 separation: 140,
		 sizeMultiplier:0.8,
		 separationMultiplier:0.9,
		 speed:250
	 });
	$('#prev').on('click', function (){
		carousel.prev();
		return false;
	});
	$('#next').on('click', function (){
		carousel.next();
		return false;
	});
	var commentItem = $(".comment__item").length;
	for(var i = 0; i < commentItem; i++){
		$(".comment__dots").append("<span></span>");
	}
	$(".comment__dots > span").click(function(){
	  var indexDots = $(this).index();
	  carousel.dots(indexDots);
	});
});



$(window).on("load", function(){
	
	
	
	var heightHeaderFixed = $(".header__fixed").height();
	$(".header__fixed-wrap").height(heightHeaderFixed);
	
	$(document).on("scroll", function(){
		var scrollTop = $("html, body").scrollTop();
		
		if(scrollTop > 0){
			$(".header__fixed").css({"position": "fixed", "top": 0, "left": 0});
		}
		
		if(scrollTop > 200){
			$(".header__fixed").addClass("header__fixed--scroll");
			$(".header__logo").fadeOut(100, function(){
				$(".header__logo-fixed").fadeIn(100);
			});
		}
		else{
			$(".header__fixed").removeClass("header__fixed--scroll");
			$(".header__logo-fixed").fadeOut(100, function(){
				$(".header__logo").fadeIn(100);
			});
		}
	});
		
	
	
	var textHeight = $(".events__content-wrap-text").height();
	var blockHeight = $(".events__hide").height();

	
	$(".events__content-wrap-text").css("height", "30px");
	$(".events__hide").css("height", "0");
	
	$(".events__item").on("click", function(){
		
		$(".events__item").removeClass("events__item--active");
		$(".events__content-wrap-text").css("height", "30px");
		$(".events__hide").css("height", "0");
		
		$(this).addClass("events__item--active");
		
		
		$(this).find(".events__content-wrap-text").css("height", textHeight + "px");
		$(this).find(".events__hide").css("height",  blockHeight + "px");
		

	});
	
	equalItem();
	
	$(".events__carusel").slick({
		speed: 500,
		fade: true,
		cssEase: 'linear',
		appendArrows: $(".events__arrow-slick"),
		prevArrow: '<div class="events__arrow events__arrow-prev"></div>',
        nextArrow: '<div class="events__arrow events__arrow-next"></div>'
	});
	
});

$(window).on("resize", function(){
	equalGallery();
});
	