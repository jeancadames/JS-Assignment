const gameOptions = document.querySelectorAll('.option');
const winnerTxt = document.createElement('p');
const playerSelection = document.getElementById('player-selection');
const computerOption = document.getElementById('computer-selection');
const dashboard = document.querySelector('.dashboard');
const startBtn = document.getElementById('start');
const draws = document.getElementById('draws');
const playerW = document.getElementById('player-w');
const computerW = document.getElementById('computer-w');

let playerWins = 0;
let computerWins = 0;
let draw = 0;

function computerPlay () {
        return computerOption.innerText = `${gameOptions[Math.floor(Math.random()*gameOptions.length)].innerText}`;
}

function playerPlay (){
    gameOptions.forEach(option => {
        option.addEventListener('click', ()=> {
            playerSelection.innerText = `${option.innerText}`
            computerOption.innerText = '';
        })
    });
}

playerPlay();

function playRound(){
    if(playerSelection.innerText === computerOption.innerText){
        draw++;
        console.log(draw);
        draws.innerText = draw;
        winnerTxt.innerText = 'It\'s a draw!';
    }
    else if((playerSelection.innerText === 'Rock' && computerOption.innerText === 'Scissors') || (playerSelection.innerText === 'Scissors' && computerOption.innerText === 'Paper') || (playerSelection.innerText === 'Paper' && computerOption.innerText === 'Rock')) {
        playerWins++;
        console.log(playerWins)
        playerW.innerText = playerWins;
        winnerTxt.innerText = `${playerSelection.innerText} beats ${computerOption.innerText}, you win!`
        dashboard.appendChild(winnerTxt)
    } 
    else {
        computerWins++;
        console.log(computerWins)
        computerW.innerText = computerWins;
        winnerTxt.innerText = `${playerSelection.innerText} beats ${computerOption.innerText}, you lose!`
        dashboard.appendChild(winnerTxt)
    }
}

startBtn.addEventListener('click', ()=> {
  while (!playerSelection.innerText) {
    alert('You cannot play until you choose an option');
    break;
  }
  computerPlay();
  playRound();
});

while(playerWins ==5){
    alert('GANO');
}


