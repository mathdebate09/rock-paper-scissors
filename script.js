function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3);

    switch (computerSelection) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function format(newStr) {
    newStr = newStr.toLowerCase();
    let firstHalf = newStr.slice(0, 1).toUpperCase();
    let secondHalf = newStr.slice(1);
    return `${firstHalf}${secondHalf}`;
}

function playRound(computerSelection, playerSelection) {
    playerSelection = format(playerSelection);
    computerSelection = format(computerSelection);

    if (computerSelection === playerSelection) {
        return `It's a Tie! ${computerSelection} and ${playerSelection}`;
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return "You Win! Paper beats Rock";
    } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return "You Win! Scissors beats Paper";
    }
}

function game() {
    let score = 0,result;
    for (let i = 1; i<= 5; i++) {
        const playerSelection = prompt("Rock Paper Scissors Shoot! Make your choice");
        const computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        alert(result);

        // score += scoreCalc(result);
        // I'm unable to use this function, if you can help me with a solution, do make a pull req
        
        if (result.includes("Win")) {
            score++;
        } else if (result.includes("Lose")) {
            score--;
        }
    }
    declareWinner(score);
}   

// I tried using this function but it wasn't working :(
function scoreCalc(resultOutput) {
    let counter;
    if (resultOutput.toLowerCase().includes("win")) {
        counter++;
    } else if(resultOutput.toLowerCase().includes("lose")){
        counter--;
    }
    return parseInt(counter);
}

function declareWinner (score) {
    alert(`The Game has Ended! Your score is ${score}`);
    
    if (parseInt(score) <= 0) {
        alert("You've Lost the game :(");
    } else {
        alert("You've Won the game :D");
    }
}

game();
alert("Thanks for playing my game\n©mathdebaate09")
