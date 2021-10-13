const grid_images = document.querySelectorAll(".item");
const bigImg = document.querySelector(".big-img");
const overlay = document.querySelector(".overlay");
console.log(overlay);
const closing = document.querySelector(".big-img img");
grid_images.forEach((image) => {
  image.addEventListener("click", (e) => {
    const clickedImg = e.target;
    bigImg.classList.add("active");
    bigImg.style.backgroundImage = `url(${clickedImg.currentSrc})`;
    overlay.classList.add("active");
  });
});

overlay.addEventListener("click", removeActive);
closing.addEventListener("click", removeActive);

function removeActive() {
  bigImg.classList.remove("active");
  overlay.classList.remove("active");
}
