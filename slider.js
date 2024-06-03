// slider.js
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${-currentIndex * 100}%)`;
        dots[i].classList.remove('active');
    });
    dots[currentIndex].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

setInterval(() => {
    currentIndex++;
    showSlide(currentIndex);
}, 3000);

slides.forEach(slide => {
    slide.querySelector('.hover-content').addEventListener('click', () => {
        window.open('https://fylehq.com', '_blank');
    });
});
