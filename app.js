var main = function() {
	$(".nav a").on('click', function() {
		$(this).toggleClass("nav_click");
	});
}


$(document).ready(main);