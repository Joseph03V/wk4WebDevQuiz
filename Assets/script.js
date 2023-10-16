/* All the questions for the quiz */
var questions = [
    {
    title: "which of the following is not a coding language?",
    choices: ["java", "spanish", "css", "html"],
    answer: "spanish",
    },

    {
    title: "What is the hexcode for the color white?",
    choices: ["#ffff", "#fffff", "#fff", "#ffffff"],
    answer: "#ffffff",
    },

    {
    title: "Which of these is the largest in size?",
    choices: ["h1" , "h2", "h3", "h4",],
    answer : "h1",
    },

    {
    title: "which operator is used for concatination?",
    choices: ["!=", "+=", "%", "&&"],
    answer : "+=",
    },

    {
    title: "How many items can be put in an array?",
    choices: ["1", "10", "unlimited", "none"],
    answer: "unlimited",
    },

    {
    title: "Why is js so hard?",
    choices: ["U suk", "ita get better", "skill issue", "wrong answer"],
    answer: "ita get better",
    },

    {
    title: "What does the S in ssh mean?",
    choices: ["secure", "banana", "secure but with a z", "salmonela"],
    answer: "secure",
    },
];

/* All the ids needed for the functions */
var startEl = document.getElementById('start');
var startButton = document.getElementById('startButton');
var questionsEl = document.getElementById('questions');
var questionTitleEl = document.getElementById('question-title');
var choicesEl = document.getElementById('choices');
var endEl = document.getElementById('end');
var finalScoreSpan = document.getElementById('final-score');
var initialsEl = document.getElementById('initials-input');
var submitButton = document.getElementById('submitButton');
var timerSpan = document.getElementById('timerspan');
var currentQuestion = 0;
var timer; 
var timeLeft = questions.length * 10;

/* starts the quiz */
function startQuiz(){
    startEl.setAttribute('class', 'hide');
    questionsEl.removeAttribute('class', 'hide');
    startTimer();
    question();
}

/* starts the timer */
function startTimer(){
    timer = setInterval(function(){
        timeLeft--;
        timerSpan.textContent = timeLeft;

        if(timer <= 0){
            quizEnd();
        }
    },1000);

}

/* actually makes the questions accesible by the start quiz function */
var currentQuestionIndex = 0;
function question(){
    var currentQuestion = questions[currentQuestionIndex];
    questionTitleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = '';
/* Hey look derick ! ++i instead of i++!!!!!!!!! */
/* Hey look derick ! ++i instead of i++!!!!!!!!! */
/* Hey look derick ! ++i instead of i++!!!!!!!!! */
    for(var i = 0 ; i < currentQuestion.choices.length; ++i){
        var choice = currentQuestion.choices[i];
        var choiceButton = document.createElement('button');
        choiceButton.setAttribute('class', 'button');
        choiceButton.setAttribute('value', choice);
        choiceButton.textContent = i + ". "+ choice;
        choicesEl.appendChild(choiceButton);
    }
}


function userChoice(event){
    var chosenButton = event.target;

    if (onclick.chosenButton.value !== questions[currentQuestionIndex].answer){
        timer -= 15;
    }else{ (time < 0)
        timer = 0;
    }
    timerSpan.textContent = timeLeft;
    currentQuestionIndex++

    if (timer <= 0 || currentQuestionIndex === questions.length){
        quizEnd();
    }else{
        getQuestion();
    }
}


function endQuiz(){
clearInterval(timer);
endEl.removeAttribute('class');
finalScoreSpan.textContent = time;
questionsEl.setAttribute('class', 'hide');
}


function highScore() {
var highscore = JSON.parse(window.localStorage.getItem('highscores'));
var newScore = {
    score : time,
    initialsEl: initialsEl,
};

highscore.push(newScore);
window.localStorage.setItem('highscores', JSON.stringify(highscores));

window.location.href = 'highscores.html';
}


function userInput(event) {
if (event.key === 'Enter'){
    saveHighscore();
}
}



submitButton.addEventListener('click', highScore);
startButton.addEventListener('click', startQuiz);
choicesEl.addEventListener('click', userChoice);
initialsEl.addEventListener('keyup',userInput);