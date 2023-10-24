function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3);

    switch (computerSelection) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}

function format (newStr) {
    let firstHalf = newStr.slice(0,1).toUpperCase();
    let secondHalf = newStr.slice(1);
    return `${firstHalf}${secondHalf}`
}

function playRound (computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection === playerSelection) {
        computerSelection = format(computerSelection);
        playerSelection = format(playerSelection);
        return `It's a Tie! ${computerSelection} and ${playerSelection}`;
    } else if(computerSelection == "rock" && playerSelection == "paper") {
        return "You Win! Paper beats Rock"
    } else if(computerSelection == "paper" && playerSelection == "rock") {
        return "You Lose! Paper beats Rock"
    } else if(computerSelection == "rock" && playerSelection == "scissor") {
        return "You Lose! Rock beats Scissor"
    } else if(computerSelection == "scissor" && playerSelection == "rock") {
        return "You Lose! Rock beats Scissor"
    } else if(computerSelection == "paper" && playerSelection == "scissor") {
        return "You Win! Scissor beats Paper"
    } else if(computerSelection == "scissor" && playerSelection == "paper") {
        return "You Lose! Scissor beats Paper"
    }
}

const playerSelection = "rock";
const computerSelection = "paper";
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));