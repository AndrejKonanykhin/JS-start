const trafficLightl = document.querySelector("#trafficLight1");
const trafficLight2 = document.querySelector("#trafficLight2");
const trafficLight3 = document.querySelector("#trafficLight3");
const trafficLights = document.querySelector("#trafficLights");
const turnOff = document.querySelector("#turnoff");

//сделать зеленым
function makeGreen() {
  trafficLightl.style.background = "green";
  trafficLight2.style.background = "black";
  trafficLight3.style.background = "black";
  trafficLight1.style.boxShadow = "0 0 70px green";
  trafficLight2.style.boxShadow = "";
  trafficLight3.style.boxShadow = "";
  turnOff.style.top = "40px";
  trafficLights.removeEventListener("click", makeGreen);
  trafficLights.addEventListener("click", makeYellow);
}
//сделать желтым
function makeYellow() {
  trafficLightl.style.background = "black";
  trafficLight3.style.background = "black";
  trafficLight2.style.background = "yellow";
  trafficLight1.style.boxShadow = "";
  trafficLight2.style.boxShadow = "0 0 70px yellow";
  trafficLight3.style.boxShadow = "";
  trafficLights.removeEventListener("click", makeYellow);
  trafficLights.addEventListener("click", makeRed);
}
//сделать красным
function makeRed() {
  trafficLightl.style.background = "black";
  trafficLight2.style.background = "black";
  trafficLight3.style.background = "red";
  trafficLight1.style.boxShadow = "";
  trafficLight2.style.boxShadow = "";
  trafficLight3.style.boxShadow = "0 0 70px red";
  trafficLights.removeEventListener("click", makeRed);
  trafficLights.addEventListener("click", makeGreen);
}
//выключить свет
function makeBlack() {
  trafficLight1.style.background = "";
  trafficLight2.style.background = "";
  trafficLight3.style.background = "";
  trafficLight1.style.boxShadow = "";
  trafficLight2.style.boxShadow = "";
  trafficLight3.style.boxShadow = "";
  trafficLights.removeEventListener("click", makeRed);
  trafficLights.addEventListener("click", makeGreen);
  turnOff.style.top = "";
}
trafficLights.addEventListener("click", makeGreen);
turnOff.addEventListener("click", makeBlack);
