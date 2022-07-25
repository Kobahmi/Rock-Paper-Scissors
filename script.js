//spans first!
const computerChoiceDisplay = document.getElementById("computer-choice")
const playerChoiceDisplay = document.getElementById("player-choice")
const resultDisplay = document.getElementById("result")
const computerScore = document.getElementById("computerScore")
const playerScore = document.getElementById("playerScore")
const winnerDisplay = document.getElementById("winner")
const restartDisplay = document.getElementById("restart")
let userChoice
let computerChoice
let result
let playerPoint = 0;
let computerPoint = 0;


//now the possible choices
const possibleUserChoices = document.querySelectorAll(".pImg")
const possibleComputerChoices = document.querySelectorAll(".butt")


//now make the user and computer choices do something!
possibleUserChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e)=>{
   userChoice = e.target.id
   playerChoiceDisplay.innerHTML = userChoice;
//fight computer now that we have our choice
   MakeComputerChoice()
//see who wins
   getResult()


   
   if (
    (playerPoint === 5 || computerPoint === 5)
    ) {
    //display end results
    //change the button to visible,
    //change the text to display winner
    displayEnd();
  }
}))


function MakeComputerChoice() {//computer chooses randomly and then we associate it with "number===rockpaper or scissors"
    const choice = Math.floor(Math.random()*possibleComputerChoices.length)
  
    if (choice === 0){
        computerChoice = "rock"
    }
    if (choice === 1){
        computerChoice = "paper"
    }
    if (choice === 2){
        computerChoice = "scissors"
    }

    computerChoiceDisplay.innerHTML = computerChoice
    }

//game rules!
function getResult(){
    if (userChoice === computerChoice) {
        result = "Tie!";
    }
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
       ) 
    { 
        playerPoint += 1;
        result = "You win!";
    } else { 
        computerPoint += 1;
        result = "You lose!";
    }

    if (playerPoint > 5 || computerPoint > 5) {
        return;
    }
    playerScore.innerHTML = playerPoint
    computerScore.innerHTML = computerPoint
    resultDisplay.innerHTML = result
}


//show winner
function displayEnd(){
if (playerPoint === 5) {
    winnerDisplay.textContent = "You won THE GAME!!"
}
if (computerPoint === 5) {
    winnerDisplay.textContent = "You lose the GAME!!"
};
//MAKE RESTART APPEAR 
restartDisplay.classList.remove("disable");

//Stop player from playing more than 5 times  
possibleUserChoices.forEach(possibleChoice => possibleChoice.removeEventListener("click", (e)=>{
    userChoice = e.target.id
    playerChoiceDisplay.innerHTML = userChoice
}))

}




//Make restart button restart the game
restartDisplay.addEventListener("click", () =>{
window.location.reload();
}
)


