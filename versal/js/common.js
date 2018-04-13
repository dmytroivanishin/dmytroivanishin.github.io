$(document).ready(function(){
	
	var children;
	
	$(".header-menu nav > ul > li").each(function(i, t){
		children = t.children.length
		if(children > 1){
			$(this).addClass("subMenuItem");
			//$(this).children("ul").children("li").removeClass("subMenuItem");
			$(this).children("a").on("click", function(e){
				e.preventDefault();
			})
			//console.log(i, t );
		}
		
	});
	//$(".header-menu nav > ul > li").children("ul").css({"zIndex": 100});
	if($(window).width() <= 992){
		$(".header-menu nav > ul > li").on("click", function(e){
			var submenu = $(this).children("ul");
				//submenu.css("opacity", 1);

			if(submenu.is(":hidden")){
				submenu.slideDown(300);
			}
			else{
				submenu.slideUp(300);
			}
			$(".header-menu nav > ul > li").children("ul").not(submenu).slideUp(300);
		});
	}
	
	$(".header-info").owlCarousel({
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