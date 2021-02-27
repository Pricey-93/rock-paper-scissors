function computerPlay() {
    let result = Math.floor(Math.random() * Math.floor(3));
    if (result === 0) return "rock";
    else return (result === 1) ? "paper" : "scissors";
}
function playRound(playerSelection, computerSelection) {
    let winningMessage = "You won!, " + playerSelection + " beats " + computerSelection + " !";
    let losingMessage = "You lost!, " + computerSelection + " beats " + playerSelection + " !";

    if (playerSelection === computerSelection)
        return "Draw !";
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) 
        return winningMessage;
    else 
        return losingMessage;
}
function game() {
    let temp;
    let playerSelection;
    let computerSelection;
    temp = prompt("Choose your weapon: rock, paper or scissors?", "rock");
    playerSelection = temp.toLowerCase();
    computerSelection = computerPlay();
    return playRound(playerSelection, computerSelection);  
}
    console.log(game());
    console.log(game());
    console.log(game());
    console.log(game());
    console.log(game());