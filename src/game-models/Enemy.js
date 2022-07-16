class Enemy {
  constructor(trackLength, trackRoad, word) {
    this.generateSkin(word);
    this.position = trackLength;
    this.trackRoad = trackRoad;
  }

  generateSkin(word) {
    this.skin = word[Math.floor(Math.random() * word.length)];
  }

  moveLeft() {
    this.position -= 1;
  }

  die() {
    this.position = -1;
  }
}

module.exports = Enemy;
