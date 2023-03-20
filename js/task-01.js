const allCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategoriesEl.length}\n\n`);

allCategoriesEl.forEach((element) => {
    const quantityOfCategoriesEl = element.querySelector('h2');
    console.log(`Category: ${quantityOfCategoriesEl.textContent}`);

    const quantityOfEl = element.querySelector('ul');
    console.log(`Elements: ${quantityOfEl.children.length}\n\n`);
});