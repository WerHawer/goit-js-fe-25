const inputNumber = document.querySelector('input[type="number"');
const createBtn = document.querySelector('button[data-action="render"');
const deleteBtn = document.querySelector('button[data-action="destroy"');
const createArea = document.querySelector('#boxes');



deleteBtn.addEventListener('click', deleteBoxes);
createBtn.addEventListener('click', createBoxes);


function createBoxes(amount) {

    amount = inputNumber.value;
    createArea.innerHTML = "";
    if (!inputNumber.value) {
        createArea.innerHTML = "Введите чисто от 1 до 100";
    }

    for (let i = 1; i <= amount; i += 1) {
        let sizeCounter = i * 10;
        let box = document.createElement('div')
        box.classList.add('box');
        box.style.backgroundColor = generateColor();
        box.style.width = sizeCounter + 20 + 'px';
        box.style.height = sizeCounter + 20 + 'px';
        createArea.append(box);
    }



}

function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function deleteBoxes() {
    createArea.innerHTML = '';
}