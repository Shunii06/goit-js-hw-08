import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
function createGalleryItem({ preview, original, description }) {
  const listItem = document.createElement('li');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__item');
  galleryLink.href = original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = preview;
  image.alt = description;

  galleryLink.appendChild(image);
  listItem.appendChild(galleryLink);

  return listItem;
}
galleryItems.forEach(item => {
  const galleryItem = createGalleryItem(item);
  galleryContainer.appendChild(galleryItem);
});

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
});
