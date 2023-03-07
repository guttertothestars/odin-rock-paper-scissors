const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(); {
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
} 