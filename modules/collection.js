export default class Library {
  LOCAL_STORAGE_KEY = 'books';

  collection = [];

  constructor() {
    this.collection = this.getFromLocalStorage();
    this.list = document.getElementById('books');
    this.addButton = document.getElementById('add');
    this.addButton.addEventListener('click', () => {
      this.addNewBook();
      this.saveToLocalStorage();
      this.render();
    });
  }

  getFromLocalStorage() {
    const cachedBooks = window.localStorage.getItem(this.LOCAL_STORAGE_KEY);
    return cachedBooks ? JSON.parse(cachedBooks) : [];
  }

  saveToLocalStorage() {
    window.localStorage.setItem(
      this.LOCAL_STORAGE_KEY,
      JSON.stringify(this.collection),
    );
  }

  deleteBook(i) {
    this.collection = this.collection.filter((book, ind) => i !== ind);
  }

  addNewBook() {
    const title = document.getElementById('newTitle');
    const author = document.getElementById('newAuthor');
    this.collection.push({ title: title.value, author: author.value });
    title.value = '';
    author.value = '';
    title.focus();
  }

  render() {
    this.list.innerHTML = this.collection
      .map(
        (book) => `<li class="bookRow">
      <article>
          <p id="title">"${book.title}" by ${book.author}</p>
          <button class="remove">Remove</button>
      </article>
      </li>`,
      )
      .join('');

    const remove = Array.from(document.getElementsByClassName('remove'));
    remove.forEach((btn, i) => btn.addEventListener('click', () => {
      this.deleteBook(i);
      this.saveToLocalStorage();
      this.render();
    }));
  }
}
