'use strict'

alert('выполняется задание №1. Логин майл. Выводим в консоль')

const Account = function(login, email) {
    this.login = login;
    this.email = email;
}

Account.prototype.getInfo = function() {
    console.log(`login: ${this.login} email: ${this.email}`);

}

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo(); // Login: Poly, Email: poly@mail.com