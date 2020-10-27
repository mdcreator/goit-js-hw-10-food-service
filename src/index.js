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

const markup = createMenuItems(menu);
refs.menuMarkup.insertAdjacentHTML('afterbegin', markup);

function createMenuItems(menu) {
  return menuItems(menu);
}

refs.checkbox.addEventListener('change', onSwitchTheme);
lightThemeDefault();

function onSwitchTheme() {
  if (refs.checkbox.cheched) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }

  //   localStorage.setItem('Theme', e.currentTarget.cheched);
}

// const lightThemeDefault = localStorage.getItem(cheched) === 'true';

function lightThemeDefault() {
  const themeDefault = localStorage.getItem('theme');
  if (themeDefault === Theme.LIGHT) {
    refs.body.classList.add(Theme.LIGHT);
    refs.checkbox.cheched = true;
  } else {
    refs.body.classList.add(Theme.DARK);
    // refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  }
}
