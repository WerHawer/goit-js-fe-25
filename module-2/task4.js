'use strict';

alert(`Выполняется задание №4 укорачиваем строки. Результат в консоле`);

const formatString = string => string.length > 40 ? string = string.slice(0, 38) + '...' : string;


console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вернется форматированная строка
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка
console.log(formatString('Curabitur ligula sapien.'));