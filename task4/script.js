const linkText = document.querySelector("a");
linkText.addEventListener("click", (event) => {
  event.preventDefault();
  linkText.textContent = prompt("Введите новый текст");
});
