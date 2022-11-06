import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
let markup = '';

for (const image of galleryItems) {
  markup += `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`;
}

galleryRef.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
});

galleryRef.addEventListener('click', onGalleryImageClick);

function onGalleryImageClick(e) {
  if (e.target.nodeName !== 'IMG') {
    console.log('This is not a picture');
    return;
  }

  e.preventDefault();

  lightbox.open;
}