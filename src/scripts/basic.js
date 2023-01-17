function myFunction(){
    var the_nav = document.getElementById("mytopnav");

    if (the_nav.className === 'topnav'){
        the_nav.className += " responsive";
    }
    else{
        the_nav.className = 'topnav';
    }
}
