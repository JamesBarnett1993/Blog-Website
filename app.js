$(function() {

		var $Navbar_li = $("#HeadbarNav li");

		$Navbar_li.on('click', function() {

		// remove active class 
		$Navbar_li.removeClass("active");	

		//add active class
		$(this).toggleClass('active'); 
		
		});
		
	});