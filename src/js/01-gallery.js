import { galleryItems } from './gallery-items.js';
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const createPicture = () => {
    for (const galleryItem of galleryItems) {
        const item = document.createElement('li')
        item.classList.add('gallery__item')
        item.innerHTML = `
    <a class="gallery__link" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/>
    </a>`
        gallery.append(item)
    }
}

createPicture()
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });