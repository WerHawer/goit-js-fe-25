'use strict'

alert('Выполняется задание №1. Результат в коноле.');


const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy';
user.hobby = 'javascrip';
user.premium = false;

let keysUser = Object.keys(user);
for (let key of keysUser) {
    console.log(`${key}: ${user[key]}`)
}

// const { name, age, hobby, premium } = user;

// console.log(`name: ${name}`)