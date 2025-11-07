var timer = document.getElementById("time");
var messageBox = document.getElementById("message-box");
var messageCard = document.getElementById("message-card");
var cardTitle = document.getElementById("status");
var message = document.getElementById("message");
var playAgainBtn = document.getElementById("play-again");
var questionText = document.getElementById("question");
var answers = document.getElementById("answers");
var questionNav = document.getElementById("question-nav");
var markBtn = document.getElementById("mark-btn");
var markedQuestions = document.getElementById("marked-questions");
var submitBtn = document.getElementById("submit");
var markedQuestionsSet = new Set();
var timerInterval;
var currentIndex = 0;
var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
var currentLang = localStorage.getItem("currLang") || "en";
var isAr = currentLang === "ar";
var timeLeft;
var shuffledQuestions = [];
var translations = {
  en: {
    submit: "submit",
    playAgin: "Play Again",
  },
  ar: {
    submit: "تقديم الاختبار",
    playAgin: "العب مرة أخرى",
  },
};

if(!isLoggedIn){
window.location.href = 'index.html';
}






// set =new Set();
// set.add(4);
// console.log(set);
// set.add(1);
// console.log(set);
// set.forEach((item)=>{
//   console.log(item);
// });
// console.log(set.has(4));
// set.delete(4)
// console.log(set.has(4));

