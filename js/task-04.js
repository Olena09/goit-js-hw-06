const counter = document.getElementById("counter");
const valueSpan = document.getElementById("value");

let counterValue = 0;

function newCounter() {
    valueSpan.textContent = counterValue;
}

function newCounter() {
    valueSpan.textContent = counterValue;
}

counter.addEventListener("click", function (event) {
    if (event.target.dataset.action === "decrement") {
    
      counterValue -= 1;
    } else if (event.target.dataset.action === "increment") {
    
      counterValue += 1;
    }
    newCounter();
});
newCounter();
