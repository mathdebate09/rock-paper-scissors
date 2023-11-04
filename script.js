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
    let score = 0;

    const imageContainer = document.querySelector('.option-bar');
    const gameResults = document.querySelector('.game-results');
    const gameStatus = document.querySelector('.game-status');
    const gameScore = document.querySelector('.score');

    // Add a click event listener to the container
    imageContainer.addEventListener('click', function(event) {
        // Check if the clicked element is an img element
        if (event.target.tagName === 'IMG') {
            const clickedImageId = event.target.id;
            console.log("Player selected choice: " + clickedImageId);
            
            const computerSelection = getComputerChoice();
            const result = playRound(clickedImageId, computerSelection);

            gameResults.textContent = result;
            gameStatus.textContent = getGameStatus(score);

            if (result.includes("Win")) {
                score++;
            } else if (result.includes("Lose")) {
                score--;
            }

            gameScore.textContent = "Score: " + score;
        }
    });
}

function getGameStatus(score) {

    if (score <= 0) {
        return ("You're Losing the game Nerd :(");
    } else if (score >= 0) {
        return ("W Luck, Well Played! :D");
    }
}

game();
