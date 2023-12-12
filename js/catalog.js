let CatalogItems = document.querySelectorAll('.catalog-items');

let catalogItem = document.querySelectorAll('.catalog-item img');
let catalogItemsTitle = document.querySelectorAll('.catalog-items-title')
let catalogItemCard = document.querySelectorAll('.catalog-item-card')
let backArrow = document.querySelectorAll('.back-arrow');
let catalogElements = document.getElementById('catalogElements');

catalogItem.forEach(item => {
    item.addEventListener('click', function (element) {
        let e = element.target;
        let id = e.alt;
        catalogElements.style.display = "none";
        catalogItemsTitle[0].style.display = "none";
        document.getElementById(id).style.display = ('grid');
    })
})

backArrow.forEach(item => {
    item.addEventListener('click', function (item) {
        catalogItemCard.forEach((item) => {
            item.style.display = 'none'
        })
        catalogElements.style.display = "flex";
        catalogItemsTitle[0].style.display = "block";
    });
})


$(document).ready(() => {
    $('.catalog-item-card__action__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.catalog-item-card__action__slider__nav'
    });
    $('.catalog-item-card__action__slider__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.catalog-item-card__action__slider',
        centerMode: false,
        adaptiveHeight: true,
        focusOnSelect: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
