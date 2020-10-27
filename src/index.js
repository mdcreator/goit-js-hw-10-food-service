import menuItems from './templates/menu-items.hbs';
import menu from './menu.json';

const refs = {
  menuMarkup: document.querySelector('.js-menu'),
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Добавление разметки

const markup = menuItems(menu);
refs.menuMarkup.insertAdjacentHTML('afterbegin', markup);
