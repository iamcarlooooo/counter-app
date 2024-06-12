const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.opacity = 0.5;
    setTimeout(() => {
      button.style.opacity = 1;
    }, 100);
  });
});

let result = document.querySelector("h1");
const plusOne = document.getElementById("plus-one");
const plusTen = document.getElementById("plus-ten");
const plusHundred = document.getElementById("plus-hundred");
const plusThousand = document.getElementById("plus-thousand");


plusOne.addEventListener("click", () => {
        result.innerText += "+1"
        result.textContent = eval(result.textContent)
    });


plusTen.addEventListener("click", () => {
    result.innerText += "+10"
    result.textContent = eval(result.textContent)
});

plusHundred.addEventListener("click", () => {
    result.innerText += "+100"
    result.textContent = eval(result.textContent)
});

plusThousand.addEventListener("click", () => {
    result.innerText += "+1000"
    result.textContent = eval(result.textContent)
});