const CARDLIST = document.querySelector("#skill-list")

function cardAnim(event){
    const isCard = event.target.closest("[data-skill-card]")
    if (isCard) {
        isCard.classList.add("active")
    }
    
    

}

CARDLIST.addEventListener("click",(event) => cardAnim(event))