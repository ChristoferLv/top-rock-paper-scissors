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
    if (e.target.tagName != "BUTTON")
        return;
    const humanChoice = e.target.dataset.choice;
    playRound(humanChoice, getComputerChoice());
}

function getComputerChoice() {
    const choiceNum = Math.floor(Math.random() * 3) + 1;
    switch (choiceNum) {
        case 1:
            return "stone";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function finishGame() {
    updateDisplays();
    choices.style.pointerEvents = 'none';
    againBtn.style.display = "block";
    if (humanScore > computerScore) {
        result.innerText = "YOU WON!!! Bravo!!!";
    } else if (humanScore < computerScore) {
        result.innerText = "Not this time, the computer outsmarted you, try again!";
    } else {
        result.innerText = "You tied, must be mentally connected.";
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
    score.innerText = `Score: You ${humanScore} - ${computerScore} Computer`;
}

function playRound(humanChoice, computerChoice) {
    switch (computerChoice) {
        case "stone":
            if (humanChoice == "stone") {
                last.innerText = "That was a draw. Try again!";
            }
            if (humanChoice == "paper") {
                humanScore = humanScore + 1;
                last.innerText = "You won this round!";
            }
            if (humanChoice == "scissors") {
                computerScore = computerScore + 1;
                last.innerText = "The computer won this round; it chose rock.";
            }
            break;
        case "paper":
            if (humanChoice == "paper") {
                last.innerText = "That was a draw. Try again!";
            }
            if (humanChoice == "scissors") {
                humanScore = humanScore + 1;
                last.innerText = "You won this round!";
            }
            if (humanChoice == "stone") {
                computerScore = computerScore + 1;
                last.innerText = "The computer won this round; it chose paper.";
            }
            break;
        case "scissors":
            if (humanChoice == "scissors") {
                last.innerText = "That was a draw. Try again!";
            }
            if (humanChoice == "stone") {
                humanScore = humanScore + 1;
                last.innerText = "You won this round!";
            }
            if (humanChoice == "paper") {
                computerScore = computerScore + 1;
                last.innerText = "The computer won this round; it chose scissors.";
            }
            break;
    }

    if (currentRound + 1 <= MAX_ROUNDS) {
        currentRound = currentRound + 1;
        updateDisplays();
    } else { finishGame(); }
}

restartGame();

