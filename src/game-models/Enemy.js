class Enemy {
  constructor(trackLength, trackRoad) {
    this.generateSkin();
    this.position = trackLength;
    this.trackRoad = trackRoad;
  }

  generateSkin() {
    const skins = [
      '🅰', '🅱', '🅲', '🅴', '🅵',
      '🅶', '🅷', '🅸', '🅹', '🅺',
      '🅻', '🅼', '🅽', '🅾', '🅿',
      '🆀', '🆁', '🆂', '🆃', '🆄',
      '🆆', '🆇', '🆈', '🆉',
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
    // this.skin = `${colors[Math.floor(Math.random() * colors.length)]}${skins[Math.floor(Math.random() * skins.length)]}\x1b[0m`;
  }

  moveLeft() {
    this.position -= 1;
  }

  die() {
    this.position = -1;
  }
}

module.exports = Enemy;
