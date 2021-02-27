"use strict"
let playerScore = 0;
let computerScore = 0;

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
        (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        document.getElementById("player-score").textContent = playerScore;
        return winningMessage;
    }
    else 
        computerScore++;
        document.getElementById("computer-score").textContent = computerScore;
        return losingMessage;
}
function game() {
    let computerSelection;
    let playerSelection;
    const items = document.querySelectorAll(".weapon-selection");
    items.forEach(item => {
        item.addEventListener("click", (e) => {
            console.log(e.target);
            var temp = item.textContent;
            playerSelection = temp.toLocaleLowerCase();
            console.log(playerSelection);
            computerSelection = computerPlay();
            console.log(computerSelection);
            document.getElementById("result-text").textContent = playRound(playerSelection, computerSelection);
        })
    })
}
game();



