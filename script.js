// CREATE A COUNTDOWN TIMER
let timerElement = document.querySelector(".nav");

let seconds = 76;

function timer() {
    let countdown = setInterval(function () {
        seconds--;
        timerElement.textContent = "Time: " + seconds;

        if (seconds === 0) {
            clearInterval(countdown);
        }
    }, 1000);
}

// Hide answer buttons for initial loadscreen
btnOne.style.display = "none"
btnTwo.style.display = "none"
btnThree.style.display = "none"
btnFour.style.display = "none"


// HTML link to question text
let questionsElement = document.querySelector(".questionText");

questionsElement.textContent = "Coding quiz challenge";


// When I click the start button the timer begins and the first set of questions appear, as start button disappears
startBtn.addEventListener("click", function () {
    startBtn.style.display = "none";
    btnOne.style.display = "block"
    btnTwo.style.display = "block"
    btnThree.style.display = "block"
    btnFour.style.display = "block"
    
    timer();
})    

// When I click a button it will store the answer given true or false
let selectedAnswerBtn = ["btnOne","btnTwo","btnThree","btnFour"]
let currentQuestionIdx = 0

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
        question: "Strings cannot be concatinated.",
        answer: []
    },
    {

    }
]

 

 
 
 "Which of the following is a block of code used to perform a specific task?"










// HTML doc answer buttons reference
let allAnswerBtns = document.querySelectorAll(".answerBtns")
// HTML doc footer reference
let trueOrFalse = document.querySelector(".footer")

for (let i = 0; i < allAnswerBtns.length; i++) {
    allAnswerBtns[i].addEventListener("click", function (event) {
        console.log(event.target.getAttribute("index"))
        let correctAnswer = getCorrectAnswerForCurrentQuestion();
        score(event.target.getAttribute("index"), correctAnswer); 
});
}


// CREATE A POINTS CALCULATOR
let scoreFinal = 0

function score(chosenAnswer, correctAnswer) {
    if (chosenAnswer === correctAnswer) {
        scoreFinal++
        trueOrFalse.textContent = "Correct!";
    } else {
        trueOrFalse.textContent = "Wrong!";
    }
}





// questionsEl.textContent = "What element is used to make the code more readable?";









// let questionThree = questionsEl.textContent = "Arrays must be enclosed within.."
// let questionFour = questionsEl.textContent = "Strings cannot be concatinated."
// let questionFive = questionsEl.textContent = "Which of the following is a block of code used to perform a specific task?"
