const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const createLi = (array, node) => {
  array.map((item) => {
    const liItem = document.createElement("li");
    liItem.textContent = item;
    node.appendChild(liItem);
  });
};

createLi(ingredients, list);
