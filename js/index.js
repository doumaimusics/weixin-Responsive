$(function() {
	$('.weixin .header .plus').on('click', function() {
		$('.header .plus .menu').toggleClass('plus');
	})
	$('.nav-list  .icon1').on('click', function() {
		$('.aa').removeClass('out');
		$('.weixin').addClass('out');
	})
	$('.nav-list  .icon2').on('click', function() {
		$('.aa').removeClass('out');
		$('.tongxun').addClass('out');
	})
	$('.nav-list  .icon3').on('click', function() {
		$('.aa').removeClass('out');
		$('.friends').addClass('out');
	})
	$('.nav-list  .icon4').on('click', function() {
		$('.aa').removeClass('out');
		$('.main').addClass('out');
	})
})