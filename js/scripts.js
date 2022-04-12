// Business Logic

function Player(id, roundPoints, gamePoints) {
  this.id = id;
  this.roundPoints = roundPoints;
  this.gamePoints = gamePoints;
}

// User Interface Logic
$(document).ready(function () {
  // Players initialize to start game.
  let playerOne = new Player("One", 0, 0);
  let playerTwo = new Player("Two", 0, 0);

  let roundScore = 0;
  let gameScore = 0;
  // Upon button click..
  $("#rollDie").click(function () {
    let roll = Math.floor(Math.random() * 6 + 1);
    if (roll === 1) {
      console.log("Rolled a 1. Turn ends.");
      console.log("Score this round was " + roundScore);
    } else {
      console.log("Rolled a " + roll + ".");
      roundScore += roll;
      console.log("Score this round is " + roundScore);
    }
  });
  $("#holdEndTurn").click(function () {
    console.log("End turn button clicked");
  });
});
