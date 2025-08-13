const CARDLIST = document.querySelector("#skill-list")
const FADE = CARDLIST.closest("#skills").querySelector("#fadeblock")

function cardAnim(event){
    const isCard = event.target.closest("[data-skill-card]")
    const isClose = event.target.closest("[data-skill-card-close]")
    if (isCard) {
        isCard.classList.add("active")
        FADE.classList.add("active")
    }
    if (isClose) {
        const parent = isClose.closest("[data-skill-card]")
        if (parent){
            parent.classList.remove("active")
            FADE.classList.remove("active")
        }
    }
}

CARDLIST.addEventListener("click",(event) => cardAnim(event))