$(document).ready(function(){
   
	/* Resize images on the screen */
   function heightDetect() {
		$(".mainHead").css("height", $(window).height());
		$(".sectionHead").css("height", $(window).height());
	}
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	
	/* Processing events click on the menu button */
	$(".toggleMenu").click(function() {
	  $(".sandwich").toggleClass("active");
	});
	
	/* Pop-up menu */
	$(".menuContainer li a").click(function(){
		$(".menuContainer").fadeOut(600);
		$(".sandwich").toggleClass("active");
	}).append("<span></span>");
	
	$(".toggleMenu").click(function(){
		if($(".menuContainer").is(":visible")){
			$(".menuContainer").fadeOut(600);
			$(".menuContainer li a").removeClass("animated fadeInUp");
			$(".headText").removeClass("hOpacity");
		}
		else{
			$(".menuContainer").fadeIn(600);
			$(".menuContainer li a").addClass("animated fadeInUp");
			$(".headText").addClass("hOpacity");
		}
		
	});
	/* Animate section */
	
	//$(".headText h1").delay(2000).animate({marginBottom:"30px",opacity:"1"},900);
	
	
	
	$(".sectionHead h1").animated("fadeInUp", "fadeOutDown");
	$(".headSection h2").animated("fadeInUp", "fadeOutDown");
	$(".textSection").animated("fadeIn", "fadeOut");
	$(".sAboutBlock > img").animated("fadeIn", "fadeOut");
	$(".sAboutBlock > p").animated("fadeIn", "fadeOut");
	
	/* Animate section Gallery */
	$(".sGallery").waypoint(function(countPhoto){
		if(countPhoto === "down"){
			$(".wrapGalleryBlock").each(function(i){
				$(this).delay(i*200).animate({"opacity":1},500);
				//$(this).addClass("animated fadeInUp");
				
			});
		}
		else{
			$(".wrapGalleryBlock").css("opacity",0);
		}
	},{
		offset: "60%"
	}).waypoint(function(countPhoto) {
		if (countPhoto === "down") {
			$(".wrapGalleryBlock").css("opacity",0);
		}
		else{
			$(".wrapGalleryBlock").each(function(i){
				$(this).delay(i*200).animate({"opacity":1},500);
			//$(this).addClass("animated fadeInUp");
			});
		}
		}, {
			offset: -$(window).height()
		});
	
	/* Best photo plugin Masorny */
	$(".masorny-containerPhotoB").imagesLoaded(function(){
		$(".masorny-containerPhotoB").masonry({
			columnWidth: ".itemPhoto",
			itemSelector: ".itemPhoto"
		});
	});
	/* Best photo popoup */
	$(".popupViewBestPhoto").magnificPopup({type:"inline", midClick: true});
	
	$(".itemPhoto").each(function(i){
		$(this).find("a").attr("href","#linkPhotoBest"+i);
		$(this).find(".photoBestDesc").attr("id","linkPhotoBest"+i);
	});
	
	/* Animate Advice block */

	$(".masorny-containerAdvice").masonry({
		columnWidth: ".sAdviceBlock",
		itemSelector: ".sAdviceBlock"
	});
	$(".sAdviceBlock").animated("fadeInUp", "fadeOut");

	//$("input, select, textarea").jqBootstrapValidation();
	
	/* Animate Contact block */
	$(".contactContainer").animated("fadeInLeft", "fadeOutLeft");
	$(".wrapContactsBlock").animated("fadeIn", "fadeOut");
	
	
	/* Menu scroll */
	$(".menuContainer ul a").mPageScroll2id();
	$(".headText a").mPageScroll2id();
	
});
/* Preloader */
$(window).load(function(){
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slov");
	
	$(".headText h1").animated("fadeInDown", "fadeOutUp");
	$(".headText p").animated("fadeInUp", "fadeOutDown");
});