var questions = [
  {
    question: "What is the capital of France?",
    arQuestion: "ما هي عاصمة فرنسا؟",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    arOptions: ["برلين", "مدريد", "باريس", "روما"],
    answer: 2,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "Which planet is known as the Red Planet?",
    arQuestion: "أي كوكب يُعرف بالكوكب الأحمر؟",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    arOptions: ["الأرض", "المريخ", "المشتري", "الزهرة"],
    answer: 1,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "Who wrote the play 'Hamlet'?",
    arQuestion: "من الذي كتب مسرحية 'هاملت'؟",
    options: ["Mark Twain", "William Shakespeare", "Charles Dickens", "Leo Tolstoy"],
    arOptions: ["مارك توين", "ويليام شكسبير", "تشارلز ديكنز", "ليو تولستوي"],
    answer: 1,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "What is the largest ocean on Earth?",
    arQuestion: "ما هو أكبر محيط على وجه الأرض؟",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    arOptions: ["المحيط الأطلسي", "المحيط الهندي", "المحيط المتجمد الشمالي", "المحيط الهادئ"],
    answer: 3,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "What is the boiling point of water at sea level?",
    arQuestion: "ما هي درجة غليان الماء عند مستوى سطح البحر؟",
    options: ["50°C", "100°C", "150°C", "200°C"],
    arOptions: ["٥٠°م", "١٠٠°م", "١٥٠°م", "٢٠٠°م"],
    answer: 1,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    arQuestion: "ما هو الغاز الذي تمتصه النباتات من الغلاف الجوي؟",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    arOptions: ["الأكسجين", "ثاني أكسيد الكربون", "النيتروجين", "الهيدروجين"],
    answer: 1,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "In which continent is Egypt located?",
    arQuestion: "في أي قارة تقع مصر؟",
    options: ["Asia", "Europe", "Africa", "South America"],
    arOptions: ["آسيا", "أوروبا", "أفريقيا", "أمريكا الجنوبية"],
    answer: 2,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "What is the chemical symbol for Gold?",
    arQuestion: "ما هو الرمز الكيميائي للذهب؟",
    options: ["Au", "Ag", "Fe", "Go"],
    arOptions: ["Au", "Ag", "Fe", "Go"], // الرموز نفسها
    answer: 0,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    arQuestion: "أي حيوان يُعرف بملك الغابة؟",
    options: ["Tiger", "Elephant", "Lion", "Bear"],
    arOptions: ["نمر", "فيل", "أسد", "دب"],
    answer: 2,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "Which instrument measures temperature?",
    arQuestion: "أي أداة تُستخدم لقياس درجة الحرارة؟",
    options: ["Barometer", "Thermometer", "Hygrometer", "Speedometer"],
    arOptions: ["البارومتر", "الترمومتر", "الهيجرومتر", "مقياس السرعة"],
    answer: 1,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
];




initLandingPage();

function initLandingPage() {
 if(localStorage.getItem("user`sQuestions")){
    shuffledQuestions = JSON.parse(localStorage.getItem("user`sQuestions"));
 }else{
   shuffledQuestions = shuffleArray(questions);
   localStorage.setItem("user`sQuestions", JSON.stringify(shuffledQuestions));
 }

  if(localStorage.getItem("markedQuestions")){
    var markedQuestionsArray = JSON.parse(localStorage.getItem("markedQuestions"));
    markedQuestionsSet = new Set(markedQuestionsArray);
    var markedQuestionslistItems = "";
    markedQuestionsSet.forEach((item) => {
      markedQuestionslistItems += `<li class="marked-question" onclick="toggleQuestion(${item})" >${isAr?"سؤال":"question"} ${
        item + 1
      }</li>`;
    });
    markedQuestions.innerHTML = markedQuestionslistItems;
  }

  // console.log(shuffledQuestions);
  // console.log(shuffledQuestions[0]);
  // console.log(answers);

  displayCurrentQuestion(shuffledQuestions[0], 0);
  startTimer();
  messageBox.classList.add("hidden");
}

function startTimer() {
  if(localStorage.getItem("timeLeft")){
    timeLeft = localStorage.getItem("timeLeft");
  }else{
    timeLeft = 240;
  }
  timer.textContent = timeLeft +" "+ (isAr?"ث":"s");
   timerInterval = setInterval(function () {
    if (timeLeft <= 0) {
      messageBox.classList.remove("hidden");
      messageCard.classList.remove("win-card");
      messageCard.classList.add("lose-card");
      cardTitle.textContent =  isAr? "لقد فشلت!": "You Faild!";
      message.textContent = isAr?"انتهى الوقت، حظًا أوفر في المرة القادمة.":"You`r out of time better luck next time.";
      clearInterval(timerInterval);
    }
    timer.textContent = timeLeft +" "+ (isAr?"ث":"s");
    timeLeft -= 1;
  }, 1000);
}

playAgainBtn.addEventListener("click", resetGame);

function resetGame() {
  markedQuestions.innerHTML = "";
  markedQuestionsSet.clear();
  localStorage.removeItem("user`sQuestions");
  localStorage.removeItem("markedQuestions");
  localStorage.removeItem("timeLeft");
  initLandingPage();
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function displayCurrentQuestion(question, qIndex) {
  currentIndex = qIndex;
  questionText.textContent = isAr?question.arQuestion : question.question;
  var tempQuistions = "";
  if (isAr) {
    question.arOptions.forEach((option, index) => {
      tempQuistions += `<button class="answer ${
        index == question.selectedOption ? "selected" : ""
        }" onclick="handleAnswerSelection(this,${index},${qIndex})">${option}</button>`;
      });
  }else{
    question.options.forEach((option, index) => {
      tempQuistions += `<button class="answer ${
        index == question.selectedOption ? "selected" : ""
        }" onclick="handleAnswerSelection(this,${index},${qIndex})">${option}</button>`;
      });
    }
  answers.innerHTML = tempQuistions;
  questionNav.innerHTML = `
  ${
    qIndex != 0
      ? `<button onclick="toggleQuestion(${
          qIndex - 1
        })" id="previous" class="nav-button">${isAr?"السابق":"Previous"}</button>`
      : ""
  }
  <p id="question-number" class="question-number">${qIndex + 1}</p>
  ${
    qIndex != 9
      ? `<button onclick="toggleQuestion(${
          qIndex + 1
        })" id="next" class="nav-button">${isAr?"التالي":"Next"}</button>`
      : ""
  }
`;

  markBtn.innerHTML = `<button id="mark" class="mark-button" onclick="toggelMarkQuestion(${qIndex})" >${
    markedQuestionsSet.has(qIndex) ? (isAr?"الغاء التحديد":`Un Mark`) : (isAr?"تحديد":`Mark`)
  }</button>`;
}

function handleAnswerSelection(el, selectedIndex, qIndex) {
  console.log(el, selectedIndex);

  document.querySelectorAll(".answer").forEach((btn) => {
    btn.classList.remove("selected");
  });
  el.classList.add("selected");
  shuffledQuestions[qIndex].isAnswered = true;

  shuffledQuestions[qIndex].selectedOption = selectedIndex;
  if (selectedIndex === shuffledQuestions[qIndex].answer) {
    shuffledQuestions[qIndex].isCorrect = true;
  } else {
    shuffledQuestions[qIndex].isCorrect = false;
  }
  console.log(selectedIndex);

  console.log(shuffledQuestions);
  localStorage.setItem("user`sQuestions", JSON.stringify(shuffledQuestions));
}
function toggleQuestion(newIndex) {
  displayCurrentQuestion(shuffledQuestions[newIndex], newIndex);
}

