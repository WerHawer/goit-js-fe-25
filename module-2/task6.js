'use strict';

alert(`Выполняется задание №6 Заполняем массив и суммируем его. Результат в консоле`);


let input;
const numbers = [];
let total = 0;

const addToArr = function() {
    while (input !== null) {
        input = prompt('введите число');
        numbers.push(input);
    }
    if (input === null) {
        numbers.pop();
    }
};

const summArr = function(arr) {
    for (let elem of arr) {
        total += +elem;
    }
    return total;
};


addToArr();
console.log(numbers);
console.log(`общая сумма чисел равна ${summArr(numbers)}`);