const input = document.querySelector('#validation-input');

input.addEventListener('blur', checkLength);

function checkLength() {

    if (input.value.length != input.dataset.length) {
        input.classList.add('invalid')
    } else if (input.classList.contains('invalid')) {
        input.classList.remove('invalid');
    }

    input.classList.add('valid')
}