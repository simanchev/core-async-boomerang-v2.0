const keypress = require('keypress');

const keyboard = {
  left: (hero, trackLength) => hero.moveLeft(trackLength),
  right: (hero, trackLength) => hero.moveRight(trackLength),
  up: (hero) => hero.moveUp(),
  down: (hero) => hero.moveDown(),
  // space: (hero) => hero.attack(hero),
};

function getKeypress(hero, trackLength) {
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
