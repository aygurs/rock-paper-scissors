let playerScore = 0
let computerScore = 0
let roundNumber = 1
let gameActive = true

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

function roundCheck() {
    if (roundNumber >= 5) {
        endGame();
    }
}

const playAgainButton = document.querySelector('.again');
playAgainButton.addEventListener('click', function() {
    if (!gameActive) {
        const resultInfo = document.querySelector('.result');
        const infoText = document.querySelector('.info');
        const endInfo = document.querySelector('.end');
        infoText.textContent = '';
        resultInfo.textContent = '';
        endInfo.textContent = '';
        rockButton.removeEventListener('click', handleRockClick);
        paperButton.removeEventListener('click', handlePaperClick);
        scissorsButton.removeEventListener('click', handleScissorsClick);
        initializeGame();
    }
});

const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
rockButton.addEventListener('click', handleRockClick);
paperButton.addEventListener('click', handlePaperClick);
scissorsButton.addEventListener('click', handleScissorsClick);

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

    const infoText = document.querySelector('.info');
    infoText.textContent = 'You chose: ' + capitalizeFirstLetter(playerSelection) 
    + ' and Computer chose: ' + capitalizeFirstLetter(computerSelection);

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
    score.textContent = 'P: ' + playerScore + ' C: ' + computerScore;
}

function getComputerChoice() {
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

    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;
    gameActive = true;
    rockButton.addEventListener('click', handleRockClick);
    paperButton.addEventListener('click', handlePaperClick);
    scissorsButton.addEventListener('click', handleScissorsClick);

    getComputerChoice()
}


function endGame() {
    gameActive = false;
    const endInfo = document.querySelector('.end');
    
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