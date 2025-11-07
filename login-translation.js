//translate the home page content
var translations = {
      en: {
        title: "Welcome Back 👋",
        email: "Email",
        password: "Password",
        button: "Log in",
        span: "Don't have an account? ",
        link: "Register"
      },
      ar: {
        title: "مرحبا بعودتك 👋",
        email: " البريد الالكتروني",
        password: "كلمة المرور",
        button: "تسجيل الدخول",
        span: "ليس لديك حساب ؟ ",
        link: "تسجيل جديد"
      }
};
var currentLang = localStorage.getItem('currLang') || 'en';
function translatePage(lang){
   var language = translations[lang] || translations.en;
    document.getElementById('title').textContent = language.title;
    document.getElementById('emaill').textContent = language.email;
    document.getElementById('passwordd').textContent = language.password;
    document.getElementById('log-in').textContent = language.button;
    document.getElementById('no-account').textContent = language.span;
    document.getElementById('link-register').textContent = language.link;

    localStorage.setItem('currLang', lang);

    
       if(lang === 'en'){
    document.dir = "ltr";
    }else{
      document.dir = "rtl";
    }
   

}
window.addEventListener('storage', (e) => {
  debugger
  if (e.key === 'currLang' && e.newValue) {
    translatePage(e.newValue);
  }
});

translatePage(currentLang);
 





