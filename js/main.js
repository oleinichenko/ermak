$(document).ready(function() {
	$("#phone").mask("+7 (999) 99-99-999");
	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			$(".popup-fade").fadeIn(500);
			$('.popup-close').click(function() {
				$(this).parents('.popup-fade').fadeOut();
				return false;
			});        
		
			$(document).keydown(function(e) {
				if (e.keyCode === 27) {
					e.stopPropagation();
					$('.popup-fade').fadeOut();
				}
			});
		
			$('.popup-fade').click(function(e) {
				if ($(e.target).closest('.popup').length == 0) {
					$(this).fadeOut();					
				}
			});	
			setTimeout(function() {
				th.trigger("reset");
			}, 500);
		});
		return false;
	});
	$('a[href^="#"]').click(function(){ 
		let anchor = $(this).attr('href');  
		$('html, body').animate({           
		scrollTop:  $(anchor).offset().top  
		}, 600);                            
	});
});