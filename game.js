function getComputerChoice() {

    let num = Math.ceil(Math.random() * 3);
    let result;

    if (num === 1) {
        result = "Rock"
    }
    else if (num === 2) {
        result = "Scissor"
    }
    else {
        result = "Paper"
    }
    return result;
}

function getPlayerChoice() {

    let num = Math.ceil(Math.random() * 3);
    let result;

    if (num === 1) {
        result = "Rock"
    }
    else if (num === 2) {
        result = "Scissor"
    }
    else {
        result = "Paper"
    }
    return result;
}

function playRound(playerSelection, computerSelection) {

    const player = playerSelection;
    const computer = computerSelection;

    /* Scenarios where Player win the game */
    let victory = (player === "Rock" & computer === "Scissor") || (player === "Scissor" & computer === "Paper") || (player === "Paper" & computer === "Rock")

    let result;

    if (victory) {
        result = "You WIN!!"
    }
    else {
        result = "You LOSE!!"
    }

    return result;
}

/* 
    Ultimate function that plays the game where
    user will decide how many game to play. if user score more than computer, then user wins and
    vice versa.
*/
function game() {

    let n = parseInt(prompt("How many round you wanna play?"));
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= n; i++) {

        const outcome = playRound(getPlayerChoice(), getComputerChoice());

        console.log(outcome)

        if (outcome === "You WIN!!") {
            playerScore++;
        }
        else {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You are the WINNER!!");
    }
    else {
        console.log("You are the LOSER!!");
    }
}