'use strict';

alert(`Выполняется задание №7 Добавление уникального валидного логина в масив. Результат в консоле`);

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let userName = prompt(`введите логин`);

const isLoginValid = login => (login.length >= 4 && login.length < 16) ? login.length : !login.length;

const isLoginUnique = (arr, login) => !arr.includes(login);


const addLogin = function(arr, login) {

    const validator = isLoginValid(login);
    const unicLogin = isLoginUnique(arr, login);


    if (!validator) {
        alert(`error! Login must be 4-16 symbols`);

    } else if (!unicLogin) {
        alert(`this login alredy use!`);

    } else {
        logins.push(login);
        alert(`login created sucsessfull`);
    }

};

addLogin(logins, userName);

console.log(logins);