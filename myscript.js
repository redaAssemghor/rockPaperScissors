let choices = ["rock" , "paper" , "sccissors"];
const computerSelection = computerPlay();
const playerSelection = playerPlay();


function playerPlay() {
   console.log ("Do you choose 'Rock' (1), 'Paper' (2), or 'Scissors' (3)?");
   let playerChoice = prompt("Do you choose 'Rock' (1), 'Paper' (2), or 'Scissors' (3)?");
   if (playerChoice.toLowerCase() === "rock" || parseInt(playerChoice) === 1) {
      playerChoice = "Rock";
   } else if (playerChoice.toLowerCase() === "paper" || parseInt(playerChoice) === 2) {
      playerChoice = "Paper";
   }
   else if (playerChoice.toLowerCase() === "scissors" || parseInt(playerChoice) === 3) {
      playerChoice = "Scissors";
   }
   else if (playerChoice.toLowerCase() !== "rock" || "scissors" || "paper" || parseInt(playerChoice) !== 1 || 2 || 3) {
      alert("Please try to enter your value again :)")
      playerSelection();
   }
   else {
      console.log("Not sure what's going on, hold on to yer butts ;)")
   }
   return playerChoice;
}

function computerPlay() {

    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
    
}






function playRound(playerSelection,computerSelection){
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        console.log("It's a draw!");
        return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
        console.log("Rock beats scissors! You lose :(");
        return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock") {
        console.log("Rock beats scissors! You win :D");
        return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
        console.log("Scissors beats paper! You lose :(");
        return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
        console.log("Scissors beats paper! You win :D");
        return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
        console.log("Paper beats rock! You lose :(");
        return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
     } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper") {
        console.log("Paper beats rock! You win :D");
        return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
     } else {
        console.log("I'm not sure what, but something went worng :(");
     }
  
    }
//console.log(playRound(playerSelection,computerSelection))

function game(){
    for(i = 0; i < 5; i++) {
    const playerSelection = "scissors";
    const computerSelection = computerPlay();
    const currentRound = playRound(playerSelection, computerSelection);
    console.log(currentRound);
   }
}
