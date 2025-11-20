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
    if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("YOU WIN!!! paper beats rock")
        ++humanScore
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("YOU WIN!!! rock beats scissors")
        ++humanScore
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("YOU WIN!!! scissors beats paper")
        ++humanScore
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("YOU LOST. rock loses to paper")
        ++computerScore
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("YOU LOST. paper loses to scissors")
        ++computerScore
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("YOU LOST. scissors loses to rock")
        ++computerScore
    }
    else if (humanChoice == "rock" && computerChoice == "rock"){
        console.log("YOU TIED. both rock")
    }
    else if (humanChoice == "paper" && computerChoice == "paper"){
        console.log("YOU TIED. both paper")
    }
    else if (humanChoice == "scissors" && computerChoice == "scissors"){
        console.log("YOU TIED. both scissors")
    }

    else{
        console.log("you broke my game???? asshole.")
    }
    console.log(humanScore + "/" + computerScore) 
}




function playGame(){


if (humanScore>computerScore) {
    console.log("YOU WIN THE GAME!!!!! :D")
}
else if (humanScore<computerScore) {
    console.log("YOU LOST THE GAME!!! :(")
}
else if (humanScore=computerScore) {
    console.log("you tied. :/")
}
else {
    console.log("what did you even do??? stop breaking my fucking game")
}
console.log(humanScore + "/" + computerScore) 
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


const runningScore = document.createElement("div");
runningScore.classList.add("runningScore");
runningScore.textContent = humanScore + "/" + computerScore;

display.appendChild(runningScore);