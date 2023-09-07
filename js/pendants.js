let pendantElement = document.querySelectorAll('.pendants-item');
let pendantElements = document.getElementById('pendantElements');
let pendantsTitle = document.getElementsByTagName('h1');
let backArrow = document.getElementById('back-arrow');

pendantElement.forEach((element) => {
    element.addEventListener('click', function () {
        pendantElements.style.display = "none";
        pendantsTitle[0].style.display = "none";
        document.getElementById('block').style.display = ('flex');
    });
});

backArrow.onclick = (function () {
    document.getElementById('block').style.display = ('none');
    pendantElements.style.display = "flex";
    document.getElementsByTagName('h1')[0].style.display = "block";
})



