let pendantElement = document.querySelectorAll('.pendants-item');
let pendantElements = document.getElementById('pendantElements');
let pendantsTitle = document.getElementsByTagName('h1');
let backArrow = document.querySelector('.back-arrow');

pendantElement.forEach((element) => {
    element.addEventListener('click', function () {
        pendantElements.style.display = "none";
        pendantsTitle[0].style.display = "none";
        document.getElementById('pendant1').style.display = ('flex');
    });
});

backArrow.onclick = (function () {
    document.getElementById('pendant1').style.display = ('none');
    pendantElements.style.display = "flex";
    document.getElementsByTagName('h1')[0].style.display = "block";
})

$(document).ready(() => {
    $('.pendants-action__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.pendants-action__slider__nav'
    });
    $('.pendants-action__slider__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.pendants-action__slider',
        centerMode: false,
        focusOnSelect: true
    });
});
