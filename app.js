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
let num1 = "";
let num2 = "";
let operation = "";

numbers.forEach(num => num.addEventListener("click", () => {
    if (operation.length == 0) {       
        num1Text.textContent += num.getAttribute("data-number");
        num1 += num.getAttribute("data-number");
    }
    
    if (operation.length > 0) {        
        num2Text.textContent += num.getAttribute("data-number");
        num2 += num.getAttribute("data-number");
    }
    
}))

operations.forEach(opt => opt.addEventListener("click", () => {
    operationText.textContent = opt.getAttribute("data-operation");
    operation = opt.getAttribute("data-operation");
}))

equalBtn.addEventListener("click", () => {
    equalText.textContent = "=";
    resultText.textContent = operate(parseFloat(num1), parseFloat(num2), operation);
})

clearBtn.addEventListener("click", () => {
    num1 = "";
    num1Text.textContent = "";
    num2 = "";
    num2Text.textContent = "";
    operation = "";
    operationText.textContent = "";
    equalText.textContent = "";
    resultText.textContent = "";
})

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