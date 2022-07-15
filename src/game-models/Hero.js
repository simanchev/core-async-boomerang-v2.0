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
    if (this.position > 0) this.position -= 1;
  }

  moveRight() {
    if (this.position < this.trackLength - 1) this.position += 1;
  }

  attack(hero) {
    this.boomerang.fly(hero);
  }

  moveUp() {
    if (this.track > 0) this.track -= 1;
  }

  moveDown() {
    if (this.track < 2) this.track += 1;
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
