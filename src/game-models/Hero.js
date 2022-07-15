class Hero {
  constructor(position, trackLength, trackRoad) {
    this.skin = '👨‍💻';
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
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
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
