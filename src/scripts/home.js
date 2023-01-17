function myFunction(){
    var the_nav = document.getElementById("mytopnav");

    if (the_nav.className === 'topnav'){
        the_nav.className += " responsive";
    }
    else{
        the_nav.className = 'topnav';
    }
}

showvideo(1);
function showvideo(idx){
    let videos = document.getElementsByClassName("month_slides");
    let video_elmt = videos[idx-1].getElementsByTagName("video")[0];

    for(let i = 0; i < videos.length; i++){
        // stop the previous video from playing anymore.
        
        let vid = videos[i].getElementsByTagName("video")[0];
        vid.currentTime = 0;
        vid.pause();
        videos[i].style.display = "none";
    }

    videos[idx-1].style.display = "block";
    video_elmt.play();
}