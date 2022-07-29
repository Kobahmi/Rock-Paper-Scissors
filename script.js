const restartDisplay = document.querySelector("#restart")
const resultDisplay = document.querySelector("#result")
const displayPlayerChoice = document.querySelector("#player-choice")
const displayComputerChoice = document.querySelector("#computer-choice")
const displayPlayerScore = document.querySelector("#playerScore")
const displayComputerScore = document.querySelector("#computerScore")
const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")
const computerSelect = document.querySelector(".butt")

const choices = ["rock", "paper", "scissors"]

let userChoice
let userScore = 0
let computerChoice
let computerScore = 0


rockBtn.addEventListener("click", userPlay) //Player Choice
paperBtn.addEventListener("click", userPlay)
scissorsBtn.addEventListener("click", userPlay)

function userPlay(e) {
if (e.target.id == "rock") {
    displayPlayerChoice.innerHTML = "rock"
    playRound("rock")
} else if (
    e.target.id == "paper") {
    displayPlayerChoice.innerHTML = "paper"
    playRound("paper")
} else if (
    e.target.id == "scissors") {
    displayPlayerChoice.innerHTML = "scissors"
    playRound("scissors")
    }
}


function computerPlay() { //Computer choice
    choice = choices[Math.floor(Math.random() * choices.length)];
    displayComputerChoice.innerHTML = choice;
    return choice;
}


function playRound(pick) { //Game starts after player makes choice. First to score 5 wins
computerChoice = computerPlay();

checkRules(pick, computerChoice)

if (userScore === 5) {
resultDisplay.textContent = " You won vs the computer!"
rockBtn.disabled = true;
paperBtn.disabled = true;
scissorsBtn.disabled = true;
restartDisplay.classList.remove("disable")
}

else if (computerScore === 5) {
resultDisplay.textContent = " You lost vs the computer!"
rockBtn.disabled = true;
paperBtn.disabled = true;
scissorsBtn.disabled = true;
restartDisplay.classList.remove("disable")
}
}


function checkRules(userChoice, computerChoice) { //Rules of the game
    if (userChoice === computerChoice) {
        resultDisplay.innerHTML = " Tie!"
    } else if (
        (userChoice === "rock" && computerChoice === "scissors" ||
        userChoice === "paper" && computerChoice === "rock" ||
        userChoice === "scissors" && computerChoice === "paper")) {
            userScore++
            displayPlayerScore.innerHTML = userScore
            resultDisplay.innerHTML = " You win!"
    } else {
            computerScore++
            displayComputerScore.innerHTML = computerScore
            resultDisplay.innerHTML = " You lose!"
        }
}


//Make restart button restart the game by reloading the page instead
//restartDisplay.addEventListener("click", () => {
//window.location.reload()})

restartDisplay.addEventListener("click", () => { //Full reset without reloading page
userScore = 0
computerScore = 0
displayComputerScore.innerHTML = "0"
displayPlayerScore.innerHTML = "0"
displayComputerChoice.innerHTML = ""
displayPlayerChoice.innerHTML = ""
resultDisplay.innerHTML = ""
rockBtn.disabled = false;
paperBtn.disabled = false;
scissorsBtn.disabled = false;
restartDisplay.classList.add("disable")
})

