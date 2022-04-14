// Business Logic
function Player(roundPoints, gamePoints) {
  this.roundPoints = roundPoints;
  this.gamePoints = gamePoints;
}

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
    // If the roll was a 1..
    if (roll === 1) {
      $("#currentRoll").html(roll + ". Turn ends.");
      if (currentPlayer === 1) {
        $("#roundPoints").html(playerOne.roundPoints);
        playerOne.gamePoints = playerOne.gamePoints + playerOne.roundPoints;
        $("#p1Total").html(playerOne.gamePoints);
        playerOne.roundPoints = 0;
        $("#roundPoints").html(0);
      } else if (currentPlayer === 2) {
        $("#roundPoints").html(playerTwo.roundPoints);
        playerTwo.gamePoints = playerTwo.gamePoints + playerTwo.roundPoints;
        $("#p2Total").html(playerTwo.gamePoints);
        playerTwo.roundPoints = 0;
        $("#roundPoints").html(0);
      }
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
      playerOne.gamePoints = playerOne.gamePoints + playerOne.roundPoints;
      $("#p1Total").html(playerOne.gamePoints);
      playerOne.roundPoints = 0;
      $("#roundPoints").html(0);
    } else if (currentPlayer === 2) {
      playerTwo.gamePoints = playerTwo.gamePoints + playerTwo.roundPoints;
      $("#p2Total").html(playerTwo.gamePoints);
      playerTwo.roundPoints = 0;
      $("#roundPoints").html(0);
    }
    currentPlayer = changePlayers(currentPlayer);
  });
});
