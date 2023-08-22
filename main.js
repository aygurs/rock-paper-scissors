//Sets the default values for the first game
let playerScore = 0
let computerScore = 0
let roundNumber = 1
let gameActive = true

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

//Only allows 5 rounds to be played per game
function roundCheck() {
    if (roundNumber >= 5) {
        endGame();
    }
}

//Play again button clears the game information
//It also removes event listeners so they don't stack during each new game
const playAgainButton = document.querySelector('.again');
playAgainButton.addEventListener('click', function() {
    if (!gameActive) {
        const resultInfo = document.querySelector('.result');
        const choicePlayer = document.querySelector('.choicePlayer');
        const choiceComputer = document.querySelector('.choiceComputer');
        const endInfo = document.querySelector('.end');
        choicePlayer.textContent = '';
        choiceComputer.textContent = '';
        resultInfo.textContent = '';
        endInfo.textContent = '';
        rockButton.removeEventListener('click', handleRockClick);
        paperButton.removeEventListener('click', handlePaperClick);
        scissorsButton.removeEventListener('click', handleScissorsClick);
        const score = document.querySelector('.score');
        score.textContent = 'C: 0 P: 0';
        initializeGame();
    }
});

//I have declared these outside of initialiseGame() so
//they're on a Global scope and removeEventListener in play again will work
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
rockButton.addEventListener('click', handleRockClick);
paperButton.addEventListener('click', handlePaperClick);
scissorsButton.addEventListener('click', handleScissorsClick);

//Functions for what will occur once each button is pressed
function handleRockClick() {
        if (gameActive) {
            playRound('rock');
            roundCheck();
            roundNumber += 1;
        }
    };
    
function handlePaperClick() {
        if (gameActive) {
            playRound('paper');
            roundCheck();
            roundNumber += 1;
        }
    };
    
function handleScissorsClick() {
        if (gameActive) {
            playRound('scissors');
            roundCheck();
            roundNumber += 1;
        }
    };

function playRound(playerSelection) {
    
    const computerSelection = getComputerChoice();

    const resultInfo = document.querySelector('.result');

    const choicePlayer = document.querySelector('.choicePlayer');
    const choiceComputer = document.querySelector('.choiceComputer');
    choicePlayer.innerHTML = '&nbsp;' + capitalizeFirstLetter(playerSelection);
    choiceComputer.innerHTML = '&nbsp;' + capitalizeFirstLetter(computerSelection);

    if (playerSelection === computerSelection) {
        resultInfo.textContent = 'ROUND: ' + roundNumber + '\n You tied!'
    }

    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore += 1
            resultInfo.textContent = 'ROUND: ' + roundNumber + '\n You lose! Paper beats rock.'
        }
        else if (computerSelection === 'scissors') {
            playerScore += 1
            resultInfo.textContent = 'ROUND: ' + roundNumber + '\n You win! Rock beats scissors.'
        }
    }

    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore += 1
            resultInfo.textContent = 'ROUND: ' + roundNumber + '\n You win! Paper beats rock.'
        }
        else if (computerSelection === 'scissors') {
            computerScore += 1
            resultInfo.textContent = 'ROUND: ' + roundNumber + '\n You lose! Scissors beats paper.'
        }
    }

    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore += 1
            resultInfo.textContent = 'ROUND: ' + roundNumber + '\n You lose! Rock beats scissors.'
        }
        else if (computerSelection === 'paper') {
            playerScore += 1
            resultInfo.textContent = 'ROUND: ' + roundNumber + '\n You win! Scissors beats paper.'
        }
    }

    const score = document.querySelector('.score');
    score.textContent = 'C: ' + computerScore + ' P: ' + playerScore;
}

function getComputerChoice() {
    //Will return a random number between 1-3
    const randomChoice = Math.floor(Math.random() * ((3 - 1) + 1)) + 1;
    
    if (randomChoice === 1) {
        return 'rock'
    }

    if (randomChoice === 2) {
        return 'paper'
    }

    if (randomChoice === 3) {
        return 'scissors'
    }
}

initializeGame();

function initializeGame() {
    //Resets the game values again (mostly for when play again is pressed)
    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;
    gameActive = true;
    //Adds the event listeners again (for when play again is pressed)
    rockButton.addEventListener('click', handleRockClick);
    paperButton.addEventListener('click', handlePaperClick);
    scissorsButton.addEventListener('click', handleScissorsClick);

    getComputerChoice()
}


function endGame() {
    gameActive = false;
    const endInfo = document.querySelector('.end');
    endInfo.style.whiteSpace = 'pre-line';
    
    if (playerScore === computerScore) {
        endInfo.textContent = 'End of the game! You tied!'
     }
    
    else if (playerScore > computerScore) {
        endInfo.textContent = 'Final score: Computer: ' + computerScore + ' Player: ' + playerScore 
        + '\nPlayer wins the game! Thanks for playing.'
    }
    
    else if (computerScore > playerScore) {
        endInfo.textContent = 'Final score: Computer: ' + computerScore + ' Player: ' + playerScore 
        + '\nComputer wins the game! Thanks for playing.'
    }
}