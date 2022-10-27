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
let scoreCount = 0
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
            allAnswerBtns[i].hidden = false;
        } else {
            allAnswerBtns[i].hidden = true;
        }
    }
}

// Score function that checks if chosen answer is correct or wrong
function score(chosenAnswer, correctAnswer) {
    if (chosenAnswer == correctAnswer) {
        scoreCount++;
        displayWrongOrRight.textContent = 'Correct!';
    } else {
        displayWrongOrRight.textContent = 'Wrong!';
        seconds = seconds - timerPenalty;
    }
}

// Answer selected function that gets the index of the current quesetion, stores it,
// calls the score function passing in answer selected and current questions correct index,
// checking to see if matches.
function answerSelected(event) {
    let answerIndex = event.target.getAttribute('index');
    let currentQuestion = questions[currentQuestionIdx];
    score(answerIndex, currentQuestion.correctIndex);
// The next question is displayed -- plus one in the index
    currentQuestionIdx++;
    if (currentQuestionIdx < questions.length) { 
        displayQuestion(questions[currentQuestionIdx]);
    } else { 
        endQuiz(); 
}
}

