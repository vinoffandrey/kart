$(document).ready(function () {
	$('.slider__body').slick({
		slidesToShow: 3,
		sliderToScroll: 1,
		speed: 500,
		easing: 'ease',
		waitForAnimate: false,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});

const cards = document.querySelectorAll('.slider__item');

function flipCard() {
	this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));



$(".open__button").click(function () {
	$(".slider__container").toggleClass('active');
});
