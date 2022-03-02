const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

// get the click event
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    // get the button clicked id
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    // invoke the generate computer choice function
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3); //
  //   if (randomNumber === 1) {
  //     computerChoice = "rock";
  //   }
  //   if (randomNumber === 2) {
  //     computerChoice = "scissors";
  //   }
  //   if (randomNumber === 3) {
  //     computerChoice = "paper";
  //   }

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "its a draw!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lost!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lost!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You lost!";
  }

  resultDisplay.innerHTML = result;
}
