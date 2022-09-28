var operation = {
    multiply: (a, b) => (+a * +b),
    divide: (a, b) => (+a !== 0 && +b === 0) ? 'Don\'t do that' : (+a / +b),
    add: (a, b) => (+a + +b),
    minus: (a, b) => (+a - +b),
};

var a;
var b;
var operator;
var key = ''

const container = document.querySelector(".button-container");
container.addEventListener("click", function (e) {
    const display = document.getElementById("display");
    if (e.target.value) {
        display.appendChild(document.createTextNode(e.target.value));
    } else if ((e.target.id !== 'equals') && (e.target.id !== 'delete')) {
        a = display.innerHTML;
        operator = e.target.id;
        display.innerHTML = '';
    } else if (e.target.id === 'delete') {
        display.innerHTML = display.innerHTML.slice(0, -1);
    } else {
        b = display.innerHTML;
        display.innerHTML = '';
        display.innerHTML = operation[`${operator}`](a, b);
        console.log(innerHTML);
    }
});

window.addEventListener("keydown", function (e) {
    key = document.querySelector(`button[data-key="${e.key}"]`);
    if (key.id !== "delete") {
        key.classList.add("button-pressed");
    } else {
        key.classList.add("top-pressed");
    }
    const display = document.getElementById("display");
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
        console.log(operator);
        display.innerHTML = operation[`${operator}`](a, b);
        console.log(innerHTML);
    }
});

window.addEventListener("keyup", function (e) {
    key = document.querySelector(`button[data-key="${e.key}"]`);
    key.classList.remove("button-pressed");
    key.classList.remove("top-pressed");
});
