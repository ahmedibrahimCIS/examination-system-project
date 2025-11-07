var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'navbar.css';
document.head.appendChild(link);
var name
var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
if(!isLoggedIn){
localStorage.removeItem('timeLeft');
}
if(localStorage.getItem('firstname') && isLoggedIn)
{name=localStorage.getItem('firstname')}
var navbar = document.createElement('nav');
navbar.className = 'nav';
navbar.innerHTML = `
        <div class="title">${name?`Hello, ${name}`:"Quizz App"}</div>
        <div class="utilites">
            <button id="dark-mode-toggle" class="dark-mode-toggle">🌙</button>
             <button id="translateBtn" class="translateBtn">🌍</button>
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
    localStorage.removeItem('timeLeft');
    window.location.href = 'index.html';
});
var darkModeToggle = document.getElementById('dark-mode-toggle');

if (localStorage.getItem('darkMode') === "dark") {
    document.body.classList.add('dark');
    darkModeToggle.textContent ='☀️' ;
} else {
        darkModeToggle.textContent ='🌙' ;
    }

darkModeToggle.addEventListener('click', function() {
    if (document.body.classList.contains('dark')) {
        localStorage.removeItem('darkMode');
        darkModeToggle.textContent ='🌙' ;
    } else {
        localStorage.setItem('darkMode', "dark");
        darkModeToggle.textContent ='☀️' ;
    }
    document.body.classList.toggle('dark');
    
});

//translation
var translateBtn = document.getElementById('translateBtn');

translateBtn.addEventListener('click', function() {
    if(localStorage.getItem('currLang') === 'en'){
        localStorage.setItem('currLang', 'ar');
        translatePage('ar');
        document.dir = "rtl";
    }else{
        localStorage.setItem('currLang', 'en');
        translatePage('en');
        document.dir = "ltr";
    }
}
);

