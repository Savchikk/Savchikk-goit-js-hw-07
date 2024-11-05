function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boDy = document.querySelector("body");
const diV = document.querySelector(".change-color");
const btn = document.querySelector("color");

diV.addEventListener("click", (event) => {
  const getColor = getRandomHexColor();
  diV.textContent = getColor;
  boDy.style.backgroundColor = getColor;
});
