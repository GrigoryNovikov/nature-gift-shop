let pendantElement = document.querySelectorAll('.pendants-item');
let pendantElements = document.getElementById('pendantElements');
let pendantsTitle = document.getElementsByTagName('h1');
let backArrow = document.querySelector('.back-arrow');
let pendant = document.querySelectorAll('.pendant')

pendantElements.addEventListener('click', function (element) {
    let e = element.target;
    let id = e.alt;
    pendantElements.style.display = "none";
    pendantsTitle[0].style.display = "none";
    document.getElementById(id).style.display = ('flex');
})

backArrow.onclick = (function () {
    pendant.forEach((element) => {
        element.style.display = 'none'
    })
    pendantElements.style.display = "flex";
    document.getElementsByTagName('h1')[0].style.display = "block";
})


// pendantElement.forEach((element) => {
//     element.addEventListener('click', function () {
//         pendantElements.style.display = "none";
//         pendantsTitle[0].style.display = "none";
//         document.getElementById('pendant1').style.display = ('flex');
//     });
// });
//


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
