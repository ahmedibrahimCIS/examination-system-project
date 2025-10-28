var timer = document.getElementById("time");
var messageBox = document.getElementById("message-box");
var messageCard = document.getElementById("message-card");
var status = document.getElementById("status");
var message = document.getElementById("message");
var playAgainBtn = document.getElementById("play-again");
var questionText = document.getElementById("question");
var answers = document.getElementById('answers');


var questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
    isCorrect: false,
    isAnswered: false,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
    isCorrect: false,
    isAnswered: false,
  },
  {
    question: "Who wrote the play 'Hamlet'?",
    options: ["Mark Twain", "William Shakespeare", "Charles Dickens", "Leo Tolstoy"],
    answer: "William Shakespeare",
    isCorrect: false,
    isAnswered: false,
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
    isCorrect: false,
    isAnswered: false,
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["50°C", "100°C", "150°C", "200°C"],
    answer: "100°C",
    isCorrect: false,
    isAnswered: false,
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
    isCorrect: false,
    isAnswered: false,
  },
  {
    question: "In which continent is Egypt located?",
    options: ["Asia", "Europe", "Africa", "South America"],
    answer: "Africa",
    isCorrect: false,
    isAnswered: false,
  },
  {
    question: "What is the chemical symbol for Gold?",
    options: ["Au", "Ag", "Fe", "Go"],
    answer: "Au",
    isCorrect: false,
    isAnswered: false,
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Elephant", "Lion", "Bear"],
    answer: "Lion",
    isCorrect: false,
    isAnswered: false,
  },
  {
    question: "Which instrument measures temperature?",
    options: ["Barometer", "Thermometer", "Hygrometer", "Speedometer"],
    answer: "Thermometer",
    isCorrect: false,
    isAnswered: false,
  },
];


initLandingPage();

function initLandingPage() {
    var shuffledQuestions = shuffleArray(questions);
    console.log(shuffledQuestions);
    console.log(shuffledQuestions[0]);
    console.log(answers);
    
    
    displayCurrentQuestion(shuffledQuestions[0]);
  startTimer();
  messageBox.classList.add("hidden");
}

function startTimer() {
  var timeLeft = 15;
  var timerInterval = setInterval(function () {
    if (timeLeft <= 0) {
      messageBox.classList.remove("hidden");
      messageCard.classList.remove("win-card");
      messageCard.classList.add("lose-card");
      status.textContent = "You Lost!";
      message.textContent = "You`r out of time better luck next time.";
      clearInterval(timerInterval);
    }
    timer.textContent = timeLeft + "s";
    timeLeft -= 1;
  }, 1000);
}

playAgainBtn.addEventListener("click", initLandingPage);

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function displayCurrentQuestion(question) {

questionText.textContent = question.question;
var tempQuistions =''
question.options.forEach((q, index) => {
  tempQuistions += `<button class="answer">${q}</button>`;
}
);
answers.innerHTML = tempQuistions
}

