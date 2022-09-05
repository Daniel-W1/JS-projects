window.onload = ()=>{
    const transition = document.querySelector(".transition");
    const anchors = document.querySelectorAll("a");

    setTimeout(() => {
        transition.classList.remove("is-active");
    }, 500);
    for (let index = 0; index < anchors.length; index++) {
        const element = anchors[index];
        element.addEventListener("click", e=>{
            e.preventDefault();
            let target = e.target.href;
            
            transition.classList.add("is-active");
            setTimeout(() => {
                window.location.href = target;
            }, 500);
        })
    }
}
const container = document.querySelector(".container");
const button = document.querySelector(".btn");



function createRandomcont(){
    const cont = document.createElement("div");
    cont.classList.add("image-cont");
    const url = `url('https://picsum.photos/300/300?random= + ${Math.floor(Math.random()*2000)}'`;
    // console.log(url);
    cont.style.background = url;

    // console.log(cont);
    const text = document.createElement("div");
    text.classList.add("text");

    const quote = document.createElement("span");
    quote.classList.add("quote");

    const author = document.createElement("span");
    author.classList.add("author");
    author.title = "Google author";
    
    fetch('https://api.quotable.io/random').then(res => res.json()).then(data => {
        console.log(data);
        quote.innerText = data.content;
        author.innerText = "-" + data.author;
    })

    text.appendChild(quote);
    text.appendChild(author);
    cont.appendChild(text);
    container.appendChild(cont);
}
for (let index = 0; index < 4; index++) {
    createRandomcont();
}

button.addEventListener("click", ()=>{
    for (let index = 0; index < 4; index++) {
        createRandomcont();
    }
});
