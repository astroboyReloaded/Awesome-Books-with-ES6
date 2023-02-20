import Library from './modules/collection.js';
import {
  listLink,
  addLink,
  contactLink,
  toggleVisibility,
} from './modules/navigation.js';
import currentTime from './modules/time.js';

window.onload = () => {
  const lib = new Library();
  lib.render();
  setInterval(currentTime, 1000);
};

listLink.addEventListener('click', () => {
  toggleVisibility('collection');
});

addLink.addEventListener('click', () => {
  toggleVisibility('addBook');
});

contactLink.addEventListener('click', () => {
  toggleVisibility('contact');
});
