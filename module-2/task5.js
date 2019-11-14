'use strict';

alert(`Выполняется задание №5 проверяем наличие ключевых слов. Результат в консоле`);

const checkForSpam = str => {

    str = str.toLowerCase();

    if (str.includes('spam') || str.includes('sale')) {
        return str.includes('spam') || str.includes('sale');
    } else return str.includes('spam') || str.includes('sale');

};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true