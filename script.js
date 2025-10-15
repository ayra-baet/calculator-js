const inputDisplay = document.getElementById("input-display");
const calcBtns = document.querySelectorAll(".calc-btn");

calcBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    inputDisplay.style.color = "hsl(0, 0%, 100%)";
    inputDisplay.value += btn.textContent;
  });
});

document.getElementById("clear-btn").addEventListener("click", () => {
  inputDisplay.value = "";
});

document.getElementById("equals-btn").addEventListener("click", () => {
  try {
    inputDisplay.style.color = "hsl(0, 0%, 100%)";
    inputDisplay.value = eval(inputDisplay.value);
  } catch (error) {
    inputDisplay.style.color = "hsl(341, 80%, 52%)";
    inputDisplay.value = "Error";
  }
});
