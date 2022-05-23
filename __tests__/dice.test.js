import Player from "./../src/dice.js";

describe("Player", () => {
  test("should correctly create a Player object with two attributes", () => {
    const playerTest = new Player(5, 10);
    expect(playerTest.roundPoints).toEqual(5);
    expect(playerTest.gamePoints).toEqual(10);
  });
  test("should correctly set roundPoints and gamePoints attributes to zero", () => {
    const newGame = new Player(5, 10);
    newGame.startNewGame();
    expect(newGame.roundPoints).toEqual(0);
    expect(newGame.gamePoints).toEqual(0);
  });
});
