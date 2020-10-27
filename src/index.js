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

refs.checkbox.addEventListener('change', onSwitchTheme);

// const lightThemeDefault = localStorage.getItem(cheched) === 'true';

function lightThemeDefault(e) {
  if (localStorage.getItem(cheched) === 'true') {
    refs.body.classList.add(Theme.LIGHT);
    refs.checkbox.cheched = true;
  } else {
    refs.body.classList.add(Theme.DARK);
  }
}

function onSwitchTheme(e) {
  if (refs.checkbox.cheched) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}
