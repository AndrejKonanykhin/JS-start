const textField = document.querySelector("input");
const duplicateField = document.querySelector("#duplicateField");
const button = document.querySelector("button");

//копирование текста из input в дополнительный блок
textField.addEventListener("input", (event) => {
  duplicateField.textContent = textField.value;
});

//обработка клика именно левой кнопкой мыши
button.addEventListener("mousedown", (event) => {
  event.which === 1;
  event.preventDefault();
  console.log(textField.value);
  textField.value = "";
  duplicateField.textContent = "";
});

//обработка клика мыши по кнопке тоже работает
//button.addEventListener("click", (event) => {
//  event.preventDefault();
//  console.log(textField.value);
//  textField.value = "";
//  duplicateField.textContent = "";
//});
