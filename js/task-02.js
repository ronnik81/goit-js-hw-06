const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(option => {
  const element = document.createElement('li');
  element.textContent = option;
  element.classList.add('item');
  return element;
});

const list = document.querySelector('#ingredients');
list.append(...elements);