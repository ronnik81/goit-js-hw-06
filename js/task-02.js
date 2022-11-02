const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createItems = [];

ingredients.forEach(element => {
  const createItem = document.createElement('li');
  createItem.classList.add('item');
  createItem.textContent = element;
  createItems.push(createItem);
})

const listEl = document.querySelector('#ingredients');
listEl.append(...createItems);