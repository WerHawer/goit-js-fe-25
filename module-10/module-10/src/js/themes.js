'use strict'

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const themSwitcher = document.querySelector('.js-switch-input');
const body = document.querySelector('body');
export { themSwitcher, body, Theme };

themSwitcher.addEventListener('change', switchTheme)

function switchTheme() {

    if (!themSwitcher.checked) {
        body.classList.remove(Theme.DARK)
        body.classList.add(Theme.LIGHT);

    } else if (themSwitcher.checked) {
        body.classList.remove(Theme.LIGHT)
        body.classList.add(Theme.DARK);
    }

    localStorage.setItem('themSwitcher', JSON.stringify(themSwitcher.checked));

}

// console.log(body[class]);