function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function toggleMenu() {
    var menuToggler = document.querySelector('.toggle');
    var navigation = document.querySelector(".navigation");
    menuToggler.classList.toggle('active');
    navigation.classList.toggle('active');

}