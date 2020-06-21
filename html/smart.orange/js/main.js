const animateRAFInterval = (function(){
	let id = null, canceled = false;
	
	const startRAFInterval = (progress, completed, interval) => {

		let startTime       = 0,
			currentTime     = 0,
			time            = 0,
			currentSecond   = 0,
			progressTime	= 0;

		canceled = false;

		const animate = () => {
			if(startTime === 0){
				startTime = new Date().getTime();
			}

			currentTime = new Date().getTime();
			time = currentTime - startTime;
			progressTime = time / interval;
			currentSecond = Math.floor(progressTime);

			progress(progressTime);

			if(currentSecond > 0){
				startTime = 0;
				completed(currentSecond);
			}
			
			if(!canceled){
				id = requestAnimationFrame(animate);
			}
		};

		if(!canceled){
			id = requestAnimationFrame(animate);
		}

	};
	
	const cancel = () => {
		if(!id){
			return false;
		}
		cancelAnimationFrame(id);
		id = null;
		canceled = true;
	}
	
	return {
		start: startRAFInterval,
		cancel: cancel
	}
	
}());


$(document).ready(function(){
	
	$(".header-slider-background").slick({
		fade: true,
		dots: false,
		arrows: false,
		slidesToShow: 1,
		
	});
	
	const $tiSlick = $(".header-slider-text").slick({
		dots: true,
		appendDots: $(".header__controls-dots"),
		arrows: true,
		prevArrow: $(".header__controls-arrow-left"),
		nextArrow: $(".header__controls-arrow-right"),
		slidesToShow: 1,
  		slidesToScroll: 1,
		asNavFor: ".header-slider-background"
	});

	
	const progressBar	= $(".header__timer-line"),
		  currentNum	= $(".header__timer-slide--current"),
		  prevNum		= $(".header__timer-slide--prev");
	
	const createString = (num) => {
		if(num < 9){
			return "0" + num;
		}
	};
	
	const getSlide = (num) => {
		return num + 1;
	};
	
	const renderProgress = (progress) => {
		progressBar.css({ "height": `${progress * 100}%`})
	};
	
	const renderNumber = (prev, current) => {
		let prevString, currentString;
		
		prevString = createString(prev, prev);
		currentString = createString(current);

		prevNum.text(prevString);
		currentNum.text(currentString);
	};
	
	const animateProgress = () => {
		
		animateRAFInterval.start((progress)=> {
			renderProgress(progress);
		}, () => {
			$tiSlick.slick("slickNext");
		}, 3000);
	
		
		$(".header-slider-text").on("beforeChange", (event, slick, currentSlide, nextSlide) => {
			
			setTimeout(() => {
				animateRAFInterval.cancel();
			
				animateRAFInterval.start((progress)=> {
					renderProgress(progress);
				}, () => {
					$tiSlick.slick("slickNext");
					
				}, 3000);
				
			}, 0);
			
			renderNumber(getSlide(currentSlide), getSlide(nextSlide));

		});
	};
	
	animateProgress();
	
	
	$(".gallery__main-slider").slick({
		fade: true,
		dots: false,
		arrows: false,
		slidesToShow: 1,
		asNavFor: ".gallery__slider",
	});
	
	$(".gallery__slider").slick({
		//autoplay: true,
		dots: false,
		arrows: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		dots: true,
		appendDots: $(".gallery__controls-dots"),
		arrows: true,
		prevArrow: $(".gallery__controls-arrow-left"),
		nextArrow: $(".gallery__controls-arrow-right"),
		asNavFor: ".gallery__main-slider",
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			},
		]
	});
//	
	
	$(".plan__desing").slick({
		//autoplay: true,
		fade: true,
		dots: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		
	});
	
	$(".plan__about-slider").slick({
		//autoplay: true,
		dots: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: ".plan__desing",
	});
	
	$(".plan__flats-tabs-slick").slick({
		//autoplay: true,
		dots: true,
		appendDots: $(".plan__controls-dots"),
		arrows: true,
		prevArrow: $(".plan__controls-arrow-left"),
		nextArrow: $(".plan__controls-arrow-right"),
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: ".plan__connect-slider",
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
		]
	});
	
	$(".documents__files").slick({
		autoplay: true,
		dots: true,
		appendDots: $(".documents__controls-dots"),
		arrows: true,
		prevArrow: $(".documents__controls-arrow-left"),
		nextArrow: $(".documents__controls-arrow-right"),
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 1240,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	  ]
	});
	
	
	$(".call").on("click", () => {
		$("body").addClass("hidden");
		$(".popup").fadeIn(150);
	});
	
	$(".popup__close").on("click", () => {
		$("body").removeClass("hidden");
		$(".popup").fadeOut(300);
	});
	

	
	$("a[href*='#']").mPageScroll2id();
	
	const sections = $(".nav__list .__mPS2id");
	const amountSection = sections.length;
	
	let indexSection = 0,
		amountClick = 0,
		hashScrollTo = "";
	
	const getIndex = () => {
		let i = $(".nav__item").length,
			el;
		
		while(i){
			el = $(".nav__item").eq(i - 1).children().hasClass("mPS2id-highlight");

			if(el){
			   return i - 1;
			 }
			
			i -= 1;
		}
	};
	
	const setAmountClick = (num) => {
		amountClick = getIndex();
		
		amountClick += num;
		amountClick = amountClick < 0 ? amountSection - 1 : amountClick;
		indexSection = amountClick % amountSection;
	};
	
	$(".nav__arrows-up").on("click", () => {
		setAmountClick(-1)

		hashScrollTo = sections.eq(indexSection).attr("href");
		$.mPageScroll2id("scrollTo", hashScrollTo);
		
	});
	
	$(".nav__arrows-down").on("click", () => {
		setAmountClick(1)

		hashScrollTo = sections.eq(indexSection).attr("href");
		$.mPageScroll2id("scrollTo", hashScrollTo);
	});
	
	
	
	const $nav = $(".nav");
	$(document).on("scroll", (e) => {
		const trigger = $(document).scrollTop() >= $(".header").height();

		if(trigger){
		   $nav.css({ "position": "fixed" });
			
		}
		else{
			$nav.css({ "position": "absolute" });
		}
		   
	});
	
	
	AOS.init();
	
});

$(window).on("load", () => {
	$("body").delay(200).css({ "overflow": "", "overflow-x": "hidden" });
	$(".preloader").delay(200).fadeOut(400);
});