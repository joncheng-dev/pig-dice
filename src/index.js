import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Player from "./dice.js";

// User Interface Logic
function rollDisplay(currentPlayer, player, roll) {
  // If a 1 is rolled..
  if (roll === 1) {
    $("#memo").html(
      "<strong>PLAYER " +
        currentPlayer +
        ":</strong> Rolled a 1. Lose all points this round. Turn ended."
    );
    $("#currentRoll").html(roll);
    // Clears round points & displays it.
    player.roundPoints = 0;
    $("#roundPoints").html("-");
    // Updates game points for the current player.
    if (currentPlayer === 1) {
      $("#p1Total").html(player.gamePoints);
    } else {
      $("#p2Total").html(player.gamePoints);
    }
    // Disables roll die button.
    $("#rollDie").attr("disabled", true);
  } else if (roll !== 1) {
    player.roundPoints += roll;
    $("#roundPoints").html(player.roundPoints);
  }
}

function endTurn(currentPlayer, player) {
  $("#roundPoints").html(player.roundPoints);
  player.tallyPoints();
  $("#currentRoll").html("-");
  if (currentPlayer === 1) {
    $("#p1Total").html(player.gamePoints);
  } else {
    $("#p2Total").html(player.gamePoints);
  }
  $("#memo").html("");
  if (player.checkWinner()) {
    $("#memo").html("<strong>PLAYER " + currentPlayer + "</strong> wins!");
    $("#rollDie").attr("disabled", true);
    $("#endTurn").attr("disabled", true);
  }
}

function changePlayers(currentPlayer) {
  $("#currentRoll").html("-");
  $("#roundPoints").html("-");
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
    currentPlayer = 1;
    playerTurnIndicator.style.backgroundColor = "#d885a3";
    $("#playerTurn").html(currentPlayer);
    playerOne.startNewGame();
    playerTwo.startNewGame();
    $("#memo").html("");
    $("#rollDie").attr("disabled", false);
    $("#endTurn").attr("disabled", false);
    $("#p1Total").html(playerOne.gamePoints);
    $("#p2Total").html(playerTwo.gamePoints);
    $("#currentRoll").html("-");
    $("#roundPoints").html("-");
  });

  $("#rollDie").click(function () {
    $("#memo").html("");
    let roll = Math.floor(Math.random() * 6 + 1);
    $("#currentRoll").html(roll);
    if (currentPlayer === 1) {
      rollDisplay(currentPlayer, playerOne, roll);
    } else {
      rollDisplay(currentPlayer, playerTwo, roll);
    }
  });

  // Click for current player to end turn.
  $("#endTurn").click(function () {
    $("#rollDie").attr("disabled", false);
    if (currentPlayer === 1) {
      endTurn(currentPlayer, playerOne);
      if (!playerOne.checkWinner()) {
        currentPlayer = changePlayers(currentPlayer);
      }
    } else if (currentPlayer === 2) {
      endTurn(currentPlayer, playerTwo);
      if (!playerTwo.checkWinner()) {
        currentPlayer = changePlayers(currentPlayer);
      }
    }
  });
});
