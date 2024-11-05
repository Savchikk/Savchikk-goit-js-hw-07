const input = document.querySelector("#name-input");
const span = document.querySelector("span#name-output");

input.addEventListener("input", (event) => {
  if (input.value === "" || input.value === " ".repeat(input.value.lenght)) {
    span.textContent = "Anonymous";
  } else {
    span.textContent = event.currentTarget.value.trim();
  }
});
