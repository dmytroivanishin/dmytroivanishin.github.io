$(document).ready(function(){
	
	
	$(".header__humburger").on("click", function(){
		$(this).toggleClass("header__humburger--active");
		$("body").toggleClass("hidden");
		$(".header__nav").fadeToggle(200);
	});
	
	
	$(".using__gallery").slick({
		slidesToShow: 4,
  		slidesToScroll: 1,
		prevArrow: '<img src="./img/arrow_left.png" class="slick-prev">',
        nextArrow: '<img src="./img/arrow_right.png" class="slick-next">',
		responsive: [
		{
		  breakpoint: 1600,
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
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1
		  }
		}
		]
	});
	
	
	
	
	
	
});


function onload(){
	if($(window).width() > 992){
		$(".header__nav").css("display", "block");	
		
		$("body").removeClass("hidden");
		
		$(".nav__item--sub").on({
			"mouseenter": function(){
				$(".nav__submenu").stop().slideDown(200);
			},
			"mouseleave": function(){
				$(".nav__submenu").stop().slideUp(400);
			}
		});
		
	}
	else{
		
		$(".nav__item--sub > a").on("click", function(e){
			
			e.preventDefault();
			
				$(".nav__submenu").stop().slideToggle(200);
			
		});
		
		
		$(".header__humburger").removeClass("header__humburger--active");
		$(".header__nav").css("display", "none");
		
		
		$(".nav__item--sub").off("mouseenter mouseleave");
	}
}



$(window).on("load", function(){

	onload();
	
	
	
});

$(window).on("resize", function(){

	onload();
	
});


