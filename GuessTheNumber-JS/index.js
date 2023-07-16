const form = document.getElementById("form");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const startGame = document.getElementById("startGame");
const output = document.getElementById("output");
const guessDisplay = document.getElementById("guessDisplay");

let guessNumber = [];
let computerGuess;

function onStartGame() {
  output.textContent = "";
  guessDisplay.textContent = "";
  guessNumber = [];
  computerGuess = Math.floor(Math.random() * 100);
  input.focus();
  input.disabled = false;
  submit.disabled = false;
  startGame.disabled = true;
}

function onFinishGame(message) {
  output.textContent = message;
}

function onSubmit(e) {
  e.preventDefault();
  const number = input.valueAsNumber;
  input.value= ''
  if (!Number.isNaN(number)) {
    guessNumber.push(number);
    guessDisplay.textContent = `Your guess ${guessNumber.join(', ')}`;
    if (number < computerGuess) {
      output.textContent = "Too Low!";
    } else if (number > computerGuess) {
      output.textContent = "Too High!";
    } else {
      // onfinish
      onFinishGame("You got it! Congrats");
      return;
    }
    input.focus();
    if (guessNumber.length == 10) {
      onFinishGame('You exhausted all the points, correct number is '+ computerGuess)
    }
  }
}

form.addEventListener("submit", onSubmit);

startGame.addEventListener("click", onStartGame);
onStartGame();
