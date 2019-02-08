$(document).ready(function(){
	
	var children, attr;
	
	$(".header-menu nav > ul > li").each(function(i, t){
		children = t.children.length
		if($(this).hasClass("menu-item-has-children")){
			$(this).children("a").on("click", function(e){
				e.preventDefault();
			})

		}
		
	});

	if($(window).width() <= 992){
		$(".header-menu nav > ul > li").on("click", function(e){
			var submenu = $(this).children("ul");

			if(submenu.is(":hidden")){
				submenu.slideDown(300);
			}
			else{
				submenu.slideUp(300);
			}
			$(".header-menu nav > ul > li").children("ul").not(submenu).slideUp(300);
		});
	}
	
	$(".menu-btn").on("click", function(){
		$(".menu-show").addClass("show-right");
		$(".dark").fadeIn(300);
		$("html").css("overflow", "hidden");
	});
	$(".close-menu").on("click", function(){
		$(".menu-show").removeClass("show-right");
		$(".dark").fadeOut(200);
		$("html").css("overflow", "auto");
	});
	
	$(".header-background .block-item").each(function(){
		attr = $(this).attr("data-background");
		$(this).css("backgroundImage", "url(" + attr + ")");
	});
		
	
	
	
	$(".header-background").owlCarousel({
		items: 1,
		dots: true,
		loop: true,
		autoplay: true
	});
	
	$(".products").owlCarousel({
		items: 5,
		loop: true,
		dots: true,
		autoplay: true,
		responsive: {
			768: {
				items: 5
			},
			480: {
				items: 3
			},
			240: {
				items: 2
			}
		}
	});
	
	$(".partners").owlCarousel({
		items: 6,
		margin: 26,
		loop: true,
		dots: true,
		autoplay: true,
		responsive: {
			768: {
				items: 5
			},
			320: {
				items: 3	
			},
			240: {
				items: 2
			}
		}
	});
	
});