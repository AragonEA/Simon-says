let computerSequense = [];
let userSequence = [];
let userScore = 0;
let userBestScore = 0;
let $playButton = document.querySelector('button[type=button]');

$playButton.onclick = startGame;

function startRound() {
  changeTitle('Follow the sequence');
  blockStartButton();
  blockUserInput();
  startComputerTurn();
  startUserTurn();
  userSequence = [];
}

function startUserTurn() {
  let userTurnDelay = (computerSequense.length + 1) * 1000;
  setTimeout(function () {
    changeTitle('Your turn');
    unlockStartButton();
    unlockUserInput();
  }, userTurnDelay);
}

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



function getRandomSquare() {
  const $square = document.querySelectorAll('.square');
  return $square[Math.floor(Math.random() * $square.length)];
}

function blockUserInput() {
  document.querySelectorAll('.square').forEach(function ($square) {
    $square.onclick = "";
  });
}

function highlightSquare($square) {
  $square.style.opacity = 1.5;
  setTimeout(function () {
    $square.style.opacity = 0.5;
  }, 500);
}

function unlockUserInput() {
  document.querySelectorAll('.square').forEach(function ($square) {
    $square.onclick = userTurn;
  });
}

function userTurn(event) {
  const $square = event.target;
  highlightSquare($square);
  userSequence.push($square);

  const $computerSquare = computerSequense[userSequence.length - 1];
  if ($square.id !== $computerSquare.id) {
    blockUserInput();
    changeTitle('You lost!');
    return;
  }

  if (userSequence.length === computerSequense.length) {
    blockUserInput();
    startRound();
  }
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

function blockStartButton() {
  $playButton.onclick = "";
  $playButton.className = "hidden"
}

function unlockStartButton() {
  $playButton.onclick = startGame;
  $playButton.className = "btn btn-primary"
  $playButton.textContent = "Start a new game"
}

}
