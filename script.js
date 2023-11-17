const moon = document.querySelector("#moon");
const text = document.querySelector("#parallex-heading");
const train = document.querySelector("#train");
const desertMoon = document.querySelector("#desert-moon");
const man = document.querySelector("#man");

// function
function onScroll() {
  let value = window.scrollY || 0;

  // console.log(moon.style.top);
  if (value <= 600) {
    moon.style.top = value * 0.9 + "px";
  }
  text.style.top = 85 + value * -0.08 + "%";
  train.style.left = value * 1.5 + "px";
  desertMoon.style.top = value * 0.3 + "px";
  man.style.left = value * 0.5 + "px";
}

function showProgressBar() {
  let scrollProgress = document.querySelector(".progress-bar");
  let pos = document.documentElement.scrollTop;

  let calHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrollValue = Math.round((pos * 100) / calHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener(
    "click",
    () => (document.documentElement.scrollTop = 0)
  );

  scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`;
}

// event listener
window.addEventListener("scroll", onScroll);
window.onscroll = showProgressBar;
window.onload = showProgressBar;
