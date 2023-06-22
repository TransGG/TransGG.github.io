function changeContainerColor(color) {
  const container = document.querySelector(".container");

  const top = document
    .querySelector(".svg-top")
    .getSVGDocument()
    .getElementById("ID");
  container.style.backgroundColor = color;

  top.style.transition = "fill 2s ease-out";
  top.style.fill = color == "#a789a8a2" ? "#a789a8E6" : color;

  container.addEventListener("mouseover", () => {});
}

function parallaxStart() {
  const backgroundOverlay = document.querySelector(".background-overlay");
  const bushLeftOverlay = document.querySelector(".bush-left-overlay");
  const bushRightOverlay = document.querySelector(".bush-right-overlay");

  backgroundOverlay.style.transition = "transform 2s ease-out";
  backgroundOverlay.style.transform = "scale(1.04)";

  // move the left bush to the left
  bushLeftOverlay.style.transition = "transform 2s ease-out";
  bushLeftOverlay.style.transform = "translateX(-100px)";

  // move the right bush to the right
  bushRightOverlay.style.transition = "transform 2s ease-out";
  bushRightOverlay.style.transform = "translateX(150px)";

}

function parallaxEnd() {
  const backgroundOverlay = document.querySelector(".background-overlay");
  const bushLeftOverlay = document.querySelector(".bush-left-overlay");
  const bushRightOverlay = document.querySelector(".bush-right-overlay");

  backgroundOverlay.style.transition = "transform 2s ease-out";
  backgroundOverlay.style.transform = "scale(1)";

  // move the left bush back to the right
  bushLeftOverlay.style.transition = "transform 2s ease-out";
  bushLeftOverlay.style.transform = "translateX(0px)";

  // move the right bush back to the left
  bushRightOverlay.style.transition = "transform 2s ease-out";
  bushRightOverlay.style.transform = "translateX(0px)";
}
