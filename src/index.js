import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Player from "./dice.js";

// User Interface Logic
function changePlayers(currentPlayer) {
  switch (currentPlayer) {
    case 1:
      currentPlayer = 2;
      $("#playerTurn").html(currentPlayer);
      playerTurnIndicator.style.backgroundColor = "#7897ab";
      break;
    case 2:
      currentPlayer = 1;
      $("#playerTurn").html(currentPlayer);
      playerTurnIndicator.style.backgroundColor = "#d885a3";
      break;
  }
  return currentPlayer;
}

$(document).ready(function () {
  // Players initialize to start game.
  let playerOne = new Player(0, 0);
  let playerTwo = new Player(0, 0);
  let currentPlayer = 1;
  playerTurnIndicator.style.backgroundColor = "#d885a3";
  $("#playerTurn").html(currentPlayer);
  $("#p1Total").html(playerOne.gamePoints);
  $("#p2Total").html(playerTwo.gamePoints);

  $("#startNewGame").click(function () {
    playerOne.startNewGame();
    playerTwo.startNewGame();
    $("#p1Total").html(playerOne.gamePoints);
    $("#p2Total").html(playerTwo.gamePoints);
    $("#currentRoll").html("-");
    $("#roundPoints").html(0);
  });

  $("#rollDie").click(function () {
    $("#memo").html("");
    let roll = Math.floor(Math.random() * 6 + 1);
    $("#currentRoll").html(roll);
    // If the roll is 1
    if (roll === 1) {
      if (currentPlayer === 1) {
        playerOne.roundPoints = 0;
        playerOne.endTurn();
        $("#p1Total").html(playerOne.gamePoints);
        $("#memo").html("<strong>PLAYER 1:</strong> Rolled a 1. Turn ended.");
      } else if (currentPlayer === 2) {
        playerTwo.roundPoints = 0;
        playerTwo.endTurn();
        $("#p2Total").html(playerTwo.gamePoints);
        $("#memo").html("<strong>PLAYER 2:</strong> Rolled a 1. Turn ended.");
      }
      currentPlayer = changePlayers(currentPlayer);
    }
    // If the roll is NOT 1
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
      if (playerOne.checkWinner()) {
        $("#memo").html("<strong>PLAYER 1</strong> wins!");
        $("#rollDie").attr("disabled", true);
        $("#endTurn").attr("disabled", true);
      }
    } else if (currentPlayer === 2) {
      $("#roundPoints").html(playerTwo.roundPoints);
      playerTwo.endTurn();
      $("#p2Total").html(playerTwo.gamePoints);
      if (playerTwo.checkWinner()) {
        $("#memo").html("<strong>PLAYER 2</strong> wins!");
        $("#rollDie").attr("disabled", true);
        $("#endTurn").attr("disabled", true);
      }
    }
    currentPlayer = changePlayers(currentPlayer);
  });
});
