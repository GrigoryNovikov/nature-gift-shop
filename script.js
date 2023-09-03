$(document).ready(() => {
    $('.main-banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img src='images/left_arrow.svg' alt='1' class='slick-prev'>",
        nextArrow: "<img src='images/right_arrow.svg' alt='1' class='slick-next'>",
        autoplay: true,
        autoplaySpeed: 4000,
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
        autoplay: true,
        pauseOnHover: true
    });

    // $('.navigation__item').click((e) => {
    //     let currentElement = $(e.target);
    //     $('.navigation__item').removeClass('active');
    //     currentElement.addClass('active');
    // });
    //
    // let link = document.querySelectorAll(".navigation__item a");
    // for (let i = 0, length = link.length; i < length; i++) {
    //     link[i].onclick = function() {
    //         let active_link = document.querySelector(".navigation__item .active");
    //         if (active_link) active_link.classList.remove("active");
    //         this.parentNode.classList.add('active');
    //     };
    // }
})