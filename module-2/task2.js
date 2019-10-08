'use strict';

alert(`Выполняется задание №2 расчет стоимости гравировки. Результат в консоле`);

const calculateEngravingPrice = function(frase, pricePerWord = 10) {
    const arrFrase = frase.split(' ');
    const totalPrice = arrFrase.length * pricePerWord;
    return totalPrice;
};
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20));