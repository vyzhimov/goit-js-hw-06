const input = document.getElementById("font-size-control");
const span = document.getElementById("text");
span.style.fontSize = `${input.value}px`;

input.addEventListener("input", () => {
  span.style.fontSize = `${input.value}px`;
});
