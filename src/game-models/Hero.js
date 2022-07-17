const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('boomteam', 'boomteam', 'boom', {
  host: 'localhost',
  dialect: 'postgres',
});

class Hero {
  constructor(position, trackLength, trackRoad, weapon, sound, player) {
    this.skin = '🤯';
    this.position = position;
    this.trackLength = trackLength;
    this.trackRoad = trackRoad;
    this.weapon = weapon;
    this.sound = sound;
    this.player = player;
  }

  moveLeft() {
    if (this.position > 0) this.position -= 1;
  }

  moveRight() {
    if (this.position < this.trackLength - 1) this.position += 1;
  }

  attack() {
    this.weapon.fly(this.trackRoad, this.position);
  }

  moveUp() {
    if (this.trackRoad > 0) this.trackRoad -= 1;
  }

  moveDown() {
    if (this.trackRoad < 2) this.trackRoad += 1;
  }

  die(enemies, userName, round, sound) {
    enemies.forEach((enemy) => {
      enemy.die();
    });
    this.weapon.flyStatus = false;

    this.skin = '😭';

    sound.kill();


    async function writeResults() {
      // await sequelize.query(
      //   `
      //   INSERT INTO results (user_name, user_result)
      //   VALUES ('${userName}', ${round});
      //   `,
      // );
      setTimeout(() => {
        console.log('Ну, не вывез ты учебу... Давай назад на нулевую фазу!');
        console.log('\n***\n');
        console.log(`ELbrus Bootcamp.\nMade with 💗 and a little \x1b[34mc\x1b[31mo\x1b[33md\x1b[34mi\x1b[32mn\x1b[31mg\x1b[0m.`);
        console.log('\n\n\n');
        process.exit();
      }, 10);
    }
    writeResults();
  }
}

module.exports = Hero;
