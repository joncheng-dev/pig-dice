// Business Logic
function Player(roundPoints, gamePoints) {
  this.roundPoints = roundPoints;
  this.gamePoints = gamePoints;
}

Player.prototype.endTurn = function () {
  this.gamePoints = this.gamePoints + this.roundPoints;
  this.roundPoints = 0;
};

function changePlayers(currentPlayer) {
  switch (currentPlayer) {
    case 1:
      currentPlayer = 2;
      $("#playerTurn").html(currentPlayer);
      break;
    case 2:
      currentPlayer = 1;
      $("#playerTurn").html(currentPlayer);
      break;
  }
  return currentPlayer;
}

// User Interface Logic
$(document).ready(function () {
  // Players initialize to start game.
  let playerOne = new Player(0, 0);
  let playerTwo = new Player(0, 0);
  let currentPlayer = 1;
  $("#playerTurn").html(currentPlayer);
  $("#p1Total").html(playerOne.gamePoints);
  $("#p2Total").html(playerTwo.gamePoints);
  // Upon button click..
  $("#rollDie").click(function () {
    let roll = Math.floor(Math.random() * 6 + 1);
    $("#currentRoll").html(roll);
    if (roll === 1) {
      if (currentPlayer === 1) {
        $("#roundPoints").html(playerOne.roundPoints);
        playerOne.endTurn();
        $("#p1Total").html(playerOne.gamePoints);
        $("#roundPoints").html(playerOne.roundPoints);
      } else if (currentPlayer === 2) {
        $("#roundPoints").html(playerTwo.roundPoints);
        playerTwo.endTurn();
        $("#p2Total").html(playerTwo.gamePoints);
        $("#roundPoints").html(playerTwo.roundPoints);
      }
      $("#currentRoll").html(roll + ". Turn ends.");
      currentPlayer = changePlayers(currentPlayer);
    }

    // If the roll was NOT 1
    else {
      if (currentPlayer === 1) {
        playerOne.roundPoints += roll;
        $("#roundPoints").html(playerOne.roundPoints);
      } else if (currentPlayer === 2) {
        playerTwo.roundPoints += roll;
        $("#roundPoints").html(playerTwo.roundPoints);
      }
    }
  });
  // Click for current player to end turn.
  $("#endTurn").click(function () {
    if (currentPlayer === 1) {
      $("#roundPoints").html(playerOne.roundPoints);
      playerOne.endTurn();
      $("#p1Total").html(playerOne.gamePoints);
      $("#roundPoints").html(playerOne.roundPoints);
    } else if (currentPlayer === 2) {
      $("#roundPoints").html(playerTwo.roundPoints);
      playerTwo.endTurn();
      $("#p2Total").html(playerTwo.gamePoints);
      $("#roundPoints").html(playerTwo.roundPoints);
    }
    currentPlayer = changePlayers(currentPlayer);
  });
});
