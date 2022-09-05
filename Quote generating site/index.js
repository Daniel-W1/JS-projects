text = document.querySelector(".text1"), 
author = document.querySelector(".text2"),

logo = document.querySelector(".logo");


function randomquote(){
    fetch('https://api.quotable.io/random').then(res => res.json()).then(data => {
        text.innerText = data.content;
        author.innerText = "-"+data.author;
    })
}

logo.addEventListener("click", randomquote());
