let choices = ["rock" , "paper" , "sccissors"];
const playerSelection = "scissors";
const computerSelection = computerplay();



function computerplay() {
    
    random = Math.floor(Math.random() * choices.length);
    if (random == 0){
        return choices[0];
    }

    else if (random == 1){
        return choices[1];
    }
    
    else if (random == 2){
        return choices[2];
    }

}
//console.log(computerplay())

function playGround(playerSelection,computerSelection){
    
    if (computerSelection == "rock" && playerSelection == "scissors"){
        return "computer won";
    }
    else if (computerSelection === "rock" && playerSelection == "paper"){
        return "player won";
    }
    else if (computerSelection === "scissors" && playerSelection == "rock"){
        return "player won";
    }
    else if (computerSelection === "scissors" && playerSelection == "paper"){
        return "computer won";
    }
    else if (computerSelection === "paper" && playerSelection == "rock"){
        return "computer won";
    }
    else if (computerSelection === "paper" && playerSelection == "scissors"){
        return "player won";
    }
}
console.log(playGround())