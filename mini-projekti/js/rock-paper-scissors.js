let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties : 0
};

/* Drugi nacin
  if(!score) {
  score = {
    wins: 0,
    losses: 0,
    ties : 0
  };
}
*/
updateScore();

function pickComputerMove() { 
let computerMove;
const randomNumber = Math.random();

if(randomNumber >= 0 && randomNumber < 1/3) {
  computerMove = 'rock';
} else if (randomNumber >= 1/3 && randomNumber < 2/3) {
  computerMove = 'paper';
} else if (randomNumber >= 2/3 && randomNumber < 1) {
  computerMove = 'scissors';
}

return computerMove;
}

let isAutoPlaying = false;
let intervalId;

document.querySelector('.js-autoPlay-button').addEventListener('click', () => {
  autoPlay();
});

document.querySelector('.js-reset-button').addEventListener('click', () => {
  score.wins = 0; 
  score.losses = 0; 
  score.ties = 0; 
  localStorage.removeItem('score');
  updateScore();
});

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      pickMove(playerMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector('.btnAutoPlay').textContent = 'Stop Play';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.btnAutoPlay').textContent = 'Auto Play';
  }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  pickMove('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  pickMove('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click', () => {
  pickMove('scissors');
});

document.body.addEventListener('keydown', (e) => {
  if(e.key === 'r') {
    pickMove('rock');
  } else if (e.key === 'p') {
    pickMove('paper');
  } else if (e.key === 's') {
    pickMove('scissors');
  }
});

function pickMove(playerMove) {
const computerMove = pickComputerMove();
let result;

if(playerMove === 'scissors') {
  if(computerMove === 'rock') {
    result = 'You lose.';
  } else if(computerMove === 'paper'){
    result = 'You win.';
  }
  else if(computerMove === 'scissors'){
    result = 'Tie.';
  }

} else if(playerMove === 'paper') {
  if(computerMove === 'rock') {
    result = 'You win.';
  } else if(computerMove === 'paper'){
    result = 'Tie.';
  }
  else if(computerMove === 'scissors'){
    result = 'You lose.';
  }
  
} else if(playerMove === 'rock') {
  if(computerMove === 'rock') {
    result = 'Tie.';
  } else if(computerMove === 'paper'){
    result = 'You lose.';
  }
  else if(computerMove === 'scissors'){
    result = 'You win.';
  }
}

if(result === 'You win.') {
  score.wins += 1;
} else if (result === 'You lose.') {
  score.losses += 1
} else if ('Tie.') {
  score.ties += 1
}

  localStorage.setItem('score', JSON.stringify(score));

  updateScore();

  document.querySelector('.resultScore').innerHTML = result;

  document.querySelector('.moveScore').innerHTML = `You <img class="imgRPS" src="pictuers/${playerMove}-emoji.png"> <img class="imgRPS" src="pictuers/${computerMove}-emoji.png"> Computer`

}

function updateScore() {
  document.querySelector('.updateScore').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

