var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = randomColorG();
var messageDisplay = document.querySelector("[data-testid='messageDisplay']");
var colorBox = document.querySelector("[data-testid='colorBox']");
var scoreDisplay = document.querySelector("[data-testid='score']");
var resetButton = document.querySelector("[data-testid='newGameButton']");
var easyBtn = document.querySelector("[data-testid='easyButton']");
var hardBtn = document.querySelector("[data-testid='hardButton']");
var score = 0;

easyBtn.addEventListener("click", function () {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = randomColorG();
  setUpSquares();
});

hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = randomColorG();
  setUpSquares();
});

resetButton.addEventListener("click", function () {
  colors = generateRandomColors(numSquares);
  pickedColor = randomColorG();
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  score = 0;
  updateScore();
  setUpSquares();
});

function updateScore() {
  scoreDisplay.textContent = "Score: " + score;
}

setUpSquares();

function setUpSquares() {
  colorBox.textContent = pickedColor;
  squares.forEach((square, i) => {
    if (colors[i]) {
      square.style.display = "block";
      square.style.backgroundColor = colors[i];
      square.addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
          messageDisplay.textContent = "Correct!";
          resetButton.textContent = "Play Again?";
          changeColors(clickedColor);
          score++;
          updateScore();
        } else {
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try Again";
        }
      });
    } else {
      square.style.display = "none";
    }
  });
}

function changeColors(colorz) {
  squares.forEach((square) => {
    square.style.background = colorz;
  });
}

function randomColorG() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(genColor) {
  var arr = [];
  for (var i = 0; i < genColor; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
