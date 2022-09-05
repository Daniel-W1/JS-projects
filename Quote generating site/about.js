const imageContainer = document.querySelector(".image-container");

console.log(imageContainer);
let change = 0;

imageContainer.addEventListener("click", (event)=>{
    if(event.pageX > window.innerWidth/2){
        change -= 45;
    }
    else{
        change += 45;
    }
    clearTimeout(timer);
    updateGallery();
});

let timer;
function updateGallery(){
    imageContainer.style.transform = `perspective(1000px) rotateY(${change}deg)`;
    timer = setTimeout(() => {
        change -= 45;
        updateGallery();
    }, 2000);
}

updateGallery();
