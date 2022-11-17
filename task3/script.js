const trafficLightEl = document.querySelector("#trafficLight");
const turnOff = document.querySelector("#turnoff");

//сделать зеленым
function makeGreen() {
  trafficLightEl.style.background = "green";
  trafficLightEl.style.boxShadow = "0 0 70px green";
  turnOff.style.top = "40px";
  trafficLightEl.removeEventListener("click", makeGreen);
  trafficLightEl.addEventListener("click", makeYellow);
}
//сделать желтым
function makeYellow() {
  trafficLightEl.style.background = "yellow";
  trafficLightEl.style.boxShadow = "0 0 70px yellow";
  trafficLightEl.removeEventListener("click", makeYellow);
  trafficLightEl.addEventListener("click", makeRed);
}
//сделать красным
function makeRed() {
  trafficLightEl.style.background = "red";
  trafficLightEl.style.boxShadow = "0 0 70px red";
  trafficLightEl.removeEventListener("click", makeRed);
  trafficLightEl.addEventListener("click", makeGreen);
}
//выключить свет
function makeBlack() {
  trafficLightEl.style.background = "";
  trafficLightEl.style.boxShadow = "";
  trafficLightEl.removeEventListener("click", makeRed);
  trafficLightEl.addEventListener("click", makeGreen);
  turnOff.style.top = "-100px";
}
trafficLightEl.addEventListener("click", makeGreen);
turnOff.addEventListener("click", makeBlack);
