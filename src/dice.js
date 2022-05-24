// // Business Logic
export default function Player(roundPoints, gamePoints) {
  this.roundPoints = roundPoints;
  this.gamePoints = gamePoints;
}

Player.prototype.startNewGame = function () {
  this.roundPoints = 0;
  this.gamePoints = 0;
  // $("#memo").html("");
  // $("#rollDie").attr("disabled", false);
  // $("#endTurn").attr("disabled", false);
};

Player.prototype.endTurn = function () {
  this.gamePoints = this.gamePoints + this.roundPoints;
  this.roundPoints = 0;
  //   $("#roundPoints").html(this.roundPoints);
  //   $("#currentRoll").html("-");
  return "Turn has been ended.";
};

// Player.prototype.checkWinner = function () {
//   if (this.gamePoints >= 100) {
//     return true;
//   }
// };
