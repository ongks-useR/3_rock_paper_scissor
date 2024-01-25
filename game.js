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