var operation = {
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        if (a !== 0 && b === 0) {
            return 'You tryna break me?';
        } else return a / b;
    },
    add: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    calculate: false,
    equals: function () {
        this.calculate = false;
    }
};

function operatorr(a, b, operate) {
    var c = operation.operate(a, b);
    return c;
};


const container = document.querySelector(".button-container");
container.addEventListener("click", function (e) {
    const display = document.getElementById("display");
    console.log(e.target.value);
    display.appendChild(document.createTextNode(e.target.value));
});