import { saveLocal, collectionMethod } from './localStorage_Functions.js';

export const addBtn = document.querySelector('.add-btn');
/*eslint-disable*/
export let collection = collectionMethod();

const lstTitle = document.querySelector('.lst-title');
const ul = document.querySelector('.lst');
const title = document.querySelector('.title-input');
const author = document.querySelector('.author-input');

function removeBtn(e) {
  const li = e.target.parentElement;
  collection = collection.filter((book) => book.title !== li.id);
  saveLocal(collection);
  li.remove();
}

export function createList(element) {
  lstTitle.innerText = 'All awesome books';
  const newBook = element;
  const li = document.createElement('li');
  li.innerHTML = `
        <h1 class="title-show">
        " ${newBook.title}" by ${newBook.author}
        </h1>
        `;
  li.id = `${newBook.title}`;
  const rmvBtn = document.createElement('button');
  rmvBtn.className = 'rmv-btn';
  rmvBtn.innerText = 'Remove';
  li.append(rmvBtn);
  rmvBtn.addEventListener('click', (e) => {
    removeBtn(e);
  });
  ul.appendChild(li);
}

export function create() {
  const newBook = { title: title.value, author: author.value };
  collection.push(newBook);
  createList(newBook);
}

export const clearPlaceHolder = () => {
  title.value = '';
  author.value = '';
};