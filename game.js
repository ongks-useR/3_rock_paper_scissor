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