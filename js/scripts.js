// Business Logic

function Player(number, roundPoints, gamePoints) {
  this.number = number;
  this.roundPoints = roundPoints;
  this.gamePoints = gamePoints;
}

// User Interface Logic
$(document).ready(function () {
  // Players initialize to start game.
  let playerOne = new Player("One", 0, 0);
  let playerTwo = new Player("Two", 0, 0);

  // Upon some button click..
  $("#").submit(function (event) {
    event.preventDefault();
  });
});
