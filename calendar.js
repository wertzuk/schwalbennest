// --------------------------
// Kalender-Funktionalität
// --------------------------

const days = document.querySelectorAll(".days li");
const monthHeader = document.querySelector(".month");

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

const options = { month: "long" };
const monthEnglish = new Intl.DateTimeFormat("en-US", options).format(today);
const monthGerman = new Intl.DateTimeFormat("de-DE", options).format(today);

const firstDayIndex = adjustDay(new Date(`${monthEnglish} 1, ${year}`));

console.log(month);
monthHeader.textContent = monthGerman + " " + year;

for (let i = 0; i < 30; i++) {
  days[firstDayIndex + i].textContent = i + 1;
  days[firstDayIndex + i].addEventListener("click", () => {
    days[firstDayIndex + i].classList.toggle("marked");
  });
}

function adjustDay(date) {
  const day = date.getDay();
  if (day == 0) {
    return 6;
  }
  return day - 1;
}

const todayIndex = adjustDay(today);
