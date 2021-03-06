class Enemy {
  constructor(trackLength, trackRoad, word, player) {
    this.generateSkin(word);
    this.position = trackLength;
    this.trackRoad = trackRoad;
    this.player = player;
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
