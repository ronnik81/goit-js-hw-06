'use strict';

const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(value => {
    const titleEl = value.querySelector('h2');
    const elementEl = value.querySelectorAll('li');
    console.log(`Category: ${titleEl.textContent} \nElements: ${elementEl.length}`);
})