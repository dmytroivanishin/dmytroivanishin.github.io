 $(document).ready(function(){
      
	 $("#menu-menyu-magazina").click(function(e){
		 
		 var link = window.location,
			 href = $(this).children("li").children("a").prop("href"),
			 submenu = $(this).find(".sub-menu");
		 
		 if(link == href){
			 submenu.slideDown(200)
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
		 });*/
	 });
	
});