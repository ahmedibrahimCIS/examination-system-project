
function validateLogin(event){

var inputEmail = document.getElementById('email').value;
var inputPassword = document.getElementById('password').value;

var email = localStorage.getItem('email')
var pass = localStorage.getItem('password')

    
if (inputEmail == email && inputPassword == pass) {
    alert('Logged In successfully')
    console.log('Logged In successfully');
    
    return true;

}else{
    event.preventDefault();
    console.log('wrong pass');
    
    alert('Wrong email or password');
    return false;

}

}
