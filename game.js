
let roundNumber = 1;
let playerScore = 0;
let computerScore = 0;

const startButton = document.querySelector('input');

startButton.addEventListener('click', function(){
    this.style.cssText = "display: none;"

    const para = document.querySelector('#round > p');

    para.textContent = `ROUND ${roundNumber}`
});


const choice = {
    0: "./images/rock.png",
    1: "./images/paper.png",
    2: "./images/scissor.png"
}

function randomNumber(){
    const number = Math.floor(Math.random() * 3)

    return number;
}

function computerChoice(){
    const num = randomNumber();
    const selected = choice[num];

    const computerImg = document.querySelector(".selected.computer");
    computerImg.src = selected;

    return num;
}


function playerChoice(e) {

    let start = document.querySelector("input[type=button]");
    start = start.getAttribute('style');

    if (start) {
        const playerSelection = e.target.getAttribute('data');
        const selected = choice[playerSelection];
    
        const playerImg = document.querySelector(".selected.player");
        playerImg.src = selected;
    
        const computerSelection = computerChoice();
    
        // Scenarios where player win
        const playerWin = (playerSelection == 0 && computerSelection == 2) || (playerSelection == 1 && computerSelection == 0) || (playerSelection == 2 && computerSelection == 1)
    
        // Scenarios where computer win
        const computerWin = (computerSelection == 0 && playerSelection == 2) || (computerSelection == 1 && playerSelection == 0) || (computerSelection == 2 && playerSelection == 1)
    
        if (playerWin) {
            playerScore++
            const score = document.querySelector(".score.player");
            score.textContent = playerScore;
        }
        else if (computerWin) {
            computerScore++
            const score = document.querySelector(".score.computer");
            score.textContent = computerScore;
        }
        else {
            // Draw, hence nothing will happen to the score
            return
        }
    
    
        const result = document.querySelector("#result > p");
    
        if (playerScore == 5) {
            result.textContent = "You WIN !!"
        }
        else if (computerScore == 5) {
            result.textContent = "YOU LOSE !!"
        }
        else {
            roundNumber++
            const para = document.querySelector('#round > p');
            para.textContent = `ROUND ${roundNumber}`
        }
    }
    else {
        console.log("Click is disabled !!")
    }
    
}

const selections = Array.from(document.querySelectorAll("#choice-buttons > img"));

selections.forEach(selected => {
    selected.addEventListener('click', e => playerChoice(e));
})
