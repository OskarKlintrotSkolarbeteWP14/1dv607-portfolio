$( document ).ready(function() {
	var allDiv = $('h2').parent().children('div');
	
	$(allDiv).addClass('hide');
	
    $("h2").click(function() {
		var that = this;
		var thisDiv = $(this).parent().children('div');
		var thisDivShow = $(thisDiv).show();
		
		if (thisDiv.hasClass('hide')) {
			$(allDiv).addClass('hide');
			showWithAnimation(thisDiv, that);
		}
		else {
			scrollToTop('body');
			hideWithAnimation(thisDivShow);
		}
	});
	
	function scrollToTop(toWhere) {
			$('html, body').animate({
				scrollTop: $(toWhere).offset().top -70 
				}, 'medium');
		}
		
		function hideWithAnimation(element) {
			$(element).slideUp('medium', function() {
						element.addClass('hide');
					});
		}
		
		function showWithAnimation(element, scrollTo) {
			$(element).hide().removeClass("hide").slideDown('fast');
			scrollToTop(scrollTo);
		}
});