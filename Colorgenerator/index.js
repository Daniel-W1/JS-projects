
const container = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const element = document.createElement("div");
    element.classList.add("color-container");
    container.appendChild(element);
}

document.querySelectorAll(".color-container").forEach(element => {
    const color = colorGenerator();
    element.innerText = "#"+color;
    element.style.backgroundColor = "#"+color;
});
function colorGenerator(){
    const codes = "abcdef1234567890";
    let colorCode = "";
    for (let index = 0; index < 6; index++) {
        const randomindex = Math.floor(Math.random()*15);
        colorCode += codes.substring(randomindex, randomindex+1);
    }
    return colorCode;
}
