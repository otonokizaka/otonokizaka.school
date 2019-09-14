(function($, window, undefined) {

	'use strict';

	// jQuery load check
	if (typeof jQuery === undefined) {
		throw new Error('This JavaScript requires jQuery');
	}

	$(document).ready(function() {
		$('a[href="#"]').click(function() {
			$('#april').modal('show');
			return false;
		});
	});

})(jQuery, window, void 0);
