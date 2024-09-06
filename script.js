const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resetButton = document.getElementById("resetButton");

// Initialize scores
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  // Generate a random choice for the computer
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  // Determine the result of the game
  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  }
  else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  // Update the display with the player's choice, computer's choice, and the result
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  // Remove any previous result text color
  resultDisplay.classList.remove("greenText", "redText");

  // Update scores and result text color based on the outcome
  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
  // Show the reset button after the first game
  resetButton.style.display = "block";
}

// Function to reset the game by clearing scores and results.
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  playerDisplay.textContent = "PLAYER: ";
  computerDisplay.textContent = "COMPUTER: ";
  resultDisplay.textContent = "";

  resetButton.style.display = "none";
}
