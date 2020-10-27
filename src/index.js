import menuItems from './templates/menu-items.hbs';
import menu from './menu.json';

const refs = {
  menuMarkup: document.querySelector('.js-menu'),
};

const markup = menuItems(menu);
refs.menuMarkup.insertAdjacentHTML('afterbegin', markup);
