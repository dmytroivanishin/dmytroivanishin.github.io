$(document).ready(function(){
	
	$(".contactForm > input[type=button]").click(function(){	
		$(".typeForm").each(function(t){
			var type = $(".typeForm").eq(t).attr("type");
			if($(this).val() == ""){
				$(".help-block").eq(t).text("Заполните поле");
			}
			else if(type == "email"){
				email = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
				if(email.test($(".contactForm input[type=email]").val())){
					$(".help-block").eq(t).text("");
				}
				else{
					$(".help-block").eq(t).text("Не корректно введен емаил");
				}
			}
			else{
				$(".help-block").eq(t).text("");
			}
		});
	});
	
});