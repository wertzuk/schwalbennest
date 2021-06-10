const images = document.querySelectorAll(".image");
let len = images.length;
let i = 0;

setInterval(() => {
  i++;
  images[i - 1].classList.remove("active");
  if (i === len) {
    i = 0;
  }
  images[i].classList.add("active");
}, 7000);
