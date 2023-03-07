/* global variables */
let playerScore = 0;
let computerScore = 0;
let roundCount =0;

/* the three play options */
const choices = ['rock', 'paper', 'scissors'];

/* randomly returns one of the three play options */
function getComputerChoice() {
  let coputerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
  return computerChoice;
} 

/* solicits player choice of the options, w/validation */
function getPlayerChoice() {
  let playerChoice = "";
  while (!choices.includes(playerChoice)) {
    playerChoice = prompt("Choose: Rock, Paper, or Scissors").toLocaleLowerCase();
  }
  return playerChoice;
}

/* plays single round and returns winner */
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors' ||
      playerSelection === 'paper' && computerSelection === 'rock' ||
      playerSelection === 'scissors' && computerSelection === 'paper') 
        {
          playerScore++;
          alert(`You win! Current score is you: ${playerScore}, computer ${computerScore}.`);
        } 
  else if (playerSelection === computerSelection) {
    alert(`It's a tie. Current score is you: ${playerScore}, computer ${computerScore}.`);
        }
  else 
        {
          computerScore++;
          alert(`computer wins! Current score is you: ${playerScore}, computer ${computerScore}.`)  
        }
  roundCount++;
} 
  