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

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const searchParams = new URLSearchParams();
  data.forEach((item) => {
    searchParams.append(item[0], item[1]);
  });

  const response = await fetch("sending.php", {
    method: "POST",
    body: data,
  });
  // const text = await response.text();
  console.log(response);
  if (response.ok) {
    console.log("ok");
    form.classList.add("success");
  }
});

const start = document.querySelector("#start");
const end = document.querySelector("#end");

start.addEventListener("focus", () => {
  start.type = "date";
});
end.addEventListener("focus", () => {
  end.type = "date";
});
