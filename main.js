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