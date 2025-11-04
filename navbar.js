var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'navbar.css';
document.head.appendChild(link);
var name
var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
if(localStorage.getItem('firstname') && isLoggedIn)
{name=localStorage.getItem('firstname')}
var navbar = document.createElement('nav');
navbar.className = 'nav';
navbar.innerHTML = `
        <div class="title">${name?`Hello, ${name}`:"Quizz App"}</div>
        <div class="utilites">
            <button id="dark-mode-toggle" class="dark-mode-toggle">🌙</button>
            <button id="signin-button" class="navbar-button" onclick="window.location.href='index.html'">Sign in</button>
            <button id="regester-button" class="navbar-button" onclick="window.location.href='register.html'">sign up</button>
            <button id="logout-button" class="navbar-button">Log out</button>
        </div>`;

document.body.appendChild(navbar);

console.log(window.location.pathname);
var loc = window.location.pathname;


var signinButton = document.getElementById('signin-button');
var registerButton = document.getElementById('regester-button');
var logoutButton = document.getElementById('logout-button');
if (isLoggedIn) {
    signinButton.style.display = 'none';
    registerButton.style.display = 'none';
    logoutButton.style.display = 'block';
} else {
    signinButton.style.display = 'block';
    registerButton.style.display = 'block';
    logoutButton.style.display = 'none';
}

if (loc=='/landing-page.html') {
    signinButton.style.display = 'none';
    registerButton.style.display = 'none';
}

if (loc=='/' || loc=='/index.html') {
    signinButton.style.display = 'none';
}

if (loc=='/register.html') {
    registerButton.style.display = 'none';
}

logoutButton.addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user`sQuestions');
    localStorage.removeItem('markedQuestions');
    window.location.href = 'index.html';
});





