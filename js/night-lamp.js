$(document).ready(() => {
    $('.big-lamp__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.big-lamp__slider__nav',
        adaptiveHeight: true
    });
    $('.big-lamp__slider__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.big-lamp__slider',
        centerMode: false,
        focusOnSelect: true,
        adaptiveHeight: true
    });
});

