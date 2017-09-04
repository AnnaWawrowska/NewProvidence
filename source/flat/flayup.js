(function($) {
	'use strict';

	var flayupIsView = false;
	var flayupIsActive = true;
	var flayupFileExtension = 'jpg';
	var flayupFileName = $(document).attr('location').href;
	flayupFileName = flayupFileName.substring(flayupFileName.lastIndexOf('/')+1, flayupFileName.lastIndexOf('.'));

	var $flayup;

	function flayupActivate() {
		$flayup.toggle();
		flayupIsView = $flayup.css('display') === 'block';
	}

	$('body').prepend(
		$flayup = $('<div>')
			.attr('id', 'flayup')
			.css({'background' : 'url(flat/' + flayupFileName + '.' + flayupFileExtension + ') no-repeat center top'})
			.css({'display' : 'none'})
			.css({'left' : '0'})
			.css({'position' : 'absolute'})
			.css({'top' : '0'})
			.css({'width' : '100%'})
			.css({'z-index' : '9999'})
			.prepend(
				$('<img>')
					.attr('src', 'flat/' + flayupFileName + '.' + flayupFileExtension)
					.error(function() {
						window.alert('Preview filename for this piage is incorrect.\r\nImprove that on ' + flayupFileName + '.' + flayupFileExtension);
					})
			)
	);
	$(window).on('load', function() {
		$('body').bind('click', flayupActivate);
		$('body').css({'min-height' : $flayup.height() + 'px'});

		var bodyWidth = $('body').width();
		var flayupWidth = $flayup.width();
		var flayupLeft = Math.round((bodyWidth - flayupWidth) / 2);

		$flayup.css({'height' : $flayup.height() + 'px'});
		$flayup.css({'left' : flayupLeft + 'px' });
		$flayup.find('img').remove();
	});


	$(window).keypress(function(e) {
		var keyCode = e.keyCode ? e.keyCode : e.charCode;
		switch(keyCode) {
			case 32 :
				if(flayupIsActive) {
					$('body').unbind('click');
					flayupIsActive = false;
				} else {
					$('body').bind('click', flayupActivate);
					flayupIsActive = true;
				}
				return false;
			case 49 : $flayup.css({'opacity' : '1.0'}); break;
			case 50 : $flayup.css({'opacity' : '0.75'}); break;
			case 51 : $flayup.css({'opacity' : '0.5'}); break;
			case 52 : $flayup.css({'opacity' : '0.25'}); break;
		}
	});
})(jQuery);
