/*eslint-env es6*/
const menu = document.querySelector(".menu");
const mobMenu = document.getElementById("mobile-menu");
const link = document.querySelector(".one");
const link2 = document.querySelector(".two ");
const link3 = document.querySelector(".three");

menu.addEventListener("click", () => {
  mobMenu.classList.toggle("active");
});
link.addEventListener("click", () => {
  mobMenu.classList.remove("active");
});
link2.addEventListener("click", () => {
  mobMenu.classList.remove("active");
});
link3.addEventListener("click", () => {
  mobMenu.classList.remove("active");
});
