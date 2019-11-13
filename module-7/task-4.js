const buttonIncremetn = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const counter = document.querySelector('#value');

let counterValue = 0;

buttonIncremetn.addEventListener('click', valueIncrement);
buttonDecrement.addEventListener('click', valueDecrement);

function valueIncrement() {
    counterValue += 1;
    counter.textContent = counterValue;

}

function valueDecrement() {
    counterValue -= 1;
    counter.textContent = counterValue;

}