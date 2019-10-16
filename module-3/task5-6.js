'use strict'

alert('Выполняется задание №5. Фильтрация по ключу. Результат в коноле.');

// TASK-5

console.log('TASK-5')

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = (arr, prop) => {
    const finalArr = [];
    for (let i = 0; i < arr.length; i += 1) {

        let product = arr[i][prop];

        if (prop in arr[i]) {
            finalArr.push(product);
        }
    }
    return finalArr;
}

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []

// TASK-6
alert('Выполняется задание №6. Сумма заказа по категории. Результат в коноле.');

console.log('TASK-6')

const calculateTotalPrice = (arr, productName) => {
    let totalCost;

    for (let i = 0; i < arr.length; i += 1) {

        if (productName === arr[i].name) {
            totalCost = arr[i].price * arr[i].quantity;

        }
    }
    return totalCost;
}

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800