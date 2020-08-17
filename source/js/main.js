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
const specificationStats = document.querySelector(".specification__stats");
const special = document.querySelectorAll(".progress");
let counter1 = 0;
let counter2 = 0;
let counter3 = [0, 1];

console.log(special);

const circleProgress = () => {
  setInterval(() => {
    if (counter1 < 106) {
      counter1 += 2;
      numbs[0].textContent = `${counter1}`;
    } else {
      clearInterval();
    }
  }, 75);

  setInterval(() => {
    if (counter2 < 229) {
      counter2 += 4;
      numbs[1].textContent = `${counter2}`;
    } else {
      clearInterval();
      numbs[1].textContent = 229;
    }
  }, 65);

  setInterval(() => {
    if (counter3[0] == 5 && counter3[1] == 7) {
      clearInterval();
    } else {
      if (counter3[1] === 10) {
        counter3[0]++;
        counter3[1] = 0;
      }
      counter3[1]++;
      numbs[2].textContent = `${counter3[0]},${counter3[1]}`;
    }
  }, 60);
};

setTimeout(() => {
  specificationStats.style.display = "flex";
  circleProgress();
  for (let i = 0; i < special.length; i++) {
    special[i].style.animationPlayState = "running";
  }
}, 2000);

// dots.classList.animation = "dot 4s linear both";
