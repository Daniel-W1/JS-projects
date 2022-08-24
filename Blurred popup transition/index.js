const container = document.querySelector(".container");
const button = document.querySelector(".btn");
const close = document.querySelector(".close");
const popup = document.querySelector(".popup");

button.addEventListener("click", ()=>{
    container.classList.add("active");
    popup.classList.remove("active");
})

close.addEventListener("click", ()=>{
    container.classList.remove("active");
    popup.classList.add("active");
})
