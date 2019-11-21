'use strict'

alert('Выполняется задание №4. Сумма всех зарплат. Результат в коноле.');


// const countTotalSalary = (employees) => {
//     let totalSalary = 0;

//     const arrSalary = Object.values(employees);
//     for (let salary of arrSalary) {
//         totalSalary += salary;
//     }
//     return totalSalary;
// }

const countTotalSalary = (employees) => Object.values(employees).reduce((sum, el) => sum + el, 0);


console.log(countTotalSalary({})); // 0

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
); // 330

console.log(
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    }),
); // 400