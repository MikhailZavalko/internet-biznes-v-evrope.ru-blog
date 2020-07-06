$(function() {

	/* OPEN MOBILE MENU & CLOSE WHEN CLICK OUTSIDE */
	$('.hamburger').on('click', function () {
		$(this).toggleClass('is-active');
		$('.menu').toggleClass('active');
	});

	$(document).click( function(e){
		if ( !$(e.target).closest('.main-head').length ) {
			$('.hamburger').removeClass('is-active');
			$('.menu').removeClass('active');
		}
	});
	/* OPEN MOBILE MENU & CLOSE WHEN CLICK OUTSIDE */



	/* SCROLL FOR HEADER */
	jQuery(document).ready(function($) {
		$(window).on('scroll touchmove', function () {
			$('.header').toggleClass('shrinked', $(document).scrollTop() > 0);
    }).scroll();
	});
	/* SCROLL FOR HEADER */



	/* MENU TRIGGER FOR SCROLL */
	$(".menu_item a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top - 50;
		destination = elementClick == '#home' ? destination - 20 : destination;
		$("html,body").stop().animate({ scrollTop: destination }, 1000);
		$(".hamburger").removeClass('is-active');
		$('.menu').removeClass('active');
		return false;
	});
	/* MENU TRIGGER FOR SCROLL */



	/* MASK PHONE INPUT */
	$('.phone').mask('+7(999) 999 99 99');
	/* MASK PHONE INPUT */



	/* Owl-carousel */
	// $('.owl-carousel').owlCarousel({
	// 	items: 1,
	// 	loop: true,
	// 	margin: 30,
	// 	smartSpeed: 500,
	// 	dots: true,
	// 	nav: true,
	// 	navText: ['<img src="img/prev.png" alt="prev" />', '<img src="img/next.png" alt="prev" />'],
	// 	responsiveClass: true,
	// });
	/* Owl-carousel */
	


	/* Magnific Popup */
	$('.open-form-button').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom',
		callbacks: {
			beforeOpen: function() {
				var $triggerEl = $(this.st.el),
				newClass = $triggerEl.data("modal-class");
				if (newClass) {
					this.st.mainClass = this.st.mainClass + ' ' + newClass;
				}
			}
		}
	});
	/* Magnific Popup */



	/* E-mail Ajax Send */
	$("form").submit(function(e) {
		e.preventDefault;
		var th = $(this);
		$('.form').addClass('loading');
		$.ajax({
			type: "POST",
			url: "../send.php",
			data: th.serialize()
		}).done(function() {
			$('.form').removeClass('loading');
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass("visible");
				$.magnificPopup.close();
			}, 14000);
		});
		return false;
	});
	/* E-mail Ajax Send */

});
