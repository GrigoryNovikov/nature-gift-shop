// document.onreadystatechange = function() {
//     if (document.readyState !== "complete") {
//         document.querySelector("body").style.visibility = "hidden";
//         document.querySelector("#loader").style.visibility = "visible";
//     } else {
//         document.querySelector("#loader").style.display = "none";
//         document.querySelector("body").style.visibility = "visible";
//     }
// };
$(document).ready(() => {
    $('.main-banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img src='images/left_arrow.svg' alt='1' class='slick-prev'>",
        nextArrow: "<img src='images/right_arrow.svg' alt='1' class='slick-next'>",
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true
    });

    $('.plate__slider__action, .lamp__slider__action').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img src='images/left_arrow.svg' alt='1' class='slick-prev'>",
        nextArrow: "<img src='images/right_arrow.svg' alt='1' class='slick-next'>",
    });

    $('.feedback__slider, .spec-order-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img src='images/left_arrow.svg' alt='1' class='slick-prev'>",
        nextArrow: "<img src='images/right_arrow.svg' alt='1' class='slick-next'>",
        autoplay: false,
        pauseOnHover: true
    });
})