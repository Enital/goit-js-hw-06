const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const listOfElements = ingredients.map((element) => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = element;
  ingredientEl.classList.add('item');
  return ingredientEl;
});

const ingredientsListEl = document.querySelector('#ingredients');
ingredientsListEl.append(...listOfElements);