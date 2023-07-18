/*

// Variables for answers and scores
let playerAnswer = ' '
let computerAnswer = ' '
let playerScore = 0
let computerScore = 0

// Function for the players choice and returning the choice to console
function playerChoice() {
    let question = prompt('Rock, paper or scissors?')

    if (question.toLowerCase() == 'rock') {
        playerAnswer = 'Rock';
        console.log('Player chose Rock');
    }

    else if (question.toLowerCase() == 'paper') {
        playerAnswer = 'Paper';
        console.log('Player chose Paper');
    }

    else if (question.toLowerCase() == 'scissors') {
        playerAnswer = 'Scissors';
        console.log('Player chose Scissors');
    }

    else {
        console.log('Please enter an answer!');
    }
}

//Function for computer choice using random choice between 1 and 3
function computerChoice() {
    const random = Math.floor(Math.random() * ((3 - 1) + 1)) + 1;
    
    if (random === 1) {
        computerAnswer = 'Rock'
        console.log('Computer chose Rock');
    }

    if (random === 2) {
        computerAnswer = 'Paper'
        console.log('Computer chose Paper');
    }

    if (random === 3) {
        computerAnswer = 'Scissors'
        console.log('Computer chose Scissors');
    }
}

// Playing a round which compares player and computer answers to each other
// to declare who wins each rounc
// Score adds up after each round
function playRound() {

    if (computerAnswer === 'Rock' && playerAnswer === 'Rock' || computerAnswer === 'Paper' && playerAnswer === 'Paper' || computerAnswer === 'Scissors' && playerAnswer === 'Scissors') {
        console.log('Computer and Player tied!');
    }

    else if (computerAnswer === 'Rock' && playerAnswer === 'Scissors' || computerAnswer === 'Paper' && playerAnswer === 'Rock' || computerAnswer === 'Scissors' && playerAnswer === 'Paper') {
        console.log('Computer wins!');
        computerScore = computerScore + 1
    }

    else if (computerAnswer === 'Rock' && playerAnswer === 'Paper' || computerAnswer === 'Paper' && playerAnswer === 'Scissors' || computerAnswer === 'Scissors' && playerAnswer === 'Rock') {
        console.log('Player wins!');
        playerScore = playerScore + 1
    }

    else {
        console.log('Something went wrong.');
    }

    console.log('Computer score is: ' + computerScore + ' and Player score is: ' + playerScore)
}

// Totals up player and computer scores for an overall winner
function endGame() {
    if (playerScore === computerScore) {
        console.log('Score tied! Thanks for playing.')
    }

    else if (playerScore > computerScore) {
        console.log('Player wins the game! Thanks for playing.')
    }

    else if (computerScore > playerScore) {
        console.log('Computer wins the game! Thanks for playing.')
    }
}

function game() {
    playerChoice()
    computerChoice()
    playRound()
    playerChoice()
    computerChoice()
    playRound()
    playerChoice()
    computerChoice()
    playRound()
    playerChoice()
    computerChoice()
    playRound()
    playerChoice()
    computerChoice()
    playRound()
    endGame()
}

game()

*/

// I decided to write an alternative code for the game
// My old code can still be viewed above

let playerScore = 0
let computerScore = 0
let roundNumber = 1

function getComputerChoice() {
    const random = Math.floor(Math.random() * ((3 - 1) + 1)) + 1;
    
    if (random === 1) {
        return 'rock'
    }

    if (random === 2) {
        return 'paper'
    }

    if (random === 3) {
        return 'scissors'
    }
}

function playRound() {

    let question = prompt('Rock, paper or scissors?')
    const playerSelection = question.toLowerCase()
    const computerSelection = getComputerChoice();
    
    console.log('ROUND ' + roundNumber + '\nPlayer chose: ' + playerSelection + ' and Computer chose: ' + computerSelection)

    if (playerSelection === computerSelection) {
        roundNumber +=1
        return 'Its a tie!\nPlayer score is ' + playerScore + ' and Computer score is ' + computerScore
    }

    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore += 1
            roundNumber +=1
            return 'You lose. Paper beats rock.\nPlayer score is ' + playerScore + ' and Computer score is ' + computerScore
        }
        else if (computerSelection === 'scissors') {
            playerScore += 1
            roundNumber +=1
            return 'You win! Rock beats scissors.\nPlayer score is ' + playerScore + ' and Computer score is ' + computerScore
        }
    }

    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore += 1
            roundNumber +=1
            return 'You win! Paper beats rock.\nPlayer score is ' + playerScore + ' and Computer score is ' + computerScore
        }
        else if (computerSelection === 'scissors') {
            computerScore += 1
            roundNumber +=1
            return 'You lose. Scissors beats paper.\nPlayer score is ' + playerScore + ' and Computer score is ' + computerScore
        }
    }

    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore += 1
            roundNumber +=1
            return 'You lose. Rock beats scissors.\nPlayer score is ' + playerScore + ' and Computer score is ' + computerScore
        }
        else if (computerSelection === 'paper') {
            playerScore += 1
            roundNumber +=1
            return 'You win! Scissors beats paper.\nPlayer score is ' + playerScore + ' and Computer score is ' + computerScore
        }
    }

    else {
        roundNumber +=1
        return 'You need to enter either: rock, paper or scissors!'
    }
}

function endGame() {
    
    if ((playerScore && computerScore > 0) && (playerScore === computerScore)) {
        return 'Final score: Computer: ' + computerScore + ' Player: ' + playerScore + '\nScore tied! Thanks for playing.'
    }

    else if (playerScore === computerScore) {
        return 'No score to show.'
    }

    else if (playerScore > computerScore) {
        return 'Final score: Computer: ' + computerScore + ' Player: ' + playerScore + '\nPlayer wins the game! Thanks for playing.'
    }

    else if (computerScore > playerScore) {
        return 'Final score: Computer: ' + computerScore + ' Player: ' + playerScore + '\nComputer wins the game! Thanks for playing.'
    }
}

function game() {
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(endGame())
}

game()