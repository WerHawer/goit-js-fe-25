'use strict'

const refs = {
    namesInput: document.querySelector('.guest_list'),
    santaOutput: document.querySelector('.secret_santa__names'),
    presenterOutput: document.querySelector('.for_whoom__names'),
    shakeBtn: document.querySelector('.guest_btn'),
}


const result = {}

function doIt() {
    const source = refs.namesInput.value
        .split(',')
        .map(el => el.trim());

    if (source.length === 1) {
        alert('Напишите список хотя бы из 2-х человек')
        return
    }

    let shaked = [...source]

    source.forEach((item, index) => {

        const nextItem = source[index + 1]

        if (shaked.length === 2 && (shaked.includes(item) || shaked.includes(nextItem))) {
            let resultIndex

            if (shaked.includes(item)) {
                resultIndex = shaked.indexOf(item) === 0 ? 1 : 0
            }

            if (shaked.includes(nextItem)) {
                resultIndex = shaked.indexOf(nextItem) === 0 ? 0 : 1
            }

            const shakedIndex = resultIndex === 0 ? 1 : 0
            result[item] = shaked[resultIndex]
            shaked = [shaked[shakedIndex]]

            return
        }

        const choice = filter(shaked, item)
        const random = getRandom(choice.length)


        result[item] = choice[random]

        shaked = filter(shaked, choice[random])

    })

    const first = Object.keys(result)
    const second = Object.values(result)

    marcupToPage(refs.santaOutput, first);
    marcupToPage(refs.presenterOutput, second);
}


function getRandom(length) {
    return Math.floor(Math.random() * Math.floor(length))
}

function filter(arr, value) {
    return arr.filter(item => item !== value)
}


function createMarcup(str, counter) {
    return `<span>${counter+1}. ${str}</span>`
}

function marcupToPage(place, arr) {
    place.innerHTML = '';
    const str = arr.map((el, i) => createMarcup(el, i)).join('');
    place.insertAdjacentHTML('beforeend', str)
}

refs.shakeBtn.addEventListener('click', doIt);