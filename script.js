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
const addition = document.querySelector("#add");
const subtraction = document.querySelector("#subtract");
const multiplication = document.querySelector("#multiply");
const division = document.querySelector("#divide");
const evaluate = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const negative = document.querySelector("#negative");
const decimal = document.querySelector("#decimal");
const percentage = document.querySelector("#percent");

zero.addEventListener("click", () => {
    currentVal.textContent += 0;
    previousVal.style.display = "none";
})
one.addEventListener("click", () => {
    currentVal.textContent += 1;
    previousVal.style.display = "none";
})
two.addEventListener("click", () => {
    currentVal.textContent += 2;
    previousVal.style.display = "none";
})
three.addEventListener("click", () => {
    currentVal.textContent += 3;
    previousVal.style.display = "none";
})
four.addEventListener("click", () => {
    currentVal.textContent += 4;
    previousVal.style.display = "none";
})
five.addEventListener("click", () => {
    currentVal.textContent += 5;
    previousVal.style.display = "none";
})
six.addEventListener("click", () => {
    currentVal.textContent += 6;
    previousVal.style.display = "none";
})
seven.addEventListener("click", () => {
    currentVal.textContent += 7;
    previousVal.style.display = "none";
})
eight.addEventListener("click", () => {
    currentVal.textContent += 8;
    previousVal.style.display = "none";
})
nine.addEventListener("click", () => {
    currentVal.textContent += 9;
    previousVal.style.display = "none";
})
addition.addEventListener("click", () => {
  if(previousVal.textContent != ""){
    evaluation(operator);
  }
  swap();
  operator = add;
})
subtraction.addEventListener("click", () => {
  if(previousVal.textContent != ""){
    evaluation(operator);
  }
  swap();
  operator = subtract;
})
multiplication.addEventListener("click", () => {
  if(previousVal.textContent != ""){
    evaluation(operator);
  }
  swap();
  operator = multiply;
})
division.addEventListener("click", () => {
  if(previousVal.textContent != ""){
    evaluation(operator);
  }
  swap();
  operator = divide;
})
evaluate.addEventListener("click", () => {
  evaluation(operator);
})
clear.addEventListener("click", () => {
  previousVal.textContent = "";
  currentVal.textContent = "";
})
negative.addEventListener("click", () => {
    currentVal.textContent = parseFloat(currentVal.textContent) * -1;
})
decimal.addEventListener("click", () => {
    if(currentVal.textContent.indexOf(".") < 1){
        currentVal.textContent += ".";
        previousVal.style.display = "none";
    }
})
percentage.addEventListener("click", () => {
    currentVal.textContent = parseFloat(currentVal.textContent) * 0.01;
})

let currentVal = document.querySelector("#current-value");
let previousVal = document.querySelector("#previous-value");
let intermediateVal;

function swap(){
  intermediateVal = currentVal.textContent;
  currentVal.textContent = "";
  previousVal.textContent = intermediateVal;
  previousVal.style.display = "block";
}

function evaluation(operator){
  if(previousVal.textContent == ""){
    previousVal.textContent = intermediateVal;
  }
  currentVal.textContent = Math.round(operate(parseFloat(previousVal.textContent), parseFloat(currentVal.textContent), operator) * 10000000) / 10000000;
  previousVal.textContent = ""; 
}

function operate(num1, num2, operator) {
  return operator(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}