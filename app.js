$(function() {
	$("#HeadbarNav li").on('click', function() {
		$("#HeadbarNav li.active").removeClass("active");	
		    $(this).toggleClass('active');
		   });
		});

