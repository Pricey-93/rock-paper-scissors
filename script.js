"use strict"
let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

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
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e);
    })
}
function gameOver() {
    return (playerScore > computerScore) ? "You won the game!" : "You lost the game!";
}
function reset() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}
function game() {
    let handler = function (e) {
        console.log(e.target);
        playerSelection = e.target.textContent.toLocaleLowerCase();
        computerSelection = computerPlay();
        document.getElementById("result-text").textContent = playRound(playerSelection, computerSelection);
        if (playerScore === 5 || computerScore === 5) {
            alert(gameOver());
            reset();
        }
    }
    addGlobalEventListener("click", ".weapon-selection", handler);
}
game();