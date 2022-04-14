// Business Logic

function Player(id, roundPoints, gamePoints) {
  this.id = id;
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
  let playerOne = new Player("One", 0, 0);
  let playerTwo = new Player("Two", 0, 0);
  let currentPlayer = 1;
  $("#playerTurn").html(currentPlayer);
  // Upon button click..
  $("#rollDie").click(function () {
    let roll = Math.floor(Math.random() * 6 + 1);
    // If the roll was a 1..
    if (roll === 1) {
      console.log("Rolled a 1. Turn ends.");
      if (currentPlayer === 1) {
        console.log("Score this round was " + playerOne.roundPoints);
        playerOne.gamePoints = playerOne.gamePoints + playerOne.roundPoints;
        playerOne.roundPoints = 0;
        console.log("P.1 Total game points: " + playerOne.gamePoints);
      } else if (currentPlayer === 2) {
        console.log("Score this round was " + playerTwo.roundPoints);
        playerTwo.gamePoints = playerTwo.gamePoints + playerTwo.roundPoints;
        playerTwo.roundPoints = 0;
        console.log("P.2 Total game points: " + playerTwo.gamePoints);
      }
      currentPlayer = changePlayers(currentPlayer);
    }
    // If the roll was NOT 1
    else {
      console.log("Rolled a " + roll + ".");
      if (currentPlayer === 1) {
        playerOne.roundPoints += roll;
      } else if (currentPlayer === 2) {
        playerTwo.roundPoints += roll;
      }
      if (currentPlayer === 1) {
        console.log(
          "Current Points this round for P." +
            currentPlayer +
            " is " +
            playerOne.roundPoints
        );
      } else if (currentPlayer === 2) {
        console.log(
          "Current Points this round for P." +
            currentPlayer +
            " is " +
            playerTwo.roundPoints
        );
      }
    }
  });
  // Click for current player to end turn.
  $("#endTurn").click(function () {
    if (currentPlayer === 1) {
      console.log("Score this round was " + playerOne.roundPoints);
      playerOne.gamePoints = playerOne.gamePoints + playerOne.roundPoints;
      playerOne.roundPoints = 0;
      console.log("P.1 Total game points: " + playerOne.gamePoints);
    } else if (currentPlayer === 2) {
      console.log("Score this round was " + playerTwo.roundPoints);
      playerTwo.gamePoints = playerTwo.gamePoints + playerTwo.roundPoints;
      playerTwo.roundPoints = 0;
      console.log("P.2 Total game points: " + playerTwo.gamePoints);
    }
    currentPlayer = changePlayers(currentPlayer);
  });
});
