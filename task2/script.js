//запись без объявления константы
document.querySelector("#consoleLog").addEventListener("click", (event) => {
  alert("Метод для вывода сообщения в веб-консоль");
});

//запись с константой и стрелочной функцией
const methodAlert = document.querySelector("#method-alert");
methodAlert.addEventListener("click", (event) => {
  alert("Метод для вывода диалогового окна с кнопкой ОК");
});

//запись с константой и функцией
const methodPrompt = document.querySelector("#method-prompt");
methodPrompt.addEventListener("click", function () {
  alert("Метод для вывода диалогового окна с запросом на ввод текста");
});
