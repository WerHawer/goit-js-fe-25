'use strict'

// ЗАДАЧА 6

alert('Выполняется задание №6. сумма чисел');


let input;
let total = 0;
do {
    input = prompt('введите любое число', '');
    if (isFinite(input) !== true) {
        alert('Введено не число. Повторите ввод.');
    } else {
        total += +input;
    };
} while (input !== null);
if (input === null) {
    alert(`Общая сумма чисел = ${total}`);
};