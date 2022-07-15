// Основной файл.
// Запускает игру.
const Game = require('./src/Game');
const getName = require('./src/reg');

async function startGame() {
  await getName();
  const game = new Game({
    trackLength: 30,
  });
  game.play();
}

startGame();
