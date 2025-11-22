function getComputerChoice() {
    var computerChoice = Math.random();
    if (computerChoice <= 0.33){
        computerChoice = "rock";
    }

    else if (computerChoice<=0.66){
        computerChoice = "paper";
    }

    else{
        computerChoice = "scissors";
    }

    return computerChoice;
}


function getHumanChoice() {
}


let humanScore = 0
let computerScore = 0

const display = document.getElementById('display');

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playRound(humanChoice, computerChoice) {
    const runningScore = document.createElement("div");
    runningScore.classList.add("runningScore");

    const roundDisplay = document.createElement("div");
    roundDisplay.classList.add("runningScore");

    const winningMessage = document.createElement("h3");
    winningMessage.classList.add("winningMessage");

    if(humanChoice == "paper" && computerChoice == "rock"){
        roundDisplay.textContent = "YOU WIN! paper beats rock";
        ++humanScore
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        roundDisplay.textContent = "YOU WIN! rock beats scissors";
        ++humanScore
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        roundDisplay.textContent = "YOU WIN! scissors beats paper";
        ++humanScore
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        roundDisplay.textContent = "YOU LOSE. rock loses to paper";
        ++computerScore
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        roundDisplay.textContent = "YOU LOSE. paper loses to scissors";
        ++computerScore
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        roundDisplay.textContent = "YOU LOSE. scissors loses to rock";
        ++computerScore
    }
    else if (humanChoice == "rock" && computerChoice == "rock"){
        roundDisplay.textContent = "YOU TIED. both rock";
    }
    else if (humanChoice == "paper" && computerChoice == "paper"){
        roundDisplay.textContent = "YOU TIED. both paper";
    }
    else if (humanChoice == "scissors" && computerChoice == "scissors"){
        roundDisplay.textContent = "YOU TIED. both scissors";
    }

    else{
        roundDisplay.textContent = "you broke my game? asshole.";
    }

    runningScore.textContent = humanScore + "/" + computerScore;
    display.appendChild(runningScore);
    display.appendChild(roundDisplay);

    if (humanScore >= 5) {
        winningMessage.textContent = "YOU WON THE GAME!!!!! :D"
        display.appendChild(winningMessage);
    }
    else if (computerScore >= 5) {
        winningMessage.textContent = "YOU LOST THE GAME!!! :C"
        display.appendChild(winningMessage);
    }

}


const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');


rock.addEventListener("click", ()=>
    playRound("rock", getComputerChoice())
);

paper.addEventListener("click", ()=>
    playRound("paper", getComputerChoice())
);

scissors.addEventListener("click", ()=>
    playRound("scissors", getComputerChoice())
);