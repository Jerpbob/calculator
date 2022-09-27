var operation = {
    multiply: function (a, b) {
        return (+a * +b);
    },
    divide: function (a, b) {
        if (+a !== 0 && +b === 0) {
            return 'Don\'t do that';
        } else return (+a / +b);
    },
    add: function (a, b) {
        return (+a + +b);
    },
    minus: function (a, b) {
        return (+a - +b);
    },
};

var a;
var b;
var operator;

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

let key = ''
window.addEventListener("keydown", function (e) {
    console.log(e.key);
    key = document.querySelector(`button[data-key="${e.key}"]`);
    console.log(key);
    console.log(key.id);
    console.log(key.value);
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

