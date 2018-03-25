 $(document).ready(function(){
	 
     //var t = "";
	 
	 $(window).load(function(){
		 var link = window.location,
			 href = $("#menu-menyu-magazina").children("li").children("a").prop("href"),
			 submenu = $("#menu-menyu-magazina").find(".sub-menu");
		 
		 $("#menu-menyu-magazina").children("li").each(function(index){
			
			 var href = $(this).children("a").prop("href"),
				submenu = $(this).find(".sub-menu");
			
			 if(link == href){
			 	submenu.slideDown(200);
			 }
			 else {
				submenu.slideUp(600, function(){
					if(window.location.origin != href){
						window.location.href = href;
					}
					//window.location.href = href;
				}); 
			 }

			 //console.log(index,  $(this).children("a").prop("href"), "test");

			// console.log(link, href);
			  
		 });
		 
		 console.log( window.location);
		 
	 });
	 
	 /*$("#menu-menyu-magazina").click(function(e){
		 
		e.preventDefault()
		 
		var link = window.location,
			href = $("#menu-menyu-magazina").children("li").children("a").prop("href"),
			submenu = $("#menu-menyu-magazina").find(".sub-menu");

		 	if(link == href){
				window.location.href = href;
			 	submenu.slideDown(200);
				
				
			}
			else {
				submenu.slideUp(600, function(){
					window.location.href = href;
				}); 
			 }
		 //e.preventDefault();
		 /*var submenu = $(this).find(".sub-menu");
		 if(submenu.is(":hidden")){
			submenu.slideDown(200); 
		 }
		 else{
			submenu.slideUp(400);  
		 }
		 console.log(submenu);*/
		/* $(this).find(".sub-menu").toggle(function(){
			 $(this).show();
		 },function(){
			 $(this).hide();
		 });
	 });*/
});
