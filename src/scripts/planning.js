function showMod(idx){
    var image_elmt = document.getElementsByClassName("img-elmt")[idx-1];
    var the_modal = document.getElementsByClassName("modal")[idx-1];
    var img = image_elmt.getElementsByTagName("img")[0];
    var modal_img = the_modal.getElementsByTagName("img")[0];


    the_modal.style.display = "block";
    modal_img.src = img.src;
}

function closeMod(){
    var the_modal = document.getElementsByClassName("modal");

    for (let i = 0; i < the_modal.length; i++){
        the_modal[i].style.display = "none";
    }
}

function myFunction(){
    var the_nav = document.getElementById("mytopnav");

    if (the_nav.className === 'topnav'){
        the_nav.className += " responsive";
    }
    else{
        the_nav.className = 'topnav';
    }
}
