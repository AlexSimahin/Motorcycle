const hoverMenu = document.querySelector(".hover-menu");
const openBtn = document.querySelector(".menu-button");
const closeBtn = document.querySelector(".menu-close-btn");

let opacity;
let intervalID;

function fadeOut() {
  opacity = 1;
  intervalID = setInterval(hide, 20);
}

function fadeIn() {
  hoverMenu.classList.add("active");
  opacity = 0;
  intervalID = setInterval(show, 20);
}

function show() {
  if (opacity < 1) {
    opacity = opacity + 0.1;
    hoverMenu.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}

function hide() {
  if (opacity > 0) {
    opacity = opacity - 0.1;
    hoverMenu.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
    hoverMenu.classList.remove("active");
  }
}

openBtn.addEventListener("click", () => {
  fadeIn();
});

closeBtn.addEventListener("click", () => {
  fadeOut();
});

// ---------------------

const numbs = document.querySelectorAll(".numb");
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

setInterval(() => {
  if (counter1 < 106) {
    counter1 += 2;
    numbs[0].textContent = `${counter1}`;
  } else {
    clearInterval();
  }
}, 70);
