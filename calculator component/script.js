const calculator = document.querySelectorAll(".cmp-calculator__block");
const total = document.querySelector(".cmp-calculator__output__amount p");
const totalAmount = Number(total.textContent);

let firstValue = document.getElementById("first-value");
let secondValue = document.getElementById("second-value");
let thirdValue = document.getElementById("third-value");
let forthValue = document.getElementById("forth-value");

let finalValue = 0;

function calculateFinalAmount() {
 finalValue =
  3*Number(firstValue.value) +
  2*Number(secondValue.value) +
  2*Number(thirdValue.value) +
  1*Number(forthValue.value);

  total.textContent = finalValue;
}


window.addEventListener("change", () => {
  calculateFinalAmount()
});
