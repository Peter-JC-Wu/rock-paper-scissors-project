/*
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. 
The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
*/

const getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  };
};

const getComputerChoice = function () {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
  };
};

const determineWinner = function (userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'The user won. Bomb always win, no matter what!';
  }

  if (userChoice === computerChoice) {
    return 'The game was a tie.';
  }; 
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won.';
    } else {
      return 'The user won.';
    };
  };

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won.';
    } else {
      return 'The user won.';
    };
  };

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won.';
    } else {
      return 'The user won.';
    };
  };
};

const playGame = function () {
  const userChoice = getUserChoice ('bomb');
  const computerChoice = getComputerChoice ();
  console.log(`The user has chosen: ${userChoice}.`);
  console.log(`The computer has chosen: ${computerChoice}.`);
  console.log(determineWinner (userChoice, computerChoice));
};

console.log(playGame ());
