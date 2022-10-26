// CREATE A COUNTDOWN TIMER
let timerEl = document.querySelector(".nav");

let secondsLeft = 76;

function timer() {
    let countdown = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
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
let questionsEl = document.querySelector(".questionText");

let welcomeText = questionsEl.textContent = "Coding quiz challenge";
let answerBtns = document.getElementsByClassName("btnOne","btnTwo","btnThree","btnFour")

// When I click the start button the timer begins and the first set of questions appear, as start button disappears
startBtn.addEventListener("click", function () {
    startBtn.style.display = "none";
    btnOne.style.display = "block"
    btnOne.textContent = "String"
    btnTwo.style.display = "block"
    btnTwo.textContent = "Number"
    btnThree.style.display = "block"
    btnThree.textContent = "Boolean"
    btnFour.style.display = "block"
    btnFour.textContent = "Object"
    timer();
})    

// When I click a button it will store the answer given true or false
let selectedAnswerBtn = ["btnOne","btnTwo","btnThree","btnFour"]


let questOne = "Which data type returns a true or false value?"
let questTwo = "What element is used to make the code more readable?"
let questThree = "Arrays must be enclosed within.."
let questFour = "Strings cannot be concatinated."
let questFive = "Which of the following is a block of code used to perform a specific task?"







    // questionsEl.textContent = "Which data type returns a true or false value?";




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
