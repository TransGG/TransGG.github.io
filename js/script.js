function changeContainerColor(color) {
  const container = document.querySelector(".container");
  container.style.backgroundColor = color;
}

const blahajOverlay = document.querySelector(".blahaj-overlay");
const boatOverlay = document.querySelector(".boat-overlay");
const cloudLeftOverlay = document.querySelector(".cloud-left-overlay");
const cloudRightOverlay = document.querySelector(".cloud-right-overlay");
const lakeOverlay = document.querySelector(".lake-overlay");
const mountainsOverlay = document.querySelector(".mountains-overlay");

const bushLeftOverlay = document.querySelector(".bush-left-overlay");
const bushRightOverlay = document.querySelector(".bush-right-overlay");
const canvasOverlay = document.querySelector(".canvas-overlay");

blahajOverlay.style.transition = "transform 2s ease-out";
boatOverlay.style.transition = "transform 2s ease-out";
lakeOverlay.style.transition = "transform 2s ease-out";
cloudLeftOverlay.style.transition = "transform 2s ease-out";
cloudRightOverlay.style.transition = "transform 2s ease-out";
bushLeftOverlay.style.transition = "transform 2s ease-out";
bushRightOverlay.style.transition = "transform 2s ease-out";

canvasOverlay.style.transform = "scale(0.9)";

window.addEventListener("resize", () => {
  canvasOverlay.style.transform =
    "scale(" + scaleValue(window.innerWidth) + ")";
});

function parallaxStart() {
  blahajOverlay.style.transform = "scale(1.01)";
  boatOverlay.style.transform = "scale(1.01)";
  lakeOverlay.style.transform = "scale(1.003)";
  cloudLeftOverlay.style.transform = "translateX(-5px)";
  cloudRightOverlay.style.transform = "translateX(5px)";
  bushLeftOverlay.style.transform = "translateX(-100px)";
  bushRightOverlay.style.transform = "translateX(150px)";
}

function parallaxEnd() {
  blahajOverlay.style.transform = "scale(1)";
  boatOverlay.style.transform = "scale(1)";
  lakeOverlay.style.transform = "scale(1)";
  cloudLeftOverlay.style.transform = "translateX(0px)";
  cloudRightOverlay.style.transform = "translateX(0px)";
  bushLeftOverlay.style.transform = "translateX(0px)";
  bushRightOverlay.style.transform = "translateX(0px)";
}

function scaleValue(windowWidth) {
  const minWindowWidth = 500; // Minimum window.innerWidth value
  const maxWindowWidth = 2000; // Maximum window.innerWidth value
  const minValue = 0.8; // Minimum scaled value
  const maxValue = 0.9; // Maximum scaled value

  // Scale the value based on the window.innerWidth
  const scaledValue =
    minValue +
    ((windowWidth - minWindowWidth) / (maxWindowWidth - minWindowWidth)) *
      (maxValue - minValue);

  // Return the scaled value (rounded to the nearest integer)
  return scaledValue;
}
