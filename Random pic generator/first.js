const Button = document.querySelector(".btn");
const container = document.querySelector(".container");

Button.addEventListener("mouseover", (event)=>{
    const xcoordinate = (event.pageX - Button.offsetLeft);
    const ycoordinate = (event.pageY - Button.offsetTop);

    console.log(xcoordinate, ycoordinate);
    Button.style.setProperty("--xPos", xcoordinate+"px");
    Button.style.setProperty("--yPos", ycoordinate+"px");
})

let cur_idx = 5;
Button.addEventListener("click", ()=>{
    for(let num = 0; num < 4; num++){
        const newpic = document.createElement("img");
        newpic.src = "https://picsum.photos/300?random="+ cur_idx;
        container.appendChild(newpic);
        cur_idx++;
    }
})
