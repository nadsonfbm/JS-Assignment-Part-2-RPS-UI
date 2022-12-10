const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const playerWinsDisplay = document.getElementById('player-wins');
const computerWinsDisplay = document.getElementById('computer-wins');
const drawsDisplay = document.getElementById('draws');
let userChoice;
let computerChoice;
let result;
let playerWins = 0;
let computerWins = 0;
let draws = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    computerPlay();
    playRound();
}))

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
      computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
      computerChoice = 'Scissor'
    }
    if (randomNumber === 3) {
      computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
  }

let win = "Great choice! Rock crushes Scissor! You won the round!";
let loss = "Oh no! Paper covers Rock! You lost the round!";
let draw = "Two heads thinking alike. It's a tied round.";

function playRound() {
    if (userChoice === "Rock" && computerChoice === "Paper") {
        result = loss;
    }
    if (userChoice === "Rock" && computerChoice === "Scissor") {
        result = win;
    }
    if (userChoice === "Scissor" && computerChoice === "Rock") {
        result = loss;
    }
    if (userChoice === "Scissor" && computerChoice === "Paper") {
        result = win;
    }
    if (userChoice === "Paper" && computerChoice === "Scissor") {
        result = loss;
    }
    if (userChoice === "Paper" && computerChoice === "Rock") {
        result = win;
    }
    if (userChoice === computerChoice) {
        result = draw;
    }
    resultDisplay.innerHTML = result;
}

function results() {
        if (result === win){
            playerWinsDisplay.innerHTML = playerWins;
            playerWins + 1;
        } 
        if (result === loss){
            computerWinsDisplay.innerHTML = computerWins;
            computerWins + 1;
        }
        if (result === draw){
            drawsDisplay.innerHTML = draws;
            draws + 1;
        }
}