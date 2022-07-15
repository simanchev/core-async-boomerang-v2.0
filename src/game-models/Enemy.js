// Враг.

class Enemy {
  constructor(trackLength, i) {
    this.generateSkin();
    this.position = trackLength;
    this.track = i;
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    if (this.position > -1) this.position -= 1;
    else this.position - 1000;
  }

  die() {
    this.position = '?';
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
