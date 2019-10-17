'use strict';

alert(`Выполняется задание №7 Добавление уникального валидного логина в масив. Результат в консоле`);

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let userName = prompt(`введите логин`);

const isLoginValid = function(login) {

    if (login.length >= 4 && login.length < 16) {
        return true;

    } else
        return false;
};

const isLoginUnique = function(arr, login) {

    if (arr.includes(login)) {
        return false;

    } else
        return true;
};

const addLogin = function(arr, login) {

    const validator = isLoginValid(login);
    const unicLogin = isLoginUnique(arr, login);

    validator;
    unicLogin;

    if (validator === false) {
        alert(`error! Login must be 4-16 symbols`);

    } else if (unicLogin === false) {
        alert(`this login alredy use!`);

    } else {
        logins.push(login);
        alert(`login created sucsessfull`);
    }
};

addLogin(logins, userName);

console.log(logins);