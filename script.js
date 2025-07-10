const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightboxImg');
const galleryItems = document.querySelectorAll('.images');
const close = document.querySelector('.close');
const previous = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;
let images = [];

galleryItems.forEach((item, index) => {
    images.push(item.querySelector('img').src);
    item.addEventListener('click', () => {
    currentIndex = index;
    showLightbox();
    });
});

function showLightbox() {
    lightbox.style.display = 'flex';
    lightboxImg.src = images[currentIndex];
};

close.addEventListener('click', () => {
    lightbox.style.display = 'none'
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length
    showLightbox();
});

previous.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showLightbox();
});



































