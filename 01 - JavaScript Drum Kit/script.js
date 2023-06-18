const keyElements = document.querySelectorAll(".key");

function removePlayingClass(e) {
  if (e.propertyName === "transform") {
    e.target.classList.remove("playing");
  }
}

function handleKeyDown({ keyCode }) {
  const elements = document.querySelectorAll(`[data-key="${keyCode}"]`);
  elements.forEach((element) => {
    if (element.tagName === "DIV") {
      element.classList.add("playing");
    } else {
      element.currentTime = 0;
      element.play();
    }
  });
}

keyElements.forEach((ele) =>
  ele.addEventListener("transitionend", removePlayingClass)
);

window.addEventListener("keydown", handleKeyDown);
