function onload(){	
	
	/* Галерея
	******************/
	$(".gallery__wrap-small > a").on("click", function(e){
		e.preventDefault();
		$(".gallery__large").attr("src", $(this).prop("href"));
		
		$(".gallery__wrap-small").removeClass("gallery__wrap-small--active");
		$(this).parent().addClass("gallery__wrap-small--active");
		
	});
	$(".gallery__wrap-small > a").eq(0).trigger("click");
	
	$(".slick-gallery").slick({
		//autoplay: true,
		arrows: false,
		dots: true
	});
	
	
	$(".general__see-full").mPageScroll2id();
	
	
	$("#userRating").picker({
		containerClass: "sort-by__list",
		texts: { trigger : "User raiting", noResult : "No results", search : "Search" } 
	});
	$("#reviewRating").picker({
		containerClass: "sort-by__list comment__sort-by-list",
		texts: { trigger : "REVIEW RAITING", noResult : "No results", search : "Search" } 
	});
	$("#dateRating").picker({
		containerClass: "sort-by__list comment__sort-by-list",
		texts: { trigger : "DATE", noResult : "No results", search : "Search" } 
	});
	
	$("#seclect-color").picker({
		containerClass: "shops__select",
		texts: { trigger : "Select-color", noResult : "No results", search : "Search" } 
	});
	
	$("#seclect-capacities").picker({
		containerClass: "shops__select",
		texts: { trigger : "Select-capacities", noResult : "No results", search : "Search" } 
	});
	
	//alert($(window).width());
	
	$(".header__humburger").on("click", function(){
		$(this).toggleClass("header__humburger--active");
		$("body").toggleClass("hidden");
		$(".header__menu").fadeToggle(200);
	});
	
	
	$(".header__humburger-close").on("click", function(){
		$(".header__wrap-search-media").fadeOut(400);
	});


	$(".header__filter-icon").on("click", function(){
		$(".header__filter").toggleClass("header__filter--active");
		$(".aside").slideToggle(200);

		if($(".header__filter").hasClass("header__filter--active")){
			$(".header__filter-text").text("Active filters");
		}
		else{
			$(".header__filter-text").text("Filters");
		}

	});
	
	
	/* Меню аккордион
	******************/
	
	$(".aside__accordion-title").on("click", function(){

		$(".aside__accordion-menu").not($(this).next(".aside__accordion-menu")).slideUp(200);
		$(".aside__accordion-title").not($(this)).removeClass("aside__accordion-title--is--active");
		
		$(this).toggleClass("aside__accordion-title--is--active");
		$(this).next(".aside__accordion-menu").slideToggle(200);
	});
	
	$(".aside__range-price .aside__accordion-title").off("click");
	
	
	$(".aside__range-input").ionRangeSlider({
		type: "double",
		min: 0,
		max: 5000,
		step: 100,
		from: 1000,
		to: 3800,
		prettify_separator: ""
	});

	
}

function menu(){
	
	if($(window).width() < 991.98){
		
		$(".aside").css("display", "none");
		
		var humburgerOffseLeft = $(".header__humburger-offset").offset().left,
			humburgerOffseTop = $(".header__top").outerHeight(),
			r = $(".header__humburger").height() / 2;

		$(".header__humburger").css({"top": humburgerOffseTop / 2 - r + "px", "left": humburgerOffseLeft + "px", "display": "block"});
		$(".header__humburger-close").css({"top": humburgerOffseTop / 2 - r + "px"});
		
		$(".header__btn-search").on("click", function(){
			$(".header__wrap-search-media").fadeIn(200);
		});
		
	}
	else{
		$(".header__btn-search").off("click");
		
		$(".header__humburger").css("display", "none");
		$(".aside").css("display", "block");
	}
	
}

$(window).on("load", function(){
	onload();
	menu();
});

$(window).on("resize", function(){
	menu();
});