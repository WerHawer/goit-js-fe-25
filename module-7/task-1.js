const categories = document.querySelector('#categories');
const childrenItems = categories.children;
const item = document.querySelectorAll('.item');
const itemH2 = document.querySelectorAll('.item h2');




console.log(`в списке ${childrenItems.length} категории`);

itemH2.forEach(h2 => {
    const itemH2Li = h2.nextElementSibling.children;
    console.log(h2.textContent);
    console.log(`кол-во элементов: ${itemH2Li.length}`);
});