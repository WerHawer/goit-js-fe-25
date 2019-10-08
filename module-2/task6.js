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
    if (input === null) { //can work without this 'if', but last elem of array will be 'null'
        numbers.pop();
    }
};

const summArr = function(arr) {
    if (arr.length === 0) {
        alert(`Массив пустой, надо было ввести хоть одну цифру`);
    } else {
        for (let elem of arr) {
            total += +elem;
        }
        console.log(`щбщая сумма всех чисел: ${total}`);
    }

};


addToArr();
summArr(numbers);
console.log(numbers);