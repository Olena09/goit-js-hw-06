let counterValue = 0;
const valueSpan = document.querySelector('#value');
const incrementElem = document.querySelector('button[data-action="increment"]');
const decrementElem = document.querySelector('button[data-action="decrement"]');

const countDecrement = function () {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
};

const countIncrement = function () {
  counterValue += 1;
  valueSpan.textContent = counterValue;
};

decrementElem.addEventListener("click", countDecrement);
incrementElem.addEventListener("click", countIncrement);
