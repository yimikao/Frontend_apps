//MODEL
var questions = [
    {
        question: 'What is the baby of a moth known as?',
        choices: ['baby', 'infant', 'kit', 'larva'],
        correctAnswer: 3
    },
    {
        question: 'What is the adult of a kid called?',
        choices: ['calf', 'doe', 'goat', 'chick'],
        correctAnswer: 2
    },
    {
        question: 'What is the young of buffalo called?',
        choices: ['calf', 'baby', 'pup', 'cow'],
        correctAnswer: 0
    },
    {
        question: 'What is a baby alligator called?',
        choices: ['baby', 'gator', 'hatchling', 'calf'],
        correctAnswer: 1
    },
    {
        question: 'What is a baby goose called?',
        choices: ['gooser', 'gosling', 'gup', 'pup'],
        correctAnswer: 1
    }
];

//VIEW
let questionSpace = document.querySelector('.question');
let choiceSpace = document.querySelector('.choiceList');
let msgSpace = document.querySelector('.quizMessage');
let resultSpace = document.querySelector('.result');
let button = document.querySelector('.nextButton');

//CONTROLLER
let currentQuestion = 0;
let correctAnswers = 0;
let numChoices = questions[currentQuestion].choices.length;
let quizOver = false;

function DisplayCurrentQuestion() {
    let question = questions[currentQuestion].question;
    questionSpace.innerHTML = question;
    choiceSpace.innerHTML = "";
    let choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        let li = document.createElement('li');
        li.innerHTML = `<li><input type="radio" value=${i}/>${choice}</li>`

        choiceSpace.appendChild(li);
    }
}
function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function hideScore() {
    resultSpace.style.display = 'none'
}

window.addEventListener('DOMContentLoaded', function () {
    DisplayCurrentQuestion();

    msgSpace.style.display = 'none';

    button.addEventListener('click', function () {
        //this is the beginning of the quiz
        //state(quizOver is false here,and its value is negated to allow condition pass thru)
        if (!quizOver) {
            let checkedOption = document.querySelector('input[type=radio]:checked');
            if (checkedOption === null) {
                msgSpace.innerHTML = 'Please select an answer';
                msgSpace.style.display = 'block';
            }else {
                msgSpace.style.display = 'none';
                if (parseInt(checkedOption.value) === questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                    console.log(correctAnswers)
                }
                currentQuestion++;

                //if questions are still remaining
                if (currentQuestion < questions.length) {
                    DisplayCurrentQuestion();
                }else {
                    //if questions have finished
                    //quizOver will be true
                    displayScore();
                    document.querySelector('.nextButton').innerText = 'Play Again?';
                    quizOver = true;
                }
            }
                
        }
        else {
            //if you click playagain from above(!quizOver = false, there running this else section)
            //quiz will be initialized
            quizOver = false;
            document.querySelector('.nextButton').innerText = 'Next Question';
            resetQuiz();
            displayCurrentQuestion();
            hideScore(); 
            
        }
    });

});


function displayScore() {
    resultSpace.innerHTML = `You scored ${correctAnswers} out of ${questions.length}`;
    resultSpace.style.display = 'block';
}