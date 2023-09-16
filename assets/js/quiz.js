function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex]
}

Quiz.prototype.isEnded = function () {
  return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function (answer) {

  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }

  this.questionIndex++;
}

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.correctAnswer = function (choice) {
  return choice === this.answer;
}

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    var element = document.getElementById('question');
    element.innerHTML = quiz.getQuestionIndex().text;

    //show choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById('choice' + i);
      element.innerHTML = choices[i];

      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}


function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  }
}


function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById('progress');
  element.innerHTML = "<span>" + currentQuestionNumber + "-savol</span>" + "<span>Savollar:  " + quiz.questions.length + "ta</span>";
}


function showScores() {
  var gameOverHTML = "<h3 style='margin-top:150px; text-align:center;'>SIZNING NATIJANGIZ</h3>";
  gameOverHTML += "<div id='score'><span>SAVOLLAR SONI: " + quiz.questions.length + "ta</span><span class='info'>TO'G'RI JAVOBLAR: " + quiz.score + "ta</span></div>";
  var element = document.getElementById('quiz');
  element.innerHTML = gameOverHTML;
}


var questions = [
  new Question("2+2 amalini bajaring?", ["5", "8", "4", "20"], "4"),
  new Question("6+2 amalini bajaring?", ["5", "8", "4", "20"], "8"),
  new Question("18+2 amalini bajaring?", ["5", "8", "4", "20"], "20"),
  new Question("3+2 amalini bajaring?", ["5", "8", "4", "20"], "5"),
];

var quiz = new Quiz(questions);

populate();