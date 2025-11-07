var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'navbar.css';
document.head.appendChild(link);
var name
var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
var currentLang = localStorage.getItem('currLang') || 'en';
isAr = localStorage.getItem('currLang') === 'ar';
if(!isLoggedIn){
localStorage.removeItem('timeLeft');
}
if(localStorage.getItem('firstname') && isLoggedIn)
{name=localStorage.getItem('firstname')}
var navbar = document.createElement('nav');
navbar.className = 'nav';
navbar.innerHTML = `
        <div id="nav-title" class="title">${name?`${isAr?"مرحبا,":"Hello,"} ${name}`:(isAr?"كويز اب":"Quizz App")}</div>
        <div class="utilites">
            <button id="dark-mode-toggle" class="dark-mode-toggle">🌙</button>
            <button id="translateBtn" class="translateBtn">🌍</button>
            <button id="signin-button" class="navbar-button" onclick="window.location.href='index.html'">${isAr?"تسجيل الدخول":"Sign in"}</button>
            <button id="regester-button" class="navbar-button" onclick="window.location.href='register.html'">${isAr?"التسجيل":"Sign up"}</button>
            <button id="logout-button" class="navbar-button">${isAr?"تسجيل الخروج":"Log out"}</button>
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

if (loc.includes('landing-page.html')) {
    signinButton.style.display = 'none';
    registerButton.style.display = 'none';
}

if (loc.includes('/') || loc.includes('/index.html')) {
    signinButton.style.display = 'none';
}

if (loc.includes('/register.html')) {
    registerButton.style.display = 'none';
    signinButton.style.display = 'block';
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
        translatePageNav('ar');
        document.dir = "rtl";
    }else{
        localStorage.setItem('currLang', 'en');
        translatePage('en');
        translatePageNav('en');
        document.dir = "ltr";
    }
}
);
var navTranslations = {
      en: {
        navtitle: "Quizz App",
        signinbutton: "Sign in",
        regesterbutton: "Sign up",
        logoutbutton: "Log out"
      },
      ar: {
        navtitle: "كويز اب",
        signinbutton: "تسجيل الدخول",
        regesterbutton: "التسجيل",
        logoutbutton: "تسجيل الخروج"
      }
};

function translatePageNav(lang){
   var language = navTranslations[lang] || navTranslations.en;

       if(lang === 'en'){
    document.dir = "ltr";
    isAr = false;
    }else{
      document.dir = "rtl";
        isAr = true;
    }
    document.querySelector('.title').innerHTML = `${name?`${isAr?"مرحبا,":"Hello,"} ${name}`:(isAr?"كويز اب":"Quizz App")}`
    document.getElementById('signin-button').textContent = language.signinbutton;
    document.getElementById('regester-button').textContent = language.regesterbutton;
    document.getElementById('logout-button').textContent = language.logoutbutton;

    localStorage.setItem('currLang', lang);

}


window.addEventListener('storage', (e) => {
    debugger
  if (e.key === 'currLang' && e.newValue) {
    isAr = e.newValue === 'ar';
    translatePageNav(e.newValue);
  }
});

translatePageNav(currentLang);

