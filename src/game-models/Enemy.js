// Враг.
let j = 0;
class Enemy {

  constructor(trackLength, i) {
    this.generateSkin();
    this.position = trackLength;
    this.track = i;
  }


  generateSkin() {
    const skins = ['Regex💀','💀ArrayMethods💀','💀Class💀','💀Promise💀','💀SQL💀','💀Regex💀','💀ArrayMethods💀','💀Class💀','💀Promise💀','💀SQL💀','💀Regex💀','💀ArrayMethods💀','💀Class💀','💀Promise💀','💀SQL💀'];
    this.skin = skins[j];
    j++;
  }

  moveLeft() {
    if (this.position > -100) this.position -= 1;
    else this.position - 1000;
  }

  die() {
    this.position = '?';
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
