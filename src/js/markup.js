import menuItems from '../templates/';
import menu from '../menu.json';

const refs = {
  menuMarkup: document.querySelector('.js-menu'),
};

const markup = menuItems(menu);
refs.menuItems.insertAdjacentHTML('afterbegin', markup);
function createMenuItems(items) {
  return menuItems(items);
}
