// These variables hold data that will be changed later
let playerScore = 0
let computerScore = 0
let roundNumber = 0
let gameActive = true

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
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

const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')

rockButton.addEventListener('click', function() {
    roundNumber +=1;
    roundCheck();
    playRound('rock');
});

paperButton.addEventListener('click', function() {
    roundNumber +=1;
    roundCheck();
    playRound('paper');
});

scissorsButton.addEventListener('click', function() {
    roundNumber +=1;
    roundCheck();
    playRound('scissors');
});

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


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

function roundCheck() {

    if (roundNumber < 5){
        return
    }

    else if (roundNumber >= 5){
        disableButtons();
    }
}


function endGame() {


    if (roundNumber < 5) {
        return;
    }

    else if (roundNumber >= 5) {
        
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

    console.log(playerScore, computerScore);
}
