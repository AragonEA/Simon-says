let computerSequense = [];
let userSequence = [];
let userScore = 0;
let userBestScore = 0;
let $playButton = document.querySelector('button[type=button]');

$playButton.onclick = startGame;

function startRound() {
  changeTitle('Follow the sequence');
  startComputerTurn();

function startComputerTurn() {
  let $square = getRandomSquare();
  computerSequense.push($square);
  computerSequense.forEach(function ($square, i) {
    let delayMS = (i + 1) * 1000;
    setTimeout(function () {
      highlightSquare($square);
    }, delayMS);
  });
}

function changeTitle(title) {
  document.querySelector('#title').textContent = title;
}

function getRandomSquare() {
  const $square = document.querySelectorAll('.square');
  return $square[Math.floor(Math.random() * $square.length)];
}


function highlightSquare($square) {
  $square.style.opacity = 1.5;
  setTimeout(function () {
    $square.style.opacity = 0.5;
  }, 500);
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
