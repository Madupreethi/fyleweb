// project.js
const contentItems = document.querySelectorAll('.content-item');
const projectImage = document.getElementById('project-image');

contentItems.forEach(item => {
    item.addEventListener('click', () => {
        projectImage.src = item.dataset.img;
    });
});
