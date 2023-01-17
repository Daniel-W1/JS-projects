function myFunction(){
    var the_nav = document.getElementById("mytopnav");

    if (the_nav.className === 'topnav'){
        the_nav.className += " responsive";
    }
    else{
        the_nav.className = 'topnav';
    }
}

document.getElementsByClassName('submit-btn')[0].addEventListener('click',function(e){
    e.preventDefault();  
    let result = validateForm();

    if (result){
        alert("Submitted Succesfully!")
    }
});

function validateForm() {
    let first_name = document.getElementsByName("firstname")[0];
    var lastname = document.getElementsByName("lastname")[0];
    var email = document.getElementsByName("email")[0];
    var message = document.getElementsByName("message")[0];

    let emailPattern = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
    let namePattern = new RegExp(/^[a-zA-Z]{3,20}$/);
    
    if (!(namePattern.test(first_name.value))) {
      alert("First Name must be in a valid form");
      return false;
    }
    if (!(namePattern.test(lastname.value)) ){
      alert("Last Name must be in a valid form");
      return false;
    }
    if (!(emailPattern.test(email.value))) {
      alert("Email must be in a valid form");
      return false;
    }
    if (message === "") {
      alert("message must not be empty");
      return false;
    }
    return true;
  }