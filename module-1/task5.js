'use strict'

// ЗАДАНИЕ 5

alert('Выполняется задание №5. Доставляем в Китай, Чили, Австралию, Индию, на Ямайку');


let country = prompt('Вкакую страну надо доставить?', '');
let price = 0;
let finalName;
let counryLowerCase = country.toLowerCase();

// Задаем правила склонения стран
switch (counryLowerCase[counryLowerCase.length - 1]) {
    case 'я':
        finalName = `${counryLowerCase[0].toUpperCase()}${counryLowerCase.slice(1, -1)}ю`;
        break;
    case 'а':
        finalName = `${counryLowerCase[0].toUpperCase()}${counryLowerCase.slice(1, -1)}у`;
        break;
    default:
        finalName = `${counryLowerCase[0].toUpperCase()}${counryLowerCase.slice(1)}`;
}

// Выводим правильное сообщение
function message(finalName, price) {
    alert(`Доставка в ${finalName} будет стоить ${price} кредитов`);
};

switch (counryLowerCase) {
    case 'китай':
        price = 100;
        message(finalName, price);
        break;
    case 'чили':
        price = 250;
        message(finalName, price);
        alert(message);
        break;
    case 'австралия':
        price = 170;
        message(finalName, price);
        break;
    case 'индия':
        price = 80;
        message(finalName, price);
        break;
    case 'ямайка':
        price = 120;
        message(finalName, price);
        break;
    default:
        alert('В Вашей стране доставка не доступна.');
};