const burger = document.querySelector(".burger");
const offScreenMenu = document.querySelector(".off_screen__menu");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  navbar.classList.toggle("active");
});
