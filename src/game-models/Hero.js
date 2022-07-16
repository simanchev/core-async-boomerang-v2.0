class Hero {
  constructor(position, trackLength, trackRoad) {
    this.skin = '🤯';
    this.position = position;
    this.trackLength = trackLength;
    this.trackRoad = trackRoad;
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
    if (this.trackRoad > 0) this.trackRoad -= 1;
  }

  moveDown() {
    if (this.trackRoad < 2) this.trackRoad += 1;
  }

  die() {
    this.skin = '😭';
    // enemy.position = -1;
    setTimeout(() => {
      console.log('Ну, не вывез ты учебу... Давай назад на нулевую фазу!');
      console.log('\n***\n');
      console.log(`ELbrus Bootcamp. \nMade with 💗 and a little \x1b[34mc\x1b[31mo\x1b[33md\x1b[34mi\x1b[32mn\x1b[31mg\x1b[0m.`);
      console.log('\n\n\n');
      process.exit();
    }, 10);
  }
}

// class Hero {
//   constructor(position, trackLength, boomerang, i) {
//     this.skin = '👨‍💻';
//     this.position = position;
//     this.trackLength = trackLength;
//     this.boomerang = boomerang;
//     this.track = i;
//   }

//   moveLeft() {
//     if (this.position > 0) this.position -= 1;
//   }

//   moveRight() {
//     if (this.position < this.trackLength - 1) this.position += 1;
//   }

//   attack(hero) {
//     this.boomerang.fly(hero);
//   }

//   moveUp() {
//     if (this.track > 0) this.track -= 1;
//   }

//   moveDown() {
//     if (this.track < 2) this.track += 1;
//   }

//   die() {
//     this.skin = '💀';
//     console.log('YOU ARE DEAD!💀');
//     process.exit();
//   }
// }

module.exports = Hero;
