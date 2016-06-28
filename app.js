'use strict';

$(function() {

		var $Navbar_li = $("#HeadbarNav li");

		$Navbar_li.on('click', function() {

		// remove active class 
		$Navbar_li.removeClass("active");	

		//add active class
		$(this).toggleClass('active'); 
		
		});

		   //settings for slider
    var width = 720;
    var animationSpeed = 700;
    var pause = 1000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();
		
	});