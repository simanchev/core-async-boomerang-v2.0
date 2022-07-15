const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
const Boomerang = require("./game-models/Boomerang");
const View = require("./View");
const getKeypress = require("./keyboard");

let x = 1;
let j = 1;
let vector = 1;
let i = 1;

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang(trackLength, 1);
    this.hero = new Hero(0, trackLength, this.boomerang, 1);
    this.enemy2 = new Enemy(trackLength, 0);
    this.enemy = new Enemy(trackLength, 2);
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    for (let z = 0; z < 3; z++)
      this.track[z] = new Array(this.trackLength).fill("  ");
    this.track[this.hero.track][this.hero.position] = this.hero.skin;

    if (j > 20) this.track[this.enemy.track][this.enemy.position] = this.enemy.skin;
    if (j % 5 == 4 && this.enemy.position >= 0) this.enemy.moveLeft();

    if (j === 50) this.enemy2.position = this.trackLength;
    if (j > 50) this.track[this.enemy2.track][this.enemy2.position] = this.enemy2.skin;
    if (j % 5 == 4 && this.enemy2.position >= 0) this.enemy2.moveLeft();

    this.track[this.boomerang.track][this.boomerang.position] =
    this.boomerang.skin;

    if (this.hero.position == this.boomerang.position) {
      vector = -vector;
      this.boomerang.position = -100;
    }

    if (this.enemy.position == this.boomerang.position) {
      vector = -vector;
      this.enemy.position = -10;
    }
    if (vector == 1) this.boomerang.moveRight();
    if (vector == -1) this.boomerang.moveLeft();
  }

  check() {
    if (
      this.hero.position === this.enemy.position &&
      this.hero.track === this.enemy.track
    ) {
      this.hero.die();
    }
  }

  play() {
    console.log(this.hero.moveLeft)
    getKeypress(this.hero);
    setInterval(() => {
      j++;
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(
        this.track,
        this.hero.position,
        this.enemy.position,
        this.boomerang.position,
        vector,
        j
      );
    }, 100);
  }
}

module.exports = Game;

