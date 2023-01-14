const input = document.getElementById("name-input");
const greet = document.getElementById("name-output");

input.addEventListener("change", () => {
  input.value !== ""
    ? (greet.textContent = input.value)
    : (greet.textContent = "Anonymous");
});
