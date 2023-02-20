const listLink = document.getElementById('listLink');
const addLink = document.getElementById('addLink');
const contactLink = document.getElementById('contactLink');
const collection = document.getElementById('collection');
const addBook = document.getElementById('addBook');
const contact = document.getElementById('contact');

const toggleVisibility = (flag) => {
  document.querySelectorAll('.nav-item a').forEach((link) => {
    link.classList.remove('link');
  });
  document.querySelectorAll('section').forEach((section) => {
    section.classList.remove('active');
  });
  switch (flag) {
    case 'collection':
      collection.classList.add('active');
      listLink.classList.add('link');
      break;
    case 'addBook':
      addBook.classList.add('active');
      addLink.classList.add('link');
      break;
    case 'contact':
      contact.classList.add('active');
      contactLink.classList.add('link');
      break;
    default:
      break;
  }
};

export {
  listLink,
  addLink,
  contactLink,
  collection,
  addBook,
  contact,
  toggleVisibility,
};
