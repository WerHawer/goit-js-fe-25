'use strict'

// ЗАДАНИЕ 5

alert('Выполняется задание №5. Доставляем в Китай, Чили, Австралию, Индию, на Ямайку');


let country = prompt('Вкакую страну надо доставить?', '');
let price;
let finalName;
let checkedCounry = country.toLowerCase();
switch (checkedCounry) {
    case 'китай':
        price = 100;
        finalName = `${checkedCounry[0].toUpperCase()}${checkedCounry.slice(1)}`;
        alert(`Доставка в ${finalName} будет стоить ${price} кредитов`);
        break;
    case 'чили':
        price = 250;
        finalName = `${checkedCounry[0].toUpperCase()}${checkedCounry.slice(1)}`;
        alert(`Доставка в ${finalName} будет стоить ${price} кредитов`);
        break;
    case 'австралия':
        price = 170;
        finalName = `${checkedCounry[0].toUpperCase()}${checkedCounry.slice(1, -1)}ю`;
        alert(`Доставка в ${finalName} будет стоить ${price} кредитов`);
        break;
    case 'индия':
        price = 80;
        finalName = `${checkedCounry[0].toUpperCase()}${checkedCounry.slice(1, -1)}ю`;
        alert(`Доставка в ${finalName} будет стоить ${price} кредитов`);
        break;
    case 'ямайка':
        price = 120;
        finalName = `${checkedCounry[0].toUpperCase()}${checkedCounry.slice(1, -1)}у`;
        alert(`Доставка на ${finalName} будет стоить ${price} кредитов`);
        break;
    default:
        alert('В Вашей стране доставка не доступна.');
}