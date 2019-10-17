'use strict';

alert(`Выполняется задание №6 Заполняем массив и суммируем его. Результат в консоле`);


let input;
const numbers = [];
let total = 0;

const addToArr = function() {
    while (input !== null) {

        input = prompt('введите число');

        if (isFinite(input) !== true) {
            alert(`введите ТОЛЬКО число`);

        } else if (input === null || input === '') {
            continue;

        } else {
            numbers.push(input);
        }
    }
};

const summArr = function(arr) {
    if (arr.length === 0) {
        alert(`Массив пустой, надо было ввести хоть одну цифру`);

    } else {
        for (let elem of arr) {
            total += +elem;
        }

        console.log(`общая сумма всех чисел: ${total}`);
    }

};


addToArr();
summArr(numbers);
console.log(numbers);