let playerWins = 0;
let computerWins = 0;
let ties = 0;
let gameOptions = ['Rock', 'Paper', 'Scissors'];

const playerSelection = function playerPlay (){
    
    let playerOption = prompt();
    let firstLetter = playerOption.slice(0,1);
    let restOfLetters = playerOption.slice(1,100);
    let firstUppercaseLetter = firstLetter.toUpperCase();
    let lowercaseLetters = restOfLetters.toLocaleLowerCase();
    playerOption = firstUppercaseLetter.concat('', lowercaseLetters);

    return playerOption;
}

const computerSelection = function computerPlay () {    

    return gameOptions[Math.floor(Math.random()*gameOptions.length)];    
    
}

function playRound(playerSelection, computerSelection){

    if(playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors"){
        alert("Use a valid option between Rock, Paper and Scissors");
        return;
    }

    if (playerSelection === computerSelection){
        ties++;
        console.log("It's a tie!");
    }
    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        playerWins++;
        console.log("You win! Rock beats Scissors!");
    }
    if(playerSelection === "Rock" && computerSelection === "Paper"){
        computerWins++;
        console.log("You lose! Paper beats Rock");
    }
    if(playerSelection === "Paper" && computerSelection === "Scissors"){
        computerWins++;
        console.log("You lose! Scissors beats Paper");
    }
    if(playerSelection === "Paper" && computerSelection === "Rock"){
        playerWins++;
        console.log("You win! Paper beats Rock");
    }
    if(playerSelection === "Scissors" && computerSelection === "Paper"){
        playerWins++;
        console.log("You win! Scissors beats Paper");
    }
    if(playerSelection === "Scissors" && computerSelection === "Rock"){
        computerWins++;
        console.log("You lose! Rock beats Paper");
    }
            
}


function game() {

    for (let i = 0; i < 5; i++) {
        playRound(playerSelection(), computerSelection());
    }

    console.log(`The final score is: Player wins: ${playerWins} v.s. Computer wins: ${computerWins}. Ties: ${ties}`);

}

game();