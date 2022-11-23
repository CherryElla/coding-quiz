// Questions data - objects with questions, answers, index that's correct.
let questions = [
    {
        text: "Which data type returns a true or false value?",
        answers: ["String", "Number", "Boolean", "Object"],
        correctIndex: 2,
    },
    {
        text: "Which element is used to make the code more readable?",
        answers: ["Notes", "Lines", "Arrays", "Comments"],
        correctIndex: 3
    },
    {
        text: "Arrays must be enclosed within..",
        answers: ["Curley brackets", "Commas", "Exclamations", "Brackets"],
        correctIndex: 3
    },
    {
        text: "Strings cannot be concatenated.",
        answers: ["True", "False"],
        correctIndex: 1,
    },
    {
        text: "Which of the following is a block of code used to perform a specific task?",
        answers: ["Function", "Object", "Window", "Array"],
        correctIndex: 0

    }
];

// Global variables
let scoreCount = 0
let seconds = 76; // Starting time
let currentQuestionIdx = 0 // Keep track of current question
let timerPenalty = 2;
let allAnswerBtns = document.querySelectorAll(".answerBtn"); // Link to ALL anser buttons
let displayWrongOrRight = document.querySelector(".footer"); // Link to footer for whether answer was right

// Event listeners
startBtn.addEventListener('click', startQuiz);
for (let btn of allAnswerBtns) {
    btn.addEventListener('click', answerSelected);
}
saveButton.addEventListener('click', saveScore)

// Start quiz function
function startQuiz() {
    startBtn.hidden = true;
    questionCard.hidden = false; // Reveals whole div with questions
    timer();
    displayQuestion(questions[currentQuestionIdx]); // Call the displayQuestion function

}

// Timer function
function timer() {
    let countdown = setInterval(function () {
        seconds--;
        timerText.textContent = "Time: " + seconds;
        if (seconds === 0) {
            clearInterval(countdown);
        }
    }, 1000);
}

// Next question function
function displayQuestion(question) {
    document.querySelector("#questionText").textContent =
    currentQuestionIdx+1 + "- " + question.text;
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

// Trigger end of questions
function endQuiz() {
    startQuiz.hidden = false;
    questionCard.hidden = true;
    timerText.hidden = true;
    summary.hidden = false;
    result.textContent = scoreCount;
    displayWrongOrRight.hidden = true;
}

// A function where users can input their initials and save their score
function saveScore () {
    let initials = inputInitials.value
    console.log(initials)
    let finalScore = scoreCount
    let scoreObj = {
        initials: initials,
        score: finalScore,
        date: moment(),
    }
    let storageArr = readLocalStorage("scores")
    if (storageArr === null) {
        storageArr = []
    }
    storageArr.push(scoreObj);
    writeToLocalStorage("scores", storageArr)
    displayScores()
}

// Function to display scores
function displayScores () {
    let scores = readLocalStorage("scores")
    console.log(scores)
    scores = scores.map((scoreObj) => {
        let newScoreObj = {
            initials: scoreObj.initials,
            score: scoreObj.score,
            date: moment(scoreObj.date)
        }
        return newScoreObj
    })
    console.log(scores)
}

// Read local storage function
function readLocalStorage (key) {
    let value = localStorage.getItem(key);
    let json = JSON.parse(value);
    return json;
}

// Write to local storage function
function writeToLocalStorage (key, data) {
    let string = JSON.stringify(data);
    localStorage.setItem(key, string);
}