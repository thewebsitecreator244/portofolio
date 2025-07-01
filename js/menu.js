const BURGER = document.querySelector("#burger");
const MENU = document.querySelector("#menu");
const ANCHOR = document.querySelector("#link-anchor")
BURGER.addEventListener("click",()=>{
    BURGER.classList.toggle("open");
    MENU.classList.toggle("open");
})
// added menu closing on link press
ANCHOR.addEventListener("click",()=>{
    BURGER.classList.toggle("open");
    MENU.classList.toggle("open");
})