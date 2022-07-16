class Enemy {
  constructor(trackLength, trackRoad) {
    this.generateSkin();
    this.position = trackLength;
    this.trackRoad = trackRoad;
  }

  generateSkin() {
    const skins = [
      'r',
      'e',
      'o',
      's',
      'a',
      'w',
      // 'regExp',
      // 'arrays',
      // 'promises',
      // 'objects',
      // 'sequelize',
      // 'migrations',
      // 'seeds',
      // 'joins',
      // 'async/await',
      // 'eventLoop',
      // 'callback',
      // 'classes',
      // 'prototypes',
      // 'recursion',
      // 'debugging',
      // 'refactoring',
      // 'beekeeper',
      // 'npm',
      // 'fs',
      // 'git',
      // 'this',
    ];
    const colors = ['\x1b[41m', '\x1b[42m', '\x1b[43m', '\x1b[44m', '\x1b[45m', '\x1b[46m']

    this.skin = `${colors[Math.floor(Math.random() * colors.length)]} ${skins[Math.floor(Math.random() * skins.length)]} \x1b[0m `;
    
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
