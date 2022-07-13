const choices = ["rock", "paper", "scissors"];
const winners = []

function game(){
    for(i = 1; i <= 5; i++){
    playRound(i)};
    logWins();
}

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*choices.length);
    return choices[randomNumber]
}

function playerChoice(){
    let input = prompt("Type rock, paper or scissors")
    while (input == null){
       input = prompt("Type rock, paper or scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check==false){
       input = prompt("Type rock, paper or scissors. Nothing else!");
       while (input == null){
        input = prompt("Type rock, paper or scissors");
       }
    input = input.toLowerCase();
    check = validateInput(input);
}
return input;
}

function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerPlay();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
}


function validateInput(x){
    return choices.includes(x)
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
      return "Tie";
    } else if (
      (choiceP === "rock" && choiceC == "scissors") ||
      (choiceP === "paper" && choiceC == "rock") ||
      (choiceP === "scissors" && choiceC == "paper")
    ) {
      return "Player";
    } else {
      return "Computer";
    }
  }

  function logWins(){
      let playerWins = winners.filter((item) => item == "Player");
      let computerWins = winners.filter((item) => item == "Computer");
      let ties = winners.filter((item) => item == "Tie");
      console.log("Results:")
      console.log("Player Wins:", playerWins);
      console.log("Computer Wins:", computerWins);
      console.log("Ties:", ties);
  }

  function logRound(playerChoice, computerChoice, winner, round){
      console.log("Round", round)
      console.log("Player Chose:", playerChoice)
      console.log("Computer Chose:", computerChoice)
      console.log(winner, "Won the round!")
      console.log("---------------------------------")
  }