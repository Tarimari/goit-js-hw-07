import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(`.gallery`);
gallery.insertAdjacentHTML('afterbegin', makeGallery(galleryItems));
gallery.addEventListener(`click`, handlerClick);


function makeGallery(gallery) {
    return gallery.map(({preview, original, description}) =>
        `<li class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</li>`)
        .join(""); 
}

function handlerClick(evt) {
  evt.preventDefault();
  console.dir(evt.target);
  console.log(evt.currentTarget === evt.target);
  if (evt.currentTarget === evt.target) { return; }
  
  const instance = basicLightbox.create(`
  <img class="gallery__image"
  src='${evt.target.dataset.source}'
  alt='${evt.target.alt}' 
  />
`);
instance.show();

}

console.log(basicLightbox);