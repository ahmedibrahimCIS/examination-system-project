var timer = document.getElementById("time");
var messageBox = document.getElementById("message-box");
var messageCard = document.getElementById("message-card");
var status = document.getElementById("status");
var message = document.getElementById("message");

initLandingPage();

function initLandingPage() {
  startTimer();
}

function startTimer() {
  var timeLeft = 30;
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
