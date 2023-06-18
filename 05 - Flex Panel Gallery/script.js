const panelsEle = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive({ propertyName }) {
  propertyName.includes("flex") && this.classList.toggle("open-active");
}

panelsEle.forEach((ele) => ele.addEventListener("click", toggleOpen));
panelsEle.forEach((ele) => ele.addEventListener("transitionend", toggleActive));
