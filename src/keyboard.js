const keypress = require('keypress');

const keyboard = {
  left: (hero, trackLength) => hero.moveLeft(trackLength),
  right: (hero, trackLength) => hero.moveRight(trackLength),
  up: (hero, enemy) => hero.moveUp(enemy),
  down: (hero, enemy) => hero.moveDown(enemy),
  space: (hero) => hero.attack(hero),
};

function getKeypress(hero) {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      if (key.name in keyboard) {
        keyboard[key.name](hero);
      }
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

module.exports = getKeypress;
