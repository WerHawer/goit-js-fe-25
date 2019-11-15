const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ul = document.querySelector('#ingredients');

function createList(elem) {
    const list = document.createElement('li');
    list.textContent = elem;
    ul.append(list);
}

ingredients.reduce((acc, el) => acc + createList(el), '');