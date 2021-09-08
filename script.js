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
  }, 7000);
}

const grid_images = document.querySelectorAll(".item");
grid_images.forEach((image) => {
  image.addEventListener("click", () => {
    image.classList.toggle("clicked");
  });
});

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
