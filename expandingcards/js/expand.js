let cards = document.querySelectorAll(".sub-container")
let active_element;
for(let card of cards){
    card.addEventListener("click", set_active_card)
    if(card.classList.contains("active")){
        active_element = card
    }
}

function set_active_card(e){
    // console.log(e.target);
    let target_element = e.target

    target_element.classList.add("active")
    active_element.classList.remove("active")
    active_element = target_element

}

