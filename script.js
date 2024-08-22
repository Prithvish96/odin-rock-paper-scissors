let humanScore = 0;
let computerScore = 0;

// ============================================================================================

let getComputerChoice = () => {
  let choiceNumber;
  choiceNumber = Math.floor(Math.random() * 3);
  switch (choiceNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
  }
};

// =============================================================================================

let getHumanChoice = () => {
  let humanChoice = prompt("Choose rock, paper or scissor");
  humanChoice = humanChoice.toLowerCase();

  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissor"
  ) {
    return humanChoice;
  } else {
    alert("Incorrect input. Please try again");
    return getHumanChoice();
  }
};

// ===========================================================================================

let playRound = (humanChoice, computerChoice) => {
  if (humanChoice === "rock") {
    switch (computerChoice) {
      case "rock":
        humanScore += 0;
        computerScore += 0;
        alert(
          `It's a tie! \nRock against Rock. \n\nYour score: ${humanScore} \nComputer score: ${computerScore}`
        );
        break;
      case "paper":
        humanScore += 0;
        computerScore += 1;
        alert(
          `You lose! \nPaper covers Rock. \n\nYour score: ${humanScore} \nComputer score: ${computerScore}`
        );
        break;
      case "scissor":
        humanScore += 1;
        computerScore += 0;
        alert(
          `You win! \nRock breaks Scissor. \n\nYour score: ${humanScore} \nComputer score: ${computerScore}`
        );
    }
  } else if (humanChoice === "paper") {
    switch (computerChoice) {
      case "rock":
        humanScore += 1;
        computerScore += 0;
        alert(
          `You win! \nPaper covers Rock. \n\nYour score: ${humanScore} \nComputer score: ${computerScore}`
        );
        break;
      case "paper":
        humanScore += 0;
        computerScore += 0;
        alert(
          `It's a tie! \nPaper against Paper. \n\nYour score: ${humanScore} \nComputer score: ${computerScore}`
        );
        break;
      case "scissor":
        humanScore += 0;
        computerScore += 1;
        alert(
          `You lose! \nScissor cuts Paper. \n\nYour score: ${humanScore} \nComputer score: ${computerScore}`
        );
    }
  } else if (humanChoice === "scissor") {
    switch (computerChoice) {
      case "rock":
        humanScore += 0;
        computerScore += 1;
        alert(
          `You lose! \nRock breaks Scissor. \n\nYour score: ${humanScore} \nComputer score: ${computerScore}`
        );
        break;
      case "paper":
        humanScore += 1;
        computerScore += 0;
        alert(
          `You win! \nScissor cuts Paper. \n\nYour score: ${humanScore} \nComputer score: ${computerScore}`
        );
        break;
      case "scissor":
        humanScore += 0;
        computerScore += 0;
        alert(
          `It's a tie! \nScissor against Scissor. \n\nYour score: ${humanScore} \nComputer score: ${computerScore}`
        );
    }
  }
};

// =======================================================================================
let playGame = () => {
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  let finalResult;
  if (humanScore > computerScore) {
    alert(
      `You won!\n\nFinal Scores:\nYou: ${humanScore}\nComputer: ${computerScore}`
    );
  } else {
    alert(
      `You lost!\n\nFinal Scores:\nYou: ${humanScore}\nComputer: ${computerScore}`
    );
  }
};

// ========================================================================================

playGame();