function toggelMarkQuestion(qIndex) {
  var markedQuestionslistItems = "";
  if (markedQuestionsSet.has(qIndex)) {
    markedQuestionsSet.delete(qIndex);
    markedQuestionsSet.forEach((item) => {
      // console.log(item);
      markedQuestionslistItems += `<li class="marked-question" onclick="toggleQuestion(${item})" >${isAr?"سؤال":"question"} ${
        item + 1
      }</li>`;
    });
  } else {
    markedQuestionsSet.add(qIndex);
    markedQuestionsSet.forEach((item) => {
      // console.log(item);

      markedQuestionslistItems += `<li class="marked-question" onclick="toggleQuestion(${item})" >${isAr?"سؤال":"question"} ${
        item + 1
      }</li>`;
    });
  }
  markedQuestions.innerHTML = markedQuestionslistItems;
  markBtn.innerHTML = `<button id="mark" class="mark-button" onclick="toggelMarkQuestion(${qIndex})" >${
    markedQuestionsSet.has(qIndex) ? (isAr?"الغاء التحديد":`Un Mark`) : (isAr?"تحديد":`Mark`)
  }</button>`;
  localStorage.setItem("markedQuestions", JSON.stringify([...markedQuestionsSet]));
}

submitBtn.addEventListener("click", function(){
  clearInterval(timerInterval);
  var correctAnswersCount = 0;
  shuffledQuestions.forEach((question) => {
    if (question.isCorrect) {
      correctAnswersCount++;
    }
    question.isCorrect= false;
    question.isAnswered= false;
    question.selectedOption= null;

  });
  if(correctAnswersCount < 5){
    messageBox.classList.remove("hidden");
    messageCard.classList.remove("win-card");
    messageCard.classList.add("lose-card");
    cardTitle.textContent = isAr? "لقد فشلت!": "You Faild!";;
    message.textContent = isAr? `لقد أجبت بشكل صحيح على ${correctAnswersCount} فقط من أصل ${shuffledQuestions.length} سؤال.`: `You answered ${correctAnswersCount} only out of ${shuffledQuestions.length} questions correctly.`;
  }else{

  messageBox.classList.remove("hidden");
    messageCard.classList.remove("lose-card");

  messageCard.classList.add("win-card");
  cardTitle.textContent = isAr? "لقد نجحت!":"You Finished!";
  message.textContent = isAr?`لقد أجبت بشكل صحيح على ${correctAnswersCount} من أصل ${shuffledQuestions.length} سؤال.`: `You answered ${correctAnswersCount} out of ${shuffledQuestions.length} questions correctly.`;
  }


});

window.addEventListener("beforeunload", function () {
  localStorage.setItem("timeLeft", timeLeft);

  clearInterval(timerInterval);
});


function translatePage(lang) {
  currentLang = lang;

  if (lang === "en") {
    isAr = false;
    document.dir = "ltr";
  } else {
    isAr = true;
    document.dir = "rtl";
  }

  displayCurrentQuestion(shuffledQuestions[currentIndex], currentIndex);

  var markedQuestionslistItems = "";
  markedQuestionsSet.forEach((item) => {
    markedQuestionslistItems += `<li class="marked-question" onclick="toggleQuestion(${item})" >${isAr?"سؤال":"question"} ${
      item + 1
    }</li>`;
  });
  markedQuestions.innerHTML = markedQuestionslistItems;

    document.getElementById("submit").textContent = translations[lang].submit;
  document.getElementById("play-again").textContent = translations[lang].playAgin;

}
window.addEventListener("storage", (e) => {
  if (e.key === "currLang" && e.newValue) {
    translatePage(e.newValue);
  }
});

translatePage(currentLang);
