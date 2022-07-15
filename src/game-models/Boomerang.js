// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(trackLength, i) {
    this.skin = '🌀';
    this.position = -1000;
    this.trackLength = trackLength;
    this.track = i;
  }

  fly(hero) {
    this.position = hero.position + 1;
  }

  moveLeft() {
    if (this.position >= 0 && this.position <= this.trackLength)
      this.position -= 1;
    else this.position = -1000;
  }

  moveRight() {
    if (this.position >= 0 && this.position <= this.trackLength)
      this.position += 1;
    else this.position = -1000;
  }
}

module.exports = Boomerang;
