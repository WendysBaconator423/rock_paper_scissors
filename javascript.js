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
    let humanChoice = prompt("Rock, Paper, or Scissors?")
 
    return humanChoice.toLowerCase();
}