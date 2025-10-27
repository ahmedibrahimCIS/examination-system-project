var nameRegex = new RegExp('^[A-Za-z]{2,}(?: [A-Za-z]+)*$');
var emailRegex = new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+');

function validateForm(event) {

      var fname = document.getElementById("fname").value;
      var lname = document.getElementById("lname").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var confirm = document.getElementById("confirm").value;


      if (!nameRegex.test(fname) || !nameRegex.test(lname)) {
        event.preventDefault(); 
        alert("Names must contain only letters");
        return false;
      }

      if (!emailRegex.test(email)) {
        event.preventDefault();
        alert("Please enter a valid email");
        return false;
      }

      if (password.length < 6) {
        event.preventDefault();
        alert("Password must be at least 6 characters");
        return false;
      }

      if (password !== confirm) {
        event.preventDefault();
        alert("Passwords don't match");
        return false;
      }

      localStorage.setItem('firstname' ,fname)
      localStorage.setItem('lastname' ,lname)
      localStorage.setItem('email' ,email)
      localStorage.setItem('password' ,password)

      return true;

}