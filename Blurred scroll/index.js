
const image = document.querySelector(".bg-image");

window.addEventListener("scroll", ()=>{
    image.style.opacity = 1 - window.pageYOffset/800;
    image.style.backgroundSize = 160 - window.pageYOffset/15 + "%";
})
