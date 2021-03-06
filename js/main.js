$(document).ready(function () {
	// Fixed nav
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		var x = $('#about').position();
		if (y > x.top) {
			$('#nav').css({'position':'fixed', 'top': '0', 'left': '0', 'padding': '0 5%' });
			$('#toggle').css('right', '4%');
		} else {
			$('#nav').css({'position':'relative', 'padding': '0'});
			$('#toggle').css('right', '0');
		}
	});
	$('#toggle').click(function () {
		$('#nav-wide-screen').toggle();
		$('li:last-child').css('padding-right', '0');
	});
	
	// Works section
	
	$('#nature').hover(function () {
		$('#nature p').toggleClass('on-hover');
		$('#nature h4').toggleClass('on-hover');
	});
	$('#urban').hover(function () {
		$('#urban p').toggleClass('on-hover');
		$('#urban h4').toggleClass('on-hover');
	});
	$('#people').hover(function () {
		$('#people p').toggleClass('on-hover');
		$('#people h4').toggleClass('on-hover');
	});
	$('#wedding').hover(function () {
		$('#wedding p').toggleClass('on-hover');
		$('#wedding h4').toggleClass('on-hover');
	});
	$('#architecture').hover(function () {
		$('#architecture p').toggleClass('on-hover');
		$('#architecture h4').toggleClass('on-hover');
	});
	$('#animals').hover(function () {
		$('#animals p').toggleClass('on-hover');
		$('#animals h4').toggleClass('on-hover');
	});
	
	
	// Carousel framework
	$('.owl-carousel').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	
	// Video script
	$('.vid').hide();
	$('.play-button').click(function() {
		$('.video').css('background', 'none');
		$('.play-button').hide();
		$('.vid').show();
	});
	
	// Social section
	$('#pinterest').hover(function() {
		$('#pinterest a i').toggleClass('social-hover');
	});
	$('#instagram').hover(function() {
		$('#instagram a i').toggleClass('social-hover');
	});
	$('#twitter').hover(function() {
		$('#twitter a i').toggleClass('social-hover');
	});
	$('#google').hover(function() {
		$('#google a i').toggleClass('social-hover');
	});
	$('#tumblr').hover(function() {
		$('#tumblr a i').toggleClass('social-hover');
	});
});