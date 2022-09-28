const operation = {
    multiply: (a, b) => (+a * +b),
    divide: (a, b) => (+a !== 0 && +b === 0) ? 'Don\'t do that' : (+a / +b),
    add: (a, b) => (+a + +b),
    minus: (a, b) => (+a - +b),
};

let a;
let b;
let operator;
let key = '';

const keys = (e) => document.querySelector(`button[data-key="${e.key}"]`);
const buttonPress = (key, display) => {
    if (key.value) {
        display.appendChild(document.createTextNode(key.value));
    } else if ((key.id !== 'equals') && (key.id !== 'delete')) {
        a = display.innerHTML;
        operator = key.id;
        display.innerHTML = '';
    } else if (key.id === 'delete') {
        display.innerHTML = display.innerHTML.slice(0, -1);
    } else {
        b = display.innerHTML;
        display.innerHTML = '';
        display.innerHTML = operation[`${operator}`](a, b);
    }
};

const container = document.querySelector(".button-container");
container.addEventListener("click", (e) => {
    const display = document.getElementById("display");
    key = e.target;
    buttonPress(key, display);
});

window.addEventListener("keydown", (e) => {
    key = keys(e);
    (key.id !== "delete") ? key.classList.add("button-pressed") : key.classList.add("top-pressed");
    const display = document.getElementById("display");
    buttonPress(key, display);
});

window.addEventListener("keyup", (e) => {
    key = keys(e);
    key.classList.remove("button-pressed");
    key.classList.remove("top-pressed");
});
