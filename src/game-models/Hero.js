// Наш герой.

class Hero {
  constructor(position, trackLength, boomerang, i) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position;
    this.trackLength = trackLength;
    this.boomerang = boomerang;
    this.track = i;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
