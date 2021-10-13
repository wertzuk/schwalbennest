// --------------------------
// Bilder
// --------------------------

const images = document.querySelectorAll(".image");
let current = images[0];

if (images.length > 0) {
  setInterval(() => {
    current.classList.remove("active");
    if (current.nextElementSibling) {
      current = current.nextElementSibling;
    } else {
      current = images[0];
    }
    current.classList.add("active");
  }, 6000);
}

const grid_images = document.querySelectorAll(".item");
const bigImg = document.querySelector(".big-img");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".big-img img");
grid_images.forEach((image) => {
  image.addEventListener("click", (e) => {
    const clickedImg = e.target;
    bigImg.classList.add("active");
    bigImg.style.backgroundImage = `url(${clickedImg.currentSrc})`;
    overlay.classList.add("active");
    // bigImg.style.background = "red";
  });
});

overlay.addEventListener("click", removeActive);
close.addEventListener("click", removeActive);

function removeActive() {
  bigImg.classList.remove("active");
  overlay.classList.remove("active");
}

// --------------------------
// Menü
// --------------------------
const navToggle = document.querySelector(".nav-toggle");
const hamburger = document.querySelector(".hamburger");
const closed = document.querySelector(".close");
const menu = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
  hamburger.classList.toggle("selected");
  closed.classList.toggle("selected");
  menu.classList.toggle("show");
  document.body.classList.toggle("no-scroll");
});
