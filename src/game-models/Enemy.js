class Enemy {
  constructor(trackLength, trackRoad) {
    this.generateSkin();
    this.position = trackLength;
    this.trackRoad = trackRoad;
  }

  generateSkin() {
    const skins = [
      'regExp',
      'arrays',
      'promises',
      'objects',
      'sequelize',
      'migrations',
      'seeds',
      'joins',
      'async/await',
      'eventLoop',
      'callback',
      'classes',
      'prototypes',
      'recursion',
      'debugging',
      'refactoring',
      'beekeeper',
      'npm',
      'fs',
      'git',
      'this',
    ];

    this.skin = `\x1b[1m < ${skins[Math.floor(Math.random() * skins.length)]} > \x1b[0m `;
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
