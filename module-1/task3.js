// ЗАДАНИЕ 3

alert('Выполняется задание №3. Правильный пароль: jqueryismyjam');
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let str = prompt('введите пароль', '');
if (str === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else if (str === null) {
    message = 'Отменено пользователем!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}
alert(message);