function changeContainerColor(color) {
  const container = document.querySelector(".container");
  container.style.backgroundColor = color;
}

function parallaxStart() {
  const backgroundOverlay = document.querySelector(".background-overlay");
  const bushLeftOverlay = document.querySelector(".bush-left-overlay");
  const bushRightOverlay = document.querySelector(".bush-right-overlay");
  const canvasOverlay = document.querySelector(".canvas-overlay");

  backgroundOverlay.style.transition = "transform 2s ease-out";
  backgroundOverlay.style.transform = "scale(1.04)";

  bushLeftOverlay.style.transition = "transform 2s ease-out";
  bushLeftOverlay.style.transform = "translateX(-100px)";

  bushRightOverlay.style.transition = "transform 2s ease-out";
  bushRightOverlay.style.transform = "translateX(150px)";

  canvasOverlay.style.transition = "transform 2s ease-out";
  canvasOverlay.style.transform = "translate(-25px, -25px) rotate(45deg)";

}

function parallaxEnd() {
  const backgroundOverlay = document.querySelector(".background-overlay");
  const bushLeftOverlay = document.querySelector(".bush-left-overlay");
  const bushRightOverlay = document.querySelector(".bush-right-overlay");
  const canvasOverlay = document.querySelector(".canvas-overlay");

  backgroundOverlay.style.transition = "transform 2s ease-out";
  backgroundOverlay.style.transform = "scale(1)";

  bushLeftOverlay.style.transition = "transform 2s ease-out";
  bushLeftOverlay.style.transform = "translateX(0px)";

  bushRightOverlay.style.transition = "transform 2s ease-out";
  bushRightOverlay.style.transform = "translateX(0px)";

  canvasOverlay.style.transition = "transform 2s ease-out";
  canvasOverlay.style.transform = "translate(0px, 0px) rotate(45deg)";
}
