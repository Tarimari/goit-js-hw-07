import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(`.gallery`);
gallery.insertAdjacentHTML('afterbegin', makeGallery(galleryItems));

function makeGallery(gallery) {
    return gallery.map(({preview, description}) =>
        `<li class="gallery__link">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </li>`)
        .join(""); 
}

console.log(galleryItems);
