const keypress = require('keypress');

const keyboard = {
  left: (hero) => hero.moveLeft(),
  right: (hero) => hero.moveRight(),
  up: (hero) => hero.moveUp(),
  down: (hero) => hero.moveDown(),
  space: (hero) => hero.attack(),
};

function getKeypress() {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      if (key.name in keyboard) {
        keyboard[key.name]();
      }
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

module.exports = getKeypress;
