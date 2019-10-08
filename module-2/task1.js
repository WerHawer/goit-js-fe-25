'use strict';
alert(`Выполняется задание №1. Результат в консоле.`);
const names = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let logItems = function(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        console.log(`#${i + 1}: ${arr[i]}`);
    }
};
logItems(names);
logItems(numbers);