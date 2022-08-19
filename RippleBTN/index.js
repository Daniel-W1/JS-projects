
const Button = document.querySelector(".btn");
Button.addEventListener("mouseover", (event)=>{
    const xpos = (event.pageX - Button.offsetLeft);
    const ypos = (event.pageY - Button.offsetTop);

    console.log(xpos, ypos)
    Button.style.setProperty("--xPos", xpos+"px");
    Button.style.setProperty("--yPos", ypos+"px");
})
