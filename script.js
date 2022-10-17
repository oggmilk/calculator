//adds on-screen button link to HTML
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

//number pad functionality
document.addEventListener("keydown", (event) => {
  switch(event.key){
    case "0":
      updateDisplay(0);
      break;
    case "1":
      updateDisplay(1);
      break;
    case "2":
      updateDisplay(2);
      break;
    case "3":
      updateDisplay(3);
      break;
    case "4":
      updateDisplay(4);
      break;
    case "5":
      updateDisplay(5);
      break;
    case "6":
      updateDisplay(6);
      break;
    case "7":
      updateDisplay(7);
      break;
    case "8":
      updateDisplay(8);
      break;
    case "9":
      updateDisplay(9);
      break;
    case "+":
      quickEval(add);
      break;
    case "-":
      quickEval(subtract);
      break;
    case "*":
      quickEval(multiply);
      break;
    case "/":
      quickEval(divide);
      break;
    case "Enter":
      evaluation(operator);
      break;
    case ".":
      addDecimal();
  }
})

//on-screen button click functionality
zero.addEventListener("click", () => {
    updateDisplay(0);
})
one.addEventListener("click", () => {
    updateDisplay(1);
})
two.addEventListener("click", () => {
    updateDisplay(2);
})
three.addEventListener("click", () => {
    updateDisplay(3);
})
four.addEventListener("click", () => {
    updateDisplay(4);
})
five.addEventListener("click", () => {
    updateDisplay(5);
})
six.addEventListener("click", () => {
    updateDisplay(6);
})
seven.addEventListener("click", () => {
    updateDisplay(7);
})
eight.addEventListener("click", () => {
    updateDisplay(8);
})
nine.addEventListener("click", () => {
    updateDisplay(9);
})
addition.addEventListener("click", () => {
  quickEval(add)
})
subtraction.addEventListener("click", () => {
  quickEval(subtract)
})
multiplication.addEventListener("click", () => {
  quickEval(multiply)
})
division.addEventListener("click", () => {
  quickEval(divide)
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
    addDecimal();
})
percentage.addEventListener("click", () => {
    currentVal.textContent = parseFloat(currentVal.textContent) * 0.01;
})

let currentVal = document.querySelector("#current-value");
let previousVal = document.querySelector("#previous-value");
let intermediateVal;

//switches out previous variable for new variable
function swap(){
  intermediateVal = currentVal.textContent;
  currentVal.textContent = "";
  previousVal.textContent = intermediateVal;
  previousVal.style.display = "block";
}

//updates current value when new numbers inputed
function updateDisplay(n){
  currentVal.textContent += n;
  previousVal.style.display = "none";
}

//evaluates function if an operator is pressed before evaluation button
function quickEval(oper){
  if(previousVal.textContent != ""){
    evaluation(operator);
  }
  swap();
  operator = oper;
}

function addDecimal(){
  if(currentVal.textContent.indexOf(".") < 1){
        currentVal.textContent += ".";
        previousVal.style.display = "none";
    }
}

//evaluates operation between previous value and currently entered value
function evaluation(operator){
  if(previousVal.textContent == ""){
    previousVal.textContent = intermediateVal;
  }
  currentVal.textContent = Math.round(operate(parseFloat(previousVal.textContent), parseFloat(currentVal.textContent), operator) * 10000000) / 10000000;
  previousVal.textContent = ""; 
}

//math functionality for evaluations
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