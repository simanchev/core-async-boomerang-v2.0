const { Sequelize } = require('sequelize');
const Game = require('./src/Game');
const getName = require('./src/reg');

const sequelize = new Sequelize('boomteam', 'boomteam', 'boom', {
  host: 'localhost',
  dialect: 'postgres',
});

async function startGame() {
  const userName = await getName();
  await sequelize.query(
    `
    INSERT INTO results (user_name, user_result)
    VALUES ('${userName}', 0);
    `,
  );
  const game = new Game({
    trackLength: 30,
  });
  game.play();
}

startGame();
