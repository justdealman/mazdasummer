$(document).ready(function() {
	$('input[type="checkbox"]').uniform();
	$('.form .nickname').hide();
	$('.form input[type="checkbox"]').change(function() {
		if ( $('.form input[type="checkbox"]:checked').length > 0 ) {
			$('.form .nickname').show();
		}
		else {
			$('.form .nickname').hide();
		}
		return false;
	});
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
});
