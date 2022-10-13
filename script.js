const currentVal = document.querySelector("#current-value");

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");


zero.addEventListener("click", () => {
    currentVal.textContent += 0;
});
one.addEventListener("click", () => {
    currentVal.textContent += 1;
});
two.addEventListener("click", () => {
    currentVal.textContent += 2;
});
three.addEventListener("click", () => {
    currentVal.textContent += 3;
});
four.addEventListener("click", () => {
    currentVal.textContent += 4;
});
five.addEventListener("click", () => {
    currentVal.textContent += 5;
});
six.addEventListener("click", () => {
    currentVal.textContent += 6;
});
seven.addEventListener("click", () => {
    currentVal.textContent += 7;
});
eight.addEventListener("click", () => {
    currentVal.textContent += 8;
});
nine.addEventListener("click", () => {
    currentVal.textContent += 9;
});

function operate(num1, num2, operator){
    return operator(num1, num2);
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}