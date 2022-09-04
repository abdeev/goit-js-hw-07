import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryElements = document.querySelector('.gallery');
let giantImageUrl = '';
galleryItems.forEach(i => {
    const { preview, original, description } = galleryItems;
    const galleryItemElementDiv = document.createElement('div');
    galleryItemElementDiv.classList.add('gallery__item');

    const galleryItemElementLink = document.createElement('a');
    galleryItemElementLink.setAttribute('href', `${i.original}`);
    galleryItemElementLink.classList.add('gallery__link');

    const galleryItemElementImg = document.createElement('img');
    galleryItemElementImg.classList.add('gallery__image');

    galleryItemElementImg.setAttribute('src', `${i.preview}`);
    galleryItemElementImg.setAttribute('alt', `${i.description}`);
    galleryItemElementImg.setAttribute('data-source', `${i.original}`);


    galleryItemElementLink.innerHTML = galleryItemElementImg.outerHTML;
    galleryItemElementDiv.innerHTML = galleryItemElementLink.outerHTML;

    galleryElements.append(galleryItemElementDiv);
})

let onEscapeBtnPush;

function onPictureClick(event) {
    event.preventDefault();
    const { target } = event;
    const targetImg = galleryElements.querySelectorAll('.gallery__image');
    targetImg.forEach(el => {
        if (el === target) {
            const instance = basicLightbox.create(`<img src=${el.dataset.source}>`)
            instance.show();
            window.addEventListener('keydown', onEscapeBtnPush = ev => {
                if (ev.code !== 'Escape') {
                    return;
                } else {
                    console.log('escape pressed');
                    instance.close();
                    window.removeEventListener('keydown', onEscapeBtnPush);
                }
        })
        }
    })
}
galleryElements.addEventListener('click', onPictureClick)

console.log(galleryItems);
