import menu from '../menu.json';
import marcupFunc from '../templates/menu.hbs'
import { themSwitcher, body, Theme } from './themes.js';

const switcherPositiomFromLS = localStorage.getItem('themSwitcher');
const menuList = document.querySelector('.js-menu');
document.addEventListener('DOMContentLoaded', startPage);

createMenu(menu);

function createMenu(menu) {
    const marcup = menu.map(el => marcupFunc(el)).join('')
    menuList.insertAdjacentHTML('beforeend', marcup)
}

function startPage() {

    themSwitcher.checked = JSON.parse(switcherPositiomFromLS);

    if (!themSwitcher.checked) {
        body.classList.remove(Theme.DARK)
        body.classList.add(Theme.LIGHT);

    } else if (themSwitcher.checked) {
        body.classList.remove(Theme.LIGHT)
        body.classList.add(Theme.DARK);
    }

}