function showMod(idx, idx2){
    var the_demo = document.getElementsByClassName("demo-images")[idx2-1];
    console.log(the_demo);
    var image_elmt = the_demo.getElementsByClassName("img-elmt")[idx-1];
    console.log(image_elmt);
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
