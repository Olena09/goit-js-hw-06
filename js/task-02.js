const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newList = document.querySelector('#ingredients');

const ingredientItems = function (array) {
  return array.map(ingredient => {
    const newItem = document.createElement("li");
    newItem.textContent = ingredient;
    newItem.classList.add("item");
    return newItem;
  })
};

const items = ingredientItems(ingredients);
newList.append(...items);
