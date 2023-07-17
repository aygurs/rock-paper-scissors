let playerAnswer = ' '
let computerAnswer = ' '

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

function playRound() {

    if (computerAnswer === 'Rock' && playerAnswer === 'Rock' || computerAnswer === 'Paper' && playerAnswer === 'Paper' || computerAnswer === 'Scissors' && playerAnswer === 'Scissors') {
        console.log('Computer and Player tied!');
    }

    else if (computerAnswer === 'Rock' && playerAnswer === 'Scissors' || computerAnswer === 'Paper' && playerAnswer === 'Rock' || computerAnswer === 'Scissors' && playerAnswer === 'Paper') {
        console.log('Computer wins!');
    }

    else if (computerAnswer === 'Rock' && playerAnswer === 'Paper' || computerAnswer === 'Paper' && playerAnswer === 'Scissors' || computerAnswer === 'Scissors' && playerAnswer === 'Rock') {
        console.log('Player wins!');
    }

    else {
        console.log('Something went wrong.');
    }
}

playerChoice()
computerChoice()
playRound()