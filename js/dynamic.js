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
});
