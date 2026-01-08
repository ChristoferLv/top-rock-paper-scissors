console.log("Bem vindo ao jogo!");
console.log("Regras: Escolha entre pedra, papel ou tesoura.");
console.log("Pedra ganha de tesoura, papel ganha de pedra, e tesoura ganha de papel.");

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

function getHumanChoice() {
    const choice = prompt("Escreva sua escolha: Pedra, Papel ou Tesoura");
    return choice;
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        switch (computerChoice) {
            case "pedra":
                if (humanChoice == "pedra") {
                    console.log("Esse foi um empate, tente de novo!");
                }
                if (humanChoice == "papel") {
                    humanScore = humanScore + 1;
                    console.log("Você ganhou esse round!");
                }
                if (humanChoice == "tesoura") {
                    computerScore = computerScore + 1;
                    console.log("Aqui o computador ganhou, ele escolheu pedra.");
                }
                break;
            case "papel":
                if (humanChoice == "papel") {
                    console.log("Esse foi um empate, tente de novo!");
                }
                if (humanChoice == "tesoura") {
                    humanScore = humanScore + 1;
                    console.log("Você ganhou esse round!");
                }
                if (humanChoice == "pedra") {
                    computerScore = computerScore + 1;
                    console.log("Aqui o computador ganhou, ele escolheu papel.");
                }
                break;
            case "tesoura":
                if (humanChoice == "tesoura") {
                    console.log("Esse foi um empate, tente de novo!");
                }
                if (humanChoice == "pedra") {
                    humanScore = humanScore + 1;
                    console.log("Você ganhou esse round!");
                }
                if (humanChoice == "papel") {
                    computerScore = computerScore + 1;
                    console.log("Aqui o computador ganhou, ele escolheu tesoura.");
                }
                break;
        }
    }

    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1) + ":")
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("\nVOCÊ GANHOU O JOGO!!! Parabéns!!!")
    } else if (humanScore < computerScore) {
        console.log("\nNão foi dessa vez, o computador te superou, tente de novo!")
    } else {
        console.log("\nVocês empataram, devem estar conectados mentalmente.")
    }
}

playGame();