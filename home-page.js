//translate the home page content
var translations = {
      en: {
        title: "Welcome to the Quiz 🎯",
        desc: "Take your exams easily and track your performance.",
        button: "Get Started"
      },
      ar: {
        title: "🎯مرحباً، أهلاً بك في الكويز !",
        desc: "الامتحان مكون من 10 اسئلة، حظاً موفقاً!",
        button: "ابدأ الاختبار"
      }
};
var currentLang = localStorage.getItem('currLang') || 'en';

function translatePage(lang){
   var language = translations[lang] || translations.en;

       if(lang === 'en'){
    document.dir = "ltr";
    }else{
      document.dir = "rtl";
    }
   
    document.getElementById('title').textContent = language.title;
    document.getElementById('desc').textContent = language.desc;
    document.getElementById('btn').textContent = language.button;

    localStorage.setItem('currLang', lang);

}
window.addEventListener('storage', (e) => {
  if (e.key === 'currLang' && e.newValue) {
    translatePage(e.newValue);
  }
});

translatePage(currentLang);
 





