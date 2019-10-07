// ЗАДАНИЕ 4

alert('Выполняется задание №4. Купи слона... ой, Дроида ;) \nРезультат в консоле');


let credits = 23580;
const prisePerDroid = 3000;
let howMuchDroid = prompt('Сколько дроидов Вы хотели бы купить?', '0');
let totalPrice = howMuchDroid * prisePerDroid;
let leftCredits = credits - totalPrice;
if (howMuchDroid === null) {
    console.log('отменено пользователем');
} else {
    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else if (totalPrice < credits) {
        console.log(`Вы купили ${howMuchDroid} дроидов, на счету осталось ${leftCredits} кредитов`);
    }
};