const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else { 
      console.log('Error: Invalid choice. Please choose rock, paper, scissors, or use the secret cheat code "bomb".');
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  const userChoice = getUserChoice('rock'); // Replace 'rock' with user input
  const computerChoice = getComputerChoice();
  console.log('User choice:', userChoice);
  console.log('Computer choice:', computerChoice);
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
      return 'User won with the secret cheat code "bomb"!';
    } else if (userChoice === computerChoice) {
      return 'The game is a tie!';
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'User won!';
    } else {
      return 'Computer won!';
    }
  }
  
  const winner = determineWinner(userChoice, computerChoice);
  console.log(winner);
  
