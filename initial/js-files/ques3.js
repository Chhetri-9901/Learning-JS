const clickMeBtn = document.querySelector("button");
const hiddenTxt = document.querySelector(".hidden");
const mainHeader = document.querySelector("h1");

clickMeBtn.addEventListener("click", function () {
  hiddenTxt.classList.toggle('visible');
  hiddenTxt.classList.toggle('hidden');
});

mainHeader.addEventListener("click", () => {
  if (mainHeader.classList.contains("light-mode")) {
    mainHeader.classList.add("dark-mode");
    mainHeader.classList.remove("light-mode");
  } else {
    mainHeader.classList.remove("dark-mode");
    mainHeader.classList.add("light-mode");
  }
});
