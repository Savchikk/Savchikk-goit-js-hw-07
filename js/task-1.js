const categories = document.querySelector("#categories");
const item = document.querySelectorAll(".item");
console.log("Number of categories:", item.length);
item.forEach((elem) => {
  const h2 = elem.querySelector("h2").textContent;
  const elements = elem.lastElementChild.children.length;
  console.log(`Category: ${h2}`);
  console.log(`Elements: ${elements}`);
});
