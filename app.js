let darkmode = document.querySelector("[data-theme]");
let val = darkmode.getAttribute("data-theme")
let num = 1
const tog = document.getElementById("darkness");
tog.addEventListener('click', () => {
  num == 2 ? num = 2 : num = 1
  num == 1 ? darkmode.setAttribute("data-theme", "light") : darkmode.setAttribute("data-theme", "dark")
  num++
})

// mobile menu
const btn = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

