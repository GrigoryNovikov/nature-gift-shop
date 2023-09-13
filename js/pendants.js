let pendantElement = document.querySelectorAll('.pendants-item img');
let pendantElements = document.getElementById('pendantElements');
let pendantsTitle = document.getElementsByTagName('h1');
let backArrow = document.querySelectorAll('.back-arrow');
let pendant = document.querySelectorAll('.pendant')

pendantElement.forEach(item => {
    item.addEventListener('click', function (element) {
        let e = element.target;
        let id = e.alt;
        pendantElements.style.display = "none";
        pendantsTitle[0].style.display = "none";
        document.getElementById(id).style.display = ('grid');
    })
})


backArrow.forEach(item => {
    item.addEventListener('click', function (item){
        pendant.forEach((item) => {
            item.style.display = 'none'
        })
        pendantElements.style.display = "flex";
        document.getElementsByTagName('h1')[0].style.display = "block";
    });
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
