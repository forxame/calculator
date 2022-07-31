const numbers = document.querySelectorAll("[data-number]");
const operations = document.querySelectorAll("[data-operation]");
const equalBtn = document.getElementById("equal");
const equalText = document.getElementById("equalText");
const num1Text = document.getElementById("num1");
const operationText = document.getElementById("operation");
const num2Text = document.getElementById("num2");
const resultText = document.getElementById("result");
const clearBtn = document.getElementById("clear");
const screen = document.getElementById("screen");
const plusMinusBtn = document.getElementById("plus-minus");
const percentageBtn = document.getElementById("percentage");
let num1 = "";
let num2 = "";
let operation = "";
let result;
let operationCount = 0;

numbers.forEach(num => num.addEventListener("click", () => {
    if (operation.length == 0) {       
        num1Text.textContent += num.getAttribute("data-number");
        num1 = parseFloat(num1Text.textContent);
    }
    
    if (operation.length > 0) {        
        num2Text.textContent += num.getAttribute("data-number");
        num2 = parseFloat(num2Text.textContent);
    }
    
}))

operations.forEach(opt => opt.addEventListener("click", () => {
    if (operationCount > 0) {
        clear();
        num1 = result;
        num1Text.textContent = result;
    }
    operationText.textContent = opt.getAttribute("data-operation");
    operation = opt.getAttribute("data-operation");
}))

equalBtn.addEventListener("click", () => {
    operationCount++;
    equalText.textContent = "=";
    result = operate(num1, num2, operation);
    resultText.textContent = result;
})

plusMinusBtn.addEventListener("click", () => {
        num1 = -num1;
        num1Text.textContent = num1;
});

percentageBtn.addEventListener("click", () => {
   num1 /= 100;
   num1Text.textContent = num1;
})

function clear() {
    num1 = "";
    num1Text.textContent = "";
    num2 = "";
    num2Text.textContent = "";
    operation = "";
    operationText.textContent = "";
    equalText.textContent = "";
    resultText.textContent = "";
}

clearBtn.addEventListener("click", () => {
    clear();
    operationCount = 0;
    result = 0;
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operation) {
    if (operation === "+") {
        return add(a, b);
    } else if (operation === "-") {
        return subtract(a, b);
    }  else if (operation === "×") {
        return multiply(a, b);
    }  else if (operation === "/") {
        return divide(a, b);
    }
}