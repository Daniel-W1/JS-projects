const cards = document.querySelectorAll(".card");

let first = false;
let firstcard, secondcard;
let firstsrc, secondsrc;
let lockboard = false;

function flipcard(){
    if (lockboard) {
        return
    }
    if (this === firstcard) {
        return 
    }
    this.classList.add("flip");
    if(!first){
        first = true;
        firstcard = this;
    }
    else{
        
        secondcard = this;
        first = false;
        getSource();
        checkMatch();
    }
}
cards.forEach(card => card.addEventListener("click", flipcard)) 
function getSource(){
    firstsrc = firstcard.getElementsByTagName('img')[0].src;
    secondsrc = secondcard.getElementsByTagName('img')[0].src;
}

function checkMatch(){
    let ismatch = firstsrc === secondsrc;
    ismatch ? disableCards():unflipcards();
}

function unflipcards(){
    lockboard = true;
    setTimeout(() => {
        firstcard.classList.remove("flip");
        secondcard.classList.remove("flip");
        lockboard = false;
        resetBoard();
    }, 1000);

}

function disableCards(){
    firstcard.removeEventListener("click", this)
    secondcard.removeEventListener("click", this)
    resetBoard()
}

function resetBoard(){
    firstcard = null;
    secondcard = null;
    first = false;
    lockboard = false;
}

(function shuffle(){
    cards.forEach(card =>{
        let randomnum = Math.floor(Math.random()*16);
        card.style.order = randomnum;
    })
})();
// this will automatically envoke the function after its definition
