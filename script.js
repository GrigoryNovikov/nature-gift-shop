$(document).ready(() => {
    $('.main-banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img src='images/left_arrow.svg' alt='1' class='slick-prev'>",
        nextArrow: "<img src='images/right_arrow.svg' alt='1' class='slick-next'>",
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true
    });

    $('.plate__slider__action, .lamp__slider__action').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img src='images/left_arrow.svg' alt='1' class='slick-prev'>",
        nextArrow: "<img src='images/right_arrow.svg' alt='1' class='slick-next'>",
        adaptiveHeight: true
    });

    $('.feedback__slider, .spec-order-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img src='images/left_arrow.svg' alt='1' class='slick-prev'>",
        nextArrow: "<img src='images/right_arrow.svg' alt='1' class='slick-next'>",
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true
    });
})