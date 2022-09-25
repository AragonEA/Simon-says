let computerSequense = [];
let userSequence = [];
let userScore = 0;
let userBestScore = 0;
let $playButton = document.querySelector('button[type=button]');

$playButton.onclick = startGame;

function startRound() {
  changeTitle('Follow the sequence');
}

function changeTitle(title) {
  document.querySelector('#title').textContent = title;
}
function startGame() {
  resetVariables();
  startRound();
}

function resetVariables() {
  computerSequense = [];
  userSequence = [];
  userScore = 0;
}

}
