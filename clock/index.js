
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

function updateTime(){
    let current_hour = new Date().getHours();
    let current_minutes = new Date().getMinutes(); 
    let current_seconds = new Date().getSeconds();

    let ampm = "AM";

    if (current_hour > 10){
        current_hour -= 12;
        ampm = "PM";
    }
    
    current_hour = current_hour < 10 ? "0"+ current_hour : current_hour;
    current_minutes = current_minutes < 10 ? "0"+current_minutes : current_minutes;
    current_seconds = current_seconds < 10 ? "0"+current_seconds : current_seconds;


    hour.innerText = current_hour;
    minute.innerText = current_minutes;
    second.innerText = current_seconds;

    setTimeout(()=>{
        updateTime()
    }, 1000)
}
updateTime();
