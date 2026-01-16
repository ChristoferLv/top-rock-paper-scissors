const MAX_ROUNDS = 5;
const againBtn = document.getElementById("again");
const choices = document.getElementById("choices");
const result = document.getElementById("result");
const roundDisplay = document.getElementById("round");
const score = document.getElementById("score");
const last = document.getElementById("last");

choices.addEventListener("click", choiceHandler);
againBtn.addEventListener("click", restartGame);
againBtn.style.display = 'none';

let computerScore = 0;
let humanScore = 0;
let currentRound = 1;

/**
 * 
 * @param {MouseEvent} e 
*/
function choiceHandler(e) {
    console.log(e.target.tagName)
    if (e.target.tagName != "BUTTON")
        return;
    const humanChoice = e.target.dataset.choice;
    playRound(humanChoice, getComputerChoice());
}

function getComputerChoice() {
    const choiceNum = Math.floor(Math.random() * 3) + 1;
    switch (choiceNum) {
        case 1:
            return "pedra";
        case 2:
            return "papel";
        case 3:
            return "tesoura";
    }
}

function finishGame() {
    updateDisplays();
    choices.style.pointerEvents = 'none';
    againBtn.style.display = "block";
    if (humanScore > computerScore) {
        result.innerText = "VOCÊ GANHOU O JOGO!!! Parabéns!!!";
    } else if (humanScore < computerScore) {
        result.innerText = "Não foi dessa vez, o computador te superou, tente de novo!";
    } else {
        result.innerText = "Vocês empataram, devem estar conectados mentalmente.";
    }
}

function restartGame() {
    choices.style.pointerEvents = '';
    result.innerText = "";
    last.innerHTML = "&nbsp;";
    currentRound = 1;
    computerScore = 0;
    humanScore = 0;
    againBtn.style.display = "none";
    updateDisplays();
}

function updateDisplays() {
    roundDisplay.innerText = "Round: " + currentRound;
    score.innerText = `Pontuação: Você ${humanScore} - ${computerScore} Computador`;
}

function playRound(humanChoice, computerChoice) {
    switch (computerChoice) {
        case "pedra":
            if (humanChoice == "pedra") {
                last.innerText = "Esse foi um empate, tente de novo!";
            }
            if (humanChoice == "papel") {
                humanScore = humanScore + 1;
                last.innerText = "Você ganhou esse round!";
            }
            if (humanChoice == "tesoura") {
                computerScore = computerScore + 1;
                last.innerText = "Aqui o computador ganhou, ele escolheu pedra.";
            }
            break;
        case "papel":
            if (humanChoice == "papel") {
                last.innerText = "Esse foi um empate, tente de novo!";
            }
            if (humanChoice == "tesoura") {
                humanScore = humanScore + 1;
                last.innerText = "Você ganhou esse round!";
            }
            if (humanChoice == "pedra") {
                computerScore = computerScore + 1;
                last.innerText = "Aqui o computador ganhou, ele escolheu papel.";
            }
            break;
        case "tesoura":
            if (humanChoice == "tesoura") {
                last.innerText = "Esse foi um empate, tente de novo!";
            }
            if (humanChoice == "pedra") {
                humanScore = humanScore + 1;
                last.innerText = "Você ganhou esse round!";
            }
            if (humanChoice == "papel") {
                computerScore = computerScore + 1;
                last.innerText = "Aqui o computador ganhou, ele escolheu tesoura.";
            }
            break;
    }

    if (currentRound + 1 <= MAX_ROUNDS) {
        currentRound = currentRound + 1;
        updateDisplays();
    } else { finishGame(); }
}

restartGame();

