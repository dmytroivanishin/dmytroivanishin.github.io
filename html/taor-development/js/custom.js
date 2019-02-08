$(document).ready(function(){
	
	
	
	
	//$(".header__menu").css("left", "-100%");
	
	$(".nav__link").mPageScroll2id({
		layout: "auto"
	});
	$(".header__down").mPageScroll2id({
		offset: -20
	});
	
	$(".nav__link").on("click", function(){
		$(".header__popup").removeClass("nav__menu--show");
		$(".humburger").removeClass("humburger--active");
		$("body").removeClass("scroll");
	});
	
	$(".humburger").on("click", function(){
		$(".header__popup").toggleClass("nav__menu--show");
		$(".humburger").toggleClass("humburger--active");
		$("body").toggleClass("scroll");
	});
	
	function hideItem(){
		$(".portfolio__items .portfolio__block").each(function(i, x){
			if(i <= 2){
				return;
			}
			$(this).css("display", "none");		
		});
	}
	
	$(".portfolio__more").on("click", function(){
		$(".portfolio__items .portfolio__block").fadeIn(400);
		$(".portfolio__more").css("display", "none");
	});
	
	$(".portfolio__nav-link").on("click", function(e){
		e.preventDefault();
		$(".portfolio__items .portfolio__block").css("display", "block");
		$(".portfolio__more").css("display", "none");
	});
	
	
	
	var containerEl = document.querySelector(".portfolio");
	var mixer = mixitup(containerEl, {
		animation: {
			effects: "fade scale stagger(50ms)" // Set a 'stagger' effect for the loading animation
		},
		load: {
			filter: "all" // Ensure all targets start from hidden (i.e. display: none;)
		}
	});
	
	hideItem();
	
//	$(".gallery__item").on("click", function(e){
//		var src = $(this).children("img").attr("src");
//		$(".gallery__single").children("img").attr("src", src);
//	});
	
	$(".gallery__single").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: ".gallery__line"
	});
	$(".gallery__line").slick({
		//autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: ".gallery__single",
		arrows: true,
		prevArrow: "<button  type='button' class='gallery__prev'></button>",
		nextArrow: "<button  type='button' class='gallery__next'></button>",
		dots: false,
		focusOnSelect: true,
		responsive: [{
			breakpoint: 767.98,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			}
		},{
			breakpoint: 575.98,
			settings: {
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			}
		}]
	});
	
	
	
});
function resize(){
		var $hieghtOffset = $(".header__top").height() + $(".header__brand").height(),
		$heightMenu = $(window).height() - $hieghtOffset;

		$(".header__popup").height($heightMenu);
		
		var $width = $(window).width();
		
		if($width >= 992){
			$(".header__popup").removeClass("nav__menu--show");
			$(".humburger").removeClass("humburger--active");
			$("body").removeClass("scroll");
		}
		
		var widthGallery = $(".portfolio__block").width();
		$(".portfolio__block").height(widthGallery);
		
	}
$(window).on("resize", resize);
	$(window).on("load", resize);