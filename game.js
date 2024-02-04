function getComputerChoice() {

    // 1 --> Rock; 2 --> Paper; 3 --> Scissor
    const computerChoice = Math.ceil(Math.random() * 3);
    const computerImg = document.querySelector('#computer img');

    if (computerChoice === 1) {
        computerImg.setAttribute('src', './images/rock.png');
    }
    else if (computerChoice === 2) {
        computerImg.setAttribute('src', './images/paper.png');
    }
    else {
        computerImg.setAttribute('src', './images/scissor.png');
    }

    return computerChoice;
}

function getPlayerChoice(e) {
    const playerImg = document.querySelector('#player img');
    playerImg.setAttribute('src', e.target.getAttribute('src'));

    const playerChoice = parseInt(e.target.getAttribute('data'))

    return playerChoice
}

function playRound(playerSelection, computerSelection) {

    // 1 --> Rock; 2 --> Paper; 3 --> Scissor

    const player = playerSelection;
    const computer = computerSelection;

    /* Scenarios where Player win the game */
    const userWin = (player === 1 & computer === 3) || (player === 3 & computer === 2) || (player === 2 & computer === 1)

    const draw = (player === 1 & computer === 1) || (player === 2 & computer === 2) || (player === 3 & computer === 3)

    let outcome = ''

    if (userWin) {
        outcome = 1
    }
    else if (draw) {
        outcome = 0
    }
    else {
        outcome = -1
    }

    return outcome;
}


const rock = document.getElementById('rock');
rock.addEventListener('click', e => game(e));

const paper = document.getElementById('paper');
paper.addEventListener('click', e => game(e));

const scissor = document.getElementById('scissor');
scissor.addEventListener('click', e => game(e));

const player = document.querySelector('#playerScore');
const computer = document.querySelector('#computerScore');

const numberOfGame = document.querySelector('#totalGame');
const finalOutcome = document.querySelector('#outcome');

/* 
    Ultimate function that plays the game where
    user will decide how many game to play. if user score more than computer, then user wins and
    vice versa.
*/

let playerScore = 0;
let computerScore = 0;
let totalGame = 0;

function game(e) {

    if ((playerScore < 5) && (computerScore < 5)) {

        totalGame++
        numberOfGame.textContent = `ROUND ${totalGame}`

        const outcome = playRound(getPlayerChoice(e), getComputerChoice());

        if (outcome === 1) {
            playerScore++;
            player.textContent = playerScore;
            finalOutcome.textContent = 'YOU WIN'

            if (playerScore == 5) {
                finalOutcome.textContent = 'YOU ARE THE WINNER !!'
            }
        }
        else if (outcome === 0) {
            finalOutcome.textContent = 'DRAW'
        }
        else {
            computerScore++;
            computer.textContent = computerScore;
            finalOutcome.textContent = 'COMPUTER WIN'

            if (computerScore == 5) {
                finalOutcome.textContent = 'COMPUTER IS THE WINNER !!'
            }
        }
    }
    else if (((playerScore == 5) && (computerScore < 5)) || ((playerScore < 5) && (computerScore == 5))) {
        return
    }
}