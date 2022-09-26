var operation = {
    multiply: function (a, b) {
        return (+a * +b);
    },
    divide: function (a, b) {
        if (a !== 0 && b === 0) {
            return 'You tryna break me?';
        } else return (+a / +b);
    },
    add: function (a, b) {
        return (+a + +b);
    },
    minus: function (a, b) {
        return (+a - +b);
    },
};

let a = 0;
let operator = '';
const container = document.querySelector(".button-container");
container.addEventListener("click", function (e) {
    const display = document.getElementById("display");
    if (e.target.value) {
        display.appendChild(document.createTextNode(e.target.value));
    } else if (e.target.id !== 'equals') {
        a = display.innerHTML;
        operator = e.target.id;
        display.innerHTML = '';
    } else {
        const b = display.innerHTML;
        display.innerHTML = '';
        display.innerHTML = operation[`${operator}`](a, b);
    }
});