const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

ingredients.map((item) => {
  const liElem = document.createElement("li");
  liElem.textContent = item;
  fragment.appendChild(liElem);
});

list.appendChild(fragment);
