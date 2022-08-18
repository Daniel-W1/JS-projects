
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const correct_answer = num1*num2;

const question = document.getElementById("question")
question.innerText = `What is ${num1} * ${num2} ?`;

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

const scoreElmnt = document.getElementById("score");
scoreElmnt.innerText = `Score: ${score}`;

const formElmt = document.getElementById("form");
const inputelmt = document.getElementById("input");

formElmt.addEventListener("submit", ()=>{
    const answer = +inputelmt.value;
    if(correct_answer === answer){
        score++;
        updateLocalstorage();
    }
    else{
        score--;
        updateLocalstorage();
    }
})
function updateLocalstorage(){
    localStorage.setItem("score", JSON.stringify(score));
}
