const modeBtn = document.querySelector(".switch-input");
const mainBlock = document.querySelector(".main");

modeBtn.onchange = (e) => {
  console.log(modeBtn);
  if (modeBtn.checked === true) {
    mainBlock.classList.remove("light");
    mainBlock.classList.add("dark");
  } else {
    mainBlock.classList.remove("dark");
    mainBlock.classList.add("light");
  }
};
