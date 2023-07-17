function computerChoice() {
    const random = Math.floor(Math.random() * ((3 - 1) + 1)) + 1;
    
    if (random === 1) {
        console.log('Computer chose rock')
    }

    if (random === 2) {
        console.log('Computer chose paper')
    }

    if (random === 3) {
        console.log('Computer chose scissors')
    }
}

function playerChoice() {
    let playerAnswer = prompt('Rock, paper or scissors?')

    if (playerAnswer.toLowerCase() == 'rock') {
        console.log('Rock')
    }

    else if (playerAnswer.toLowerCase() == 'paper') {
        console.log('Paper')
    }

    else if (playerAnswer.toLowerCase() == 'scissors') {
        console.log('Scissors')
    }

    else {
        console.log('Please enter an answer!')
    }
}

playerChoice()
computerChoice()
