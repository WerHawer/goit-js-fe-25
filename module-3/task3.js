'use strict'

alert('Выполняется задание №3. Лучший работник. Результат в коноле.');

const findBestEmployee = (employees) => {
    let bestEmployee;
    let maxTasks = 0;
    const arrEmployees = Object.keys(employees);
    for (let employee of arrEmployees) {

        if (maxTasks < employees[employee]) {
            maxTasks = employees[employee];
            bestEmployee = employee;
        }

    }
    return bestEmployee;
}

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux