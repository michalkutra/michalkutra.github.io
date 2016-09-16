$(document).ready(function() {
	$('#article-menu, #content-list').find('.list').click(function() {
		//$('#article-menu .list').not(this).removeClass("active");
		$(this).addClass("active");
		var href = $(this).attr('data-id');
		$('html, body').animate({
        scrollTop: $(document).find("#"+href).offset().top - 70 }, 300);
	})
	$("#article-menu .list").click(function() { 
		if ($(window).width() < 991) {
		$("#article-menu").toggle();
	}
	})
	

	$("#menu-button").click(function() {
		$("#article-menu").toggle();
	})

	$(window).scroll(function() {
    	$('.scroll-to').waypoint(function() {
    		var article = $(this).attr("id");
    		$('#article-menu .list').removeClass("active");
    		$("#article-menu .list[data-id='"+article+"']").addClass("active");
		},{offset: '50%'});
		/*if ($(window).width() > 991) {
			if ($(this).scrollTop() > 2900) {
				var top = $(this).scrollTop();
          		$('#article-menu').css("top",top+"px");
      		} else {
          		$('#article-menu').css("top","2900px");
    		}
    	}*/
	})
if ($(window).width() > 991) {
	$('.menu-container').hcSticky({
					top: 50,
					bottom: 100
				});
	}
})