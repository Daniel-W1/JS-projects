const textarea = document.getElementById("textarea");
const totalNum = document.getElementById("total-count");
const remainingNum = document.getElementById("remaining-count");

console.log(textarea, totalNum, remainingNum)
textarea.addEventListener("keyup", ()=>{
    updateCounter();
})
function updateCounter(){
    totalNum.innerText = textarea.value.length;
    remainingNum.innerText = textarea.getAttribute("maxlength") - textarea.value.length;
}
