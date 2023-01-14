const input = document.getElementById("name-input");
const greet = document.getElementById("name-output");

input.addEventListener("input", () => {
  input.value !== ""
    ? (greet.textContent = input.value)
    : (greet.textContent = "Anonymous");
});
