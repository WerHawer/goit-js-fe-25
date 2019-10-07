// ЗАДАНИЕ 2

alert('Выполняется задание №2. (количество товаров в консоле)');
const total = 100;
const ordered = 30;

console.log(`TASK2\ntotal = ${total}\norder = ${ordered}`)
if (ordered > total) {
    alert('На складе не достаточно товаров');
} else
    alert('Заказ оформлен, с вами свяжется менеджер');