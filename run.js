const Game = require('./src/Game');
const getName = require('./src/reg');

async function startGame() {
  console.clear();
  const userName = await getName();
  process.stdin.resume();

  const game = new Game(60, userName);
  game.play();
}

startGame();
