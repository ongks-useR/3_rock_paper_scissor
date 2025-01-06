
let roundNumber = 1;

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

    const computerImg = document.querySelector(".computer");
    computerImg.src = selected;
}


function playerChoice(e) {
    const num = e.target.getAttribute('data');
    const selected = choice[num];

    const playerImg = document.querySelector(".player");
    playerImg.src = selected;

    computerChoice();
}

const selections = Array.from(document.querySelectorAll("#choice-buttons > img"));

selections.forEach(selected => {
    selected.addEventListener('click', e => playerChoice(e));
})
