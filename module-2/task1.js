'use strict';

alert(`Выполняется задание №1 - вывод элементов массива в консоль. Результат в консоле.`);

const names = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// const logItems = function(arr) {
//     for (let i = 0; i < arr.length; i += 1) {
//         console.log(`${i + 1}: ${arr[i]}`);
//     }
// };

const logItems = (arr) => arr.forEach(element => console.log(`${arr.indexOf(element)+1}: ${element}`));

logItems(names);
logItems(numbers);