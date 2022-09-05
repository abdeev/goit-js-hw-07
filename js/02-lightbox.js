import { galleryItems } from './gallery-items.js';
// Change code below this line
const divElement = document.querySelector('.gallery');

galleryItems.forEach(i => {
    const { preview, original, description } = galleryItems;
    const galleryItemElement = `
    <a class="gallery__item" href= "${i.original}">
        <img
            class="gallery__image"
            src="${i.preview}"
            alt="${i.description}"
        />
    </a>`

    divElement.insertAdjacentHTML('beforeend', galleryItemElement);
})

const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250, navText: ['P R E V ←','N E X T →'], overlayOpacity: 0.8});

console.log(galleryItems);
