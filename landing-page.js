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
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 1,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "Who wrote the play 'Hamlet'?",
    options: [
      "Mark Twain",
      "William Shakespeare",
      "Charles Dickens",
      "Leo Tolstoy",
    ],
    answer: 1,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: 3,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["50°C", "100°C", "150°C", "200°C"],
    answer: 1,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 1,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "In which continent is Egypt located?",
    options: ["Asia", "Europe", "Africa", "South America"],
    answer: 2,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "What is the chemical symbol for Gold?",
    options: ["Au", "Ag", "Fe", "Go"],
    answer: 0,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Elephant", "Lion", "Bear"],
    answer: 2,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
  {
    question: "Which instrument measures temperature?",
    options: ["Barometer", "Thermometer", "Hygrometer", "Speedometer"],
    answer: 1,
    isCorrect: false,
    isAnswered: false,
    selectedOption: null,
  },
];

var shuffledQuestions = [];

initLandingPage();

function initLandingPage() {
  shuffledQuestions = shuffleArray(questions);
  // console.log(shuffledQuestions);
  // console.log(shuffledQuestions[0]);
  // console.log(answers);

  displayCurrentQuestion(shuffledQuestions[0], 0);
  startTimer();
  messageBox.classList.add("hidden");
}

function startTimer() {
  var timeLeft = 240;
   timerInterval = setInterval(function () {
    if (timeLeft <= 0) {
      messageBox.classList.remove("hidden");
      messageCard.classList.remove("win-card");
      messageCard.classList.add("lose-card");
      cardTitle.textContent = "You Faild!";
      message.textContent = "You`r out of time better luck next time.";
      clearInterval(timerInterval);
    }
    timer.textContent = timeLeft + "s";
    timeLeft -= 1;
  }, 1000);
}

playAgainBtn.addEventListener("click", resetgame);

function resetgame() {
  markedQuestions.innerHTML = "";
  markedQuestionsSet.clear();
  initLandingPage();
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function displayCurrentQuestion(question, qIndex) {
  questionText.textContent = question.question;
  var tempQuistions = "";
  question.options.forEach((option, index) => {
    tempQuistions += `<button class="answer ${
      index == question.selectedOption ? "selected" : ""
    }" onclick="handleAnswerSelection(this,${index},${qIndex})">${option}</button>`;
  });
  answers.innerHTML = tempQuistions;
  questionNav.innerHTML = `
  ${
    qIndex != 0
      ? `<button onclick="toggleQuestion(${
          qIndex - 1
        })" id="previous" class="nav-button">Previous</button>`
      : ""
  }
  <p id="question-number" class="question-number">${qIndex + 1}</p>
  ${
    qIndex != 9
      ? `<button onclick="toggleQuestion(${
          qIndex + 1
        })" id="next" class="nav-button">Next</button>`
      : ""
  }
`;

  markBtn.innerHTML = `<button id="mark" class="mark-button" onclick="toggelMarkQuestion(${qIndex})" >${
    markedQuestionsSet.has(qIndex) ? `Un Mark` : `Mark`
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
      markedQuestionslistItems += `<li class="marked-question" onclick="toggleQuestion(${item})" >question ${
        item + 1
      }</li>`;
    });
  } else {
    markedQuestionsSet.add(qIndex);
    markedQuestionsSet.forEach((item) => {
      // console.log(item);

      markedQuestionslistItems += `<li class="marked-question" onclick="toggleQuestion(${item})" >question ${
        item + 1
      }</li>`;
    });
  }
  markedQuestions.innerHTML = markedQuestionslistItems;
  markBtn.innerHTML = `<button id="mark" class="mark-button" onclick="toggelMarkQuestion(${qIndex})" >${
    markedQuestionsSet.has(qIndex) ? `Un Mark` : `Mark`
  }</button>`;
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
    cardTitle.textContent = "You Faild!";
    message.textContent = `You answered ${correctAnswersCount} only out of ${shuffledQuestions.length} questions correctly.`;
  }else{

  messageBox.classList.remove("hidden");
    messageCard.classList.remove("lose-card");

  messageCard.classList.add("win-card");
  cardTitle.textContent = "You Finished!";
  message.textContent = `You answered ${correctAnswersCount} out of ${shuffledQuestions.length} questions correctly.`;
  }
});
