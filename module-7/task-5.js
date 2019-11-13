const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', showInput)

function showInput() {

    output.textContent = input.value;

    if (!input.value) {
        output.textContent = 'незнакомец';
    }
}