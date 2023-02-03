// For Eye Button Function

let state = false;

function toggle1(){
    if(state){
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("eye-01").style.color = "#707070";
        state = false
    } else {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("password").style.border = "2px solid #b1b1b1";
        document.getElementById("eye-01").style.color = "#000000";
        state = true
    }
}

function toggle2(){
    if(state){
        document.getElementById("confirm-password").setAttribute("type", "password");
        document.getElementById("eye-02").style.color = "#707070";
        state = false
    } else {
        document.getElementById("confirm-password").setAttribute("type", "text");
        document.getElementById("confirm-password").style.border = "2px solid #b1b1b1";
        document.getElementById("eye-02").style.color = "#000000";
        state = true
    }
}

// For Password Verification Function

function checkPassword(){
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    console.log(password,confirmPassword)
    let verifiedMessage = document.getElementById('verification');
    let mandatory = 'Password Is Mandatory';

    if(password.length != 0){
        if(password == confirmPassword){
            verifiedMessage.textContent = "Password Verification is Correct";
            verifiedMessage.style.color = "green";
        } else {
            verifiedMessage.textContent = "Password Verification is Incorrect";
            verifiedMessage.style.color = "red";
        }
    }
    else{
        alert(mandatory);
        verifiedMessage.textContent = "Please! Enter the Password";
    }
}


// For Password Validation Method Function

function validate(){

    let upper = document.getElementById('upper');
    let lower = document.getElementById('lower');
    let sp_char = document.getElementById('special-char');
    let number = document.getElementById('number');
    let length = document.getElementById('length');

    
    // Checking For Password Contain UpperCase Letter
    if(password.value.match(/[A-Z]/)){
        upper.style.color = "green";
    } else {
        upper.style.color = "red";
    }
    
    // Checking For Password Contain LowerCase Letter
    if(password.value.match(/[a-z]/)){
        lower.style.color = "green";
    } else {
        lower.style.color = "red";
    }
    
    // Checking For Password Contain Special Symbol
    if(password.value.match(/[!\@\#\$\%\^\&\*\(\)\-\_\+\=\{\}\[\]\|\\\:\;\"\'\<\>\,\.\?\/\~\`]/)){
        sp_char.style.color = "green";
    } else {
        sp_char.style.color = "red";
    }
    
    // Checking For Password Contain Digit
    if(password.value.match(/[0-9]/)){
        number.style.color = "green";
    } else {
        number.style.color = "red";
    }

    // Checking For Password Contain UpperCase Letter
    if(password.value.length < 6 || password.value.length > 15){
        length.style.color = "red";
    } else {
        length.style.color = "green";
    }
}