const list = document.getElementById("categories");

const listItems = list.children;
console.log(`Number of categories: ${listItems.length}`);

const result = Array.from(listItems).map((item) =>
  console.log(
    `Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.children.length}`
  )
);
