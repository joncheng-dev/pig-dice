// // Business Logic
export default function Player(roundPoints, gamePoints) {
  this.roundPoints = roundPoints;
  this.gamePoints = gamePoints;
}

Player.prototype.startNewGame = function () {
  this.roundPoints = 0;
  this.gamePoints = 0;
};

Player.prototype.tallyPoints = function () {
  this.gamePoints = this.gamePoints + this.roundPoints;
  this.roundPoints = 0;
};

Player.prototype.checkWinner = function () {
  if (this.gamePoints >= 100) {
    return true;
  } else {
    return false;
  }
};
