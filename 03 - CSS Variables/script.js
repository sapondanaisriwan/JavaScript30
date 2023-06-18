const inputsEle = document.querySelectorAll(".controls input");
const imgEle = document.querySelector("img");

function handleUpdate(event) {
  const { target } = event;
  const suffix = target.dataset.sizing || "";
  const result = target.value + suffix;

  switch (target.name) {
    case "spacing":
      imgEle.style.padding = result;
      break;
    case "blur":
      imgEle.style.filter = `blur(${result})`;
      break;
    default:
      imgEle.style.backgroundColor = result;
  }
}

inputsEle.forEach((ele) => ele.addEventListener("input", handleUpdate));
