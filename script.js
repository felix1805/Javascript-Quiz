var startEl = document.querySelector('#start');
var gameEl = document.querySelector('#game');
var endEl = document.querySelector('#end');
var questionsEl = document.querySelector('#questions');
var timerEl = document.querySelector('#remainingTime');


var startBtn = document.querySelector('#start');
var initialsInput = document.querySelector('#initials');

var cursor = 0;

var questions = [
  {
    displaytext: "What scale of measurement is used for Wind Speed?",
    possible: [
      "Richter Scale",
      "Beaufort Scale",
      "Geiger Scale",
      "Moton Scale",
    ],
    correct: 2
  },
  {
    text: "Which country gifted the United States the Statue of Liberty?",
    possible: [
      "Germany",
      "Argentina",
      "France",
      "Egypt",
    ],
    correct: 3
  },
  {
    text: "Which Autmotive company exports the most vehicles from the United States?",
    possible: [
      "BMW",
      "General Motors",
      "Ford",
      "Chrysler",
    ],
    correct: 0
  }
];

function startScreen() {
  startEl.style.display = "block";
  gameEl.style.display = "none";
  endEl.style.display = "none";
}

function gameScreen() {
  startEl.style.display = "none";
  gameEl.style.display = "block";
  endEl.style.display = "none";
  renderQuestion();
}

function renderQuestion() {
  var question = questions[cursor];

  for (var i = 0; i < question.possible.length; i++) {
    var item = question.possible[i];
    var answerBtn = document.createElement('button');
    answerBtn.textContent = i + 1 + ". " + item;
    gameEl.appendChild(answerBtn);
  }
}

function endScreen() {
  startEl.style.display = "none";
  gameEl.style.display = "none";
  endEl.style.display = "block";
}

function init() {  // || denotes "or" in a function   when pulling and pushing info through JSON, stringify goes "in", parse goes "out".
  startScreen();
}

startBtn.addEventListener('click', gameScreen);
gameEl.addEventListener('click', function (event) {
  if (event.target.matches('button')) {
    console.log(event.target);
    cursor++;
    if (cursor < questions.length) {
      renderQuestion();
    } else {
      endScreen();
    }
  }
});

var timeRemaining = 10;
timerEl.textContent = timeRemaining + " Seconds Left";
function printtimeRemaining() {
  timerEl.textContent = timeRemaining = " Seconds Left";
}

function setTimer() {
  printtimeRemaining();
  var timerInt = setInterval(function () {
    timeRemaining--;

    printtimeRemaining();

    if (timeRemaining <= 0) {
      clearInterval(timerInt);
      endScreen();
    }
  }, 1000);
}

endEl.addEventListener('submit', handleInitialSubmit);
init();