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
    const colors = ['\x1b[31m', '\x1b[32m', '\x1b[34m', '\x1b[35m', '\x1b[36m'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
    // this.skin = `${colors[Math.floor(Math.random() * colors.length)]}${skins[Math.floor(Math.random() * skins.length)]}\x1b[0m`;
  }

  moveLeft() {
    this.position -= 1;
  }

  die() {
    this.position = '?';
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
