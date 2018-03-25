 $(document).ready(function(){
<<<<<<< HEAD
	 
     var t = "";
	 
=======
      	var t = "";
>>>>>>> cd157ea579c32757a986d8ac4bd3aa14acdb9d70
	 $("#menu-menyu-magazina").click(function(e){
		 
		 e.preventDefault()
		 
		 var link = window.location,
			 href = $(this).children("li").children("a").prop("href"),
			 submenu = $(this).find(".sub-menu");
<<<<<<< HEAD
		 
			 t = link + " " + href;
=======
		t = link + " " + href;	 
>>>>>>> cd157ea579c32757a986d8ac4bd3aa14acdb9d70
		 
		 if(link == href){
			 submenu.slideDown(200);
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
	 console.log(t);
});
