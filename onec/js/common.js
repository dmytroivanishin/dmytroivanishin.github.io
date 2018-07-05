$(document).ready(function(){
	
	$(".burger").on("click", function(){
			
		if($(".menu-popup").is(":hidden")){
			$(".menu-popup").fadeIn(200);
			$(this).addClass("close");
			$("body").css("overflow", "hidden");
		}
		else{
			$(".menu-popup").fadeOut(400);
			$(this).removeClass("close");
			$("body").css("overflow", "auto");
		}
	});
	$(".call").on("click", function(){
		if($(".order-popup").is(":hidden")){
			$(".order-popup").fadeIn(200);
			$(window).scrollTop(0);
			$("body").css("overflow", "hidden");
			
			$(".order-popup").css("overflow-y", "scroll");
		}
		else{
			$(".order-popup").fadeOut(400);
			$("body").css("overflow", "auto");
		}
	});
	$(".close").on("click", function(){
		$(".order-popup").fadeOut(400);
		$("body").css("overflow", "auto");
	});
	
	$(".company").owlCarousel({
		items: 4,
		margin: 20,
		center: true,
		nav: true,
		navText: ["<img src='./img/arrow_l.png'>", "<img src='./img/arrow_r.png'>"],
		dots: false,
		loop: true,
		autoplay: false,
		responsive: {
			320: {
				items: 2,
				center: false,
				nav: false,
			},
			480: {
				items: 2,
				center: false,
				nav: false,
			},
			768: {
				nav: false,
			},
			992: {
				nav: true
			}
		}
	});
	
});