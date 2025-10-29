
function validateLogin(event){
    event.preventDefault();

    var inputEmail = document.getElementById('email').value;
    var inputPassword = document.getElementById('password').value;

    var email = localStorage.getItem('email')
    var pass = localStorage.getItem('password')


    if (inputEmail == email && inputPassword == pass) {
        window.location.href = 'home-page.html';  
        localStorage.setItem("isLoggedIn", "true");
        return false;

    }else{
        console.log('wrong pass');
        alert('Wrong email or password');
        return false;

    }

}
