//translate the home page content
var translations = {
      en: {
        title: "Create a new account ",
        firstname: "First Name",
        lastname:" Last Name",
        email: "Email",
        password: "Password",
        confirm: "Confirm Password",
        button: "Register",
        span: "Already have an account? ",
        link: "Log in"
      },
      ar: {
       title: "انشاء حساب جديد ",
        firstname: "الاسم الاول",
        lastname:" الاسم الاخير",
        email: " البريد الالكتروني",
        password: "كلمة المرور",
        confirm: "  تأكيد كلمة المرور",
        button: "تسجيل",
        span: "هل لديك حساب بالفعل؟ ",
        link: "تسجيل الدخول"
      }
};
var currentLang = localStorage.getItem('currLang') || 'en';
function translatePage(lang){
   var language = translations[lang] || translations.en;
    document.getElementById('title').textContent = language.title;
    document.getElementById('label-fname').textContent = language.firstname;
    document.getElementById('label-lname').textContent = language.lastname;
    document.getElementById('label-email').textContent = language.email;
    document.getElementById('label-password').textContent = language.password;
    document.getElementById('label-confirm').textContent = language.confirm;
    document.getElementById('regButton').textContent = language.button;
    document.getElementById('already-account').textContent = language.span;
    document.getElementById('login-link').textContent = language.link;

    localStorage.setItem('currLang', lang);

        if(lang === 'en'){
    document.dir = "ltr";
    }else{
      document.dir = "rtl";
    }


}
window.addEventListener('storage', (e) => {
  if (e.key === 'currLang' && e.newValue) {
    translatePage(e.newValue);
  }
});

translatePage(currentLang);
 





