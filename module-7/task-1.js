const categories = document.querySelector('#categories');
const childrenItems = categories.children
const item = document.querySelectorAll('.item')

console.log(`в списке ${childrenItems.length} категории`)

function h2(arr) {

    for (let key of arr) {

        for (let children of key.children) {

            if (children.tagName === 'H2') {
                console.log(`категория ${children.textContent}`)
            } else if (children.tagName === 'UL') {
                console.log(`количество элементов ${children.children.length}`)
            }
        }

    }
}

h2(item)