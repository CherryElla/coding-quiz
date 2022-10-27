// Questions data - objects with questiona and answers
let questions = [
    {
        question: "Which data type returns a true or false value?",
        answer: ["String", "Number", "Boolean", "Object"],
        correctIndex: 2,
    },
    {
        question: "Which element is used to make the code more readable?",
        answer: ["Notes", "Lines", "Arrays", "Comments"],
        correctIndex: 3
    },
    {
        question: "Arrays must be enclosed within..",
        answer: ["Curley brackets", "Commas", "Exclamations", "Brackets"],
        correctIndex: 3
    },
    {
        question: "Strings cannot be concatenated.",
        answer: ["True", "False"],
        correctIndex: 1,
    },
    {
        question: "Which of the following is a block of code used to perform a specific task?",
        answer: ["Function", "Object", "Window", "Array"],
        correctIndex: 0

    }
];

// Set all global variables
let seconds = 76; // Starting time
let currentQuestionIdx = 0 // Keep track of current question
let timerElement = document.querySelector(".nav"); // Link to navbar
let allAnswerBtns = document.querySelectorAll(".answerBtn"); // Link to ALL anser buttons
let displayWrongOrRight = document.querySelector(".footer"); // Link to footer for whether answer was right
// Event listeners
startBtn.addEventListener('click', startQuiz);

// Start quiz function
function startQuiz() {
    startBtn.hidden = true;
    questionCard.hidden = false; // Reveals whole div with questions
    timer();
    displayQuestion(); // Call the displayQuestion function

}

// Timer function
function timer() {
    let countdown = setInterval(function () {
        seconds--;
        timerElement.textContent = "Time: " + seconds;
        if (seconds === 0) {
            clearInterval(countdown);
        }
    }, 1000);
}

// Next question function
function displayQuestion(question) {
    document.querySelector("#questionText").textContent = currentQuestionIdx + question.text;
    for (let i = 0; i < allAnswerBtns.length; i++) {
        if (i < question.answers.length) {
            allAnswerBtns[i].textContent = question.answers[i];
        }
    }
}










// CREATE A POINTS CALCULATOR
let scoreFinal = 0

function score(chosenAnswer, correctAnswer) {
    if (chosenAnswer === correctAnswer) {
        scoreFinal++
        displayWrongOrRight.textContent = "Correct!";
    } else {
        displayWrongOrRight.textContent = "Wrong!";
    }
}

