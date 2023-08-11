// These variables hold data that will be changed later
let playerScore = 0
let computerScore = 0
let roundNumber = 0

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
    playRound('rock');
});

paperButton.addEventListener('click', function() {
    playRound('paper');
});

scissorsButton.addEventListener('click', function() {
    playRound('scissors');
});

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


function playRound(playerSelection) {

    const computerSelection = getComputerChoice();

    const resultInfo = document.querySelector('.result');

    const infoText = document.querySelector('.info');
    infoText.textContent = 'Player chose: ' + capitalizeFirstLetter(playerSelection) 
    + ' and Computer chose: ' + capitalizeFirstLetter(computerSelection);

    if (playerSelection === computerSelection) {
        roundNumber +=1
        resultInfo.textContent = 'ROUND: ' + roundNumber + '\n You tied!'
    }

    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore += 1
            roundNumber +=1
            resultInfo.textContent = 'ROUND: ' + roundNumber + '\n You lose! Paper beats rock.'
        }

        else if (computerSelection === 'scissors') {
            playerScore += 1
            roundNumber +=1
            resultInfo.textContent = 'ROUND: ' + roundNumber + '\n You win! Rock beats scissors.'
        }
    }

    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore += 1
            roundNumber +=1
            resultInfo.textContent = 'ROUND: ' + roundNumber + '\n You win! Paper beats rock.'
        }
        else if (computerSelection === 'scissors') {
            computerScore += 1
            roundNumber +=1
            resultInfo.textContent = 'ROUND: ' + roundNumber + '\n You lose! Scissors beats paper.'
        }
    }

    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore += 1
            roundNumber +=1
            resultInfo.textContent = 'ROUND: ' + roundNumber + '\n You lose! Rock beats scissors.'
        }
        else if (computerSelection === 'paper') {
            playerScore += 1
            roundNumber +=1
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
        endGame()
    }
}

function endGame() {
    
    if ((playerScore && computerScore > 0) && (playerScore === computerScore)) {
        return 'Final score: Computer: ' + computerScore + ' Player: ' + playerScore 
        + '\nScore tied! Thanks for playing.'
        // I used this to display a tie as long as both scores are not 0
        // If both scores are 0, the game has not run correctly
        // Due to player not entering a valid option
    }

    else if (playerScore === computerScore) {
        return 'No score to show.'
        // If the player choses no valid option in selection then the score will be a tie
        // But I want to display a different message if it is a tie from playing,
        // Or if it is a tie from not answering correctly in the first place
    }

    else if (playerScore > computerScore) {
        return 'Final score: Computer: ' + computerScore + ' Player: ' + playerScore 
        + '\nPlayer wins the game! Thanks for playing.'
    }

    else if (computerScore > playerScore) {
        return 'Final score: Computer: ' + computerScore + ' Player: ' + playerScore 
        + '\nComputer wins the game! Thanks for playing.'
    }
}
