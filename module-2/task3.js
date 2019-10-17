'use strict';

alert(`Выполняется задание №3 поиск самого длинного слова. Результат в консоле`);

const findLongestWord = function(str) {

    const arrStr = str.split(' ');
    let longestWord = arrStr[0];
    for (let word of arrStr) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'