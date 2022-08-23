
const button = document.querySelector(".btn");
const trailer = document.querySelector(".trailer");
const video = document.querySelector("video");
const close = document.querySelector(".close")

console.log(button)
button.addEventListener("click", ()=>{
    trailer.classList.remove("inactive");
})
close.addEventListener("click", ()=>{
    trailer.classList.add("inactive");
    video.pause();
    video.currentTime = 0;
})
