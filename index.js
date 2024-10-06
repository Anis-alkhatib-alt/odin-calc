const number = document.querySelectorAll("[data-number]");
const operantion = document.querySelectorAll("[data-operation]");
const clear = document.querySelector("[data-clear]");
const del = document.querySelector("[data-delete]");
const equals = document.querySelector("[data-equals]");
const result = document.querySelector("[data-result]");
const calculation = document.querySelector("[data-calculation]");

function appendToDisplay(input) {
  calculation.innerText += input;
}

function clearContent() {
  calculation.innerText = "";
  result.innerText = "";
}

function deleteLast() {
  let txt = calculation.innerText;
  let arr = txt.split("");
  arr.pop();
  clearContent();
  calculation.innerText += arr.join("");
}

function calculate() {
  result.innerText = "";
  try {
    result.append(eval(calculation.innerText));
  } catch (error) {
    result.append("");
  }
}
