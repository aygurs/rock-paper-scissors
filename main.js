// These variables hold data that will be changed later
let playerScore = 0
let computerScore = 0
let roundNumber = 1

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

function playRound() {

    let question = prompt('Rock, paper or scissors?')
    const playerSelection = question.toLowerCase()
    // To make player selection case insensitive
    const computerSelection = getComputerChoice();
    
    console.log('ROUND ' + roundNumber 
    + '\nPlayer chose: ' + playerSelection + ' and Computer chose: ' + computerSelection)

    if (playerSelection === computerSelection) {
        roundNumber +=1
        return 'Its a tie!\nPlayer score is ' + playerScore 
        + ' and Computer score is ' + computerScore
    }

    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore += 1
            roundNumber +=1
            return 'You lose. Paper beats rock.\nPlayer score is ' + playerScore 
            + ' and Computer score is ' + computerScore
        }
        else if (computerSelection === 'scissors') {
            playerScore += 1
            roundNumber +=1
            return 'You win! Rock beats scissors.\nPlayer score is ' + playerScore 
            + ' and Computer score is ' + computerScore
        }
    }

    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore += 1
            roundNumber +=1
            return 'You win! Paper beats rock.\nPlayer score is ' + playerScore 
            + ' and Computer score is ' + computerScore
        }
        else if (computerSelection === 'scissors') {
            computerScore += 1
            roundNumber +=1
            return 'You lose. Scissors beats paper.\nPlayer score is ' + playerScore 
            + ' and Computer score is ' + computerScore
        }
    }

    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore += 1
            roundNumber +=1
            return 'You lose. Rock beats scissors.\nPlayer score is ' + playerScore 
            + ' and Computer score is ' + computerScore
        }
        else if (computerSelection === 'paper') {
            playerScore += 1
            roundNumber +=1
            return 'You win! Scissors beats paper.\nPlayer score is ' + playerScore 
            + ' and Computer score is ' + computerScore
        }
    }

    else {
        roundNumber +=1
        return 'You need to enter either: rock, paper or scissors!'
        // This is for if the player does not enter a valid option
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

function game() {
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(endGame())
}

game()