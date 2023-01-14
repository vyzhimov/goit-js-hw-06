const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const liItems = [];
ingredients.map((item) => {
  const liElem = document.createElement("li");
  liElem.textContent = item;
  liItems.push(liElem);
});

list.append(...liItems);
