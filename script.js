const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
        resultDisplayed = true;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } else if (value === "C") {
      currentInput = "";
      display.value = "";
    } else {
      if (resultDisplayed && !isNaN(value)) {
        currentInput = value;
        resultDisplayed = false;
      } else {
        currentInput += value;
      }
      display.value = currentInput;
    }
  });
});
