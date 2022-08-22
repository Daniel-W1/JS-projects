
const body = document.querySelector("body");

body.addEventListener("mousemove", (event)=>{
    const x = event.offsetX;
    const y = event.offsetY;

    const newHeart = document.createElement("span");
    newHeart.style.left = x + "px";
    newHeart.style.top = y + "px";

    const randomSize = Math.round(Math.random()*100);
    newHeart.style.width = randomSize +"px";
    newHeart.style.height = randomSize +"px";
    body.appendChild(newHeart);

    setTimeout(()=>{
        newHeart.remove();
    },4000)
})
