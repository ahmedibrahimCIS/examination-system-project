var nameRegex = new RegExp('^[A-Za-z]{2,}(?: [A-Za-z]+)*$');
var emailRegex = new RegExp('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+');

function validateForm(event) {

      event.preventDefault();

      var fname = document.getElementById("fname").value;
      var lname = document.getElementById("lname").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var confirm = document.getElementById("confirm").value;

      if (localStorage.getItem("isRegistered") === "true" && localStorage.getItem("email") === email) {
          alert("You are already registered.");
          window.location.href = "index.html";
     }

      if(fname == "" || lname == "" || email =="" || password == "" || confirm ==""){
        alert("fill in all fields");
        return false;
      }

      if (!nameRegex.test(fname) || !nameRegex.test(lname)) {
        alert("Names must contain only letters");
        return false;
      }

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email");
        return false;
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
      }

      if (password !== confirm) {
        alert("Passwords don't match");
        return false;
      }

      localStorage.setItem('firstname' ,fname)
      localStorage.setItem('lastname' ,lname)
      localStorage.setItem('email' ,email)
      localStorage.setItem('password' ,password)

      localStorage.setItem("isRegistered", "true");
      window.location.href = "index.html";

      return true;

}