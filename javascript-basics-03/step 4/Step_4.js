function checkingPass() {
    var password = document.getElementById('password');
    var confirmation = document.getElementById('confirmation');

    if(password.value !== confirmation.value){
        password.style.borderColor = "red";
        confirmation.style.borderColor = "red";
    }
    else{
        password.style.borderColor = "black";
        confirmation.style.borderColor = "black";
    }
}