 $(document).ready(function(){
	 
	$(window).load(function(){
		var link = window.location;

		$("#menu-menyu-magazina").children("li").each(function(index){

			var href = $(this).children("a").prop("href"),
				submenu = $(this).find(".sub-menu");

			if(link == href){
				submenu.slideDown(300);
			}
		});
		
	});
	 
});
