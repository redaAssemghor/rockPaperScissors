const Rock = document.querySelector('.rock');
const Paper = document.querySelector('.paper');
const Scissors = document.querySelector('.scissors');
const answers = document.querySelector('.answers');

let choices = ["rock" , "paper" , "sccissors"];
const computerSelection = computerPlay();

Rock.addEventListener('click' , () => {

   console.log(game('rock'));
});

Paper.addEventListener('click', () => {

   console.log(game('Paper'));
});

Scissors.addEventListener('click', () => {

   console.log(game('scissors'));
});



function game(playerSelection){
   let winner = "",
       machineWins = 0,
       humanWins = 0;
   
    const computerSelection = computerPlay();
    winner = playRound(playerSelection, computerSelection);
    if (winner === "H") return 'Human won';
  else if ( winner === 'M') return 'Machine Won';
  else return 'Tie';
   
};



function computerPlay() {

    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
    
}






const playRound = (computerSelection, playerSelection) => {
   // Determine winner.
   // Machine wins -> Return 'M'. Human wins -> Return 'H'.
 
   let outcome; // Tie
   if (computerSelection === playerSelection){
     outcome = "Well, That's funny. Seems like you read each other's mind resulting in a Tie";
   }
   // paper beats rock
   else if (computerSelection === "paper" && playerSelection === "rock") {
     outcome = "Machine";
   } else if (computerSelection === "rock" && playerSelection === "paper") {
     outcome = "Human Player";
   }
   // rock beats scissors
   else if (computerSelection === "rock" && playerSelection === "scissors") {
     outcome = "Machine";
   } else if (computerSelection === "scissors" && playerSelection === "rock") {
     outcome = "Human Player";
   }
   // scissors beats paper
   else if (computerSelection === "scissors" && playerSelection === "paper") {
     outcome = "Machine";
   } else if (computerSelection === "paper" && playerSelection === "rock") {
     outcome = "Human Player";
   }
 
   updateUI(playerSelection, computerSelection, outcome);
 
   return outcome;
 };



function updateUI(computerSelection, playerSelection, outcome){
   answers.innerHTML = `<p>Human: ${playerSelection}</p><p>Computer: ${computerSelection}</p><p>Winner: ${outcome}</p>`
};