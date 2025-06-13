const BURGER = document.querySelector("#burger");
const MENU = document.querySelector("#menu");

BURGER.addEventListener("click",()=>{
    BURGER.classList.toggle("open");
    MENU.classList.toggle("open")
})