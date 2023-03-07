import { Book } from './modules/book_class.js';
import { saveLocal } from
'./modules/localStorage_Functions.js';
import {
  addBtn, create, collection, createList, clearPlaceHolder,
} from './modules/test.js';

import {
  links, browse,
} from './modules/show_hide.js';

import { timeDate } from './modules/date_time.js';

window.onload = () => {
  const start = new Book();
  setInterval(timeDate, 1000);
  addBtn.addEventListener('click', () => {
    create();
    saveLocal(collection);
    clearPlaceHolder();
  });

  collection.forEach((element) => {
    createList(element);
  });

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      browse(e);
    });
  });
};