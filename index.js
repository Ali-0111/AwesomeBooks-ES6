import { saveLocal } from
'./modules/localStorage_Functions.js';
import {
  addBtn, create, getCollection, createList, clearPlaceHolder,
} from './modules/test.js';

import {
  links, browse,
} from './modules/show_hide.js';

import timeDate from './modules/date_time.js';

window.onload = () => {
  setInterval(timeDate, 1000);
  addBtn.addEventListener('click', () => {
    create();
    saveLocal(getCollection());
    clearPlaceHolder();
  });

  getCollection().forEach((element) => {
    createList(element);
  });

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      browse(e);
    });
  });
};
