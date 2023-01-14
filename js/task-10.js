function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  destroyBoxes();
  amount = input.value;
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const divItem = document.createElement("div");
    divItem.style.backgroundColor = getRandomHexColor();
    divItem.style.width = `${boxSize}px`;
    divItem.style.height = `${boxSize}px`;
    boxSize += 10;
    divBoxes.appendChild(divItem);
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

const divBoxes = document.getElementById("boxes");
const controls = document.getElementById("controls");
const input = controls.children[0];
const btnCreate = controls.children[1];
const btnDestroy = controls.children[2];

input.addEventListener("input", () => {
  if (input.value > 100) {
    alert("введіть число від 1 до 100");
    input.value = null;
  }
});
input.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    createBoxes();
  }
});
btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
