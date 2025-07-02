const HEADER = document.querySelector("#main-header");
const MENU = HEADER.querySelector("#menu");

function toggle(event){
    let isBurger = event.target.closest("#burger");
    let isAnchor = event.target.closest("[data-anchor]");

    if (isBurger){
        MENU.classList.toggle("open");
        isBurger.classList.toggle("open");
    }
    
    if (isAnchor){
        MENU.classList.remove("open");
        isBurger = HEADER.querySelector("#burger")
        isBurger.classList.remove("open");
    }
}

HEADER.addEventListener("click",(event) => toggle(event));
