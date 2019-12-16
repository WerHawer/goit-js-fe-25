'use strict'

const refs = {
    namesInput: document.querySelector('.guest_list'),
    santaOutput: document.querySelector('.secret_santa__names'),
    presenterOutput: document.querySelector('.for_whoom__names'),
    shakeBtn: document.querySelector('.guest_btn'),
}

const shaker = () => {

    const namesList = refs.namesInput.value
        .split(',')
        .map(el => el.trim());

    if (namesList.length === 1) {
        alert('Напишите список хотя бы из 2-х человек')
        return
    }

    const secondArr = createSecondArr(namesList);

    marcupToPage(refs.santaOutput, namesList);
    marcupToPage(refs.presenterOutput, secondArr);

}

const forEnter = (e) => {
    if (e.code !== 'Enter') {
        return
    }

    shaker();
}

function createSecondArr(arr) {

    let mixedArr;

    do {

        mixedArr = [...arr]
            .sort(() => Math.random() - 0.5)
            .map((el, i) => arr.indexOf(el) !== i ? el : undefined);

    } while (mixedArr.includes(undefined));

    return mixedArr
}

function createMarcup(str, counter) {
    return `<span>${counter+1}. ${str}</span>`
}

function marcupToPage(place, arr) {
    place.innerHTML = '';
    const str = arr.map((el, i) => createMarcup(el, i)).join('');
    place.insertAdjacentHTML('beforeend', str)
}

refs.shakeBtn.addEventListener('click', shaker);
window.addEventListener('keydown', forEnter);