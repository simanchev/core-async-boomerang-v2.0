const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
const Boomerang = require("./game-models/Boomerang");
const View = require("./View");
const getKeypress = require("./keyboard");

let x = 0;
let acc = 1;
let boomerangDirection = 1;
let i = 1;

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang(trackLength, 1);
    this.hero = new Hero(0, trackLength, this.boomerang, 1);
    this.enemy = [];
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    for (let z = 0; z < 3; z++)
      this.track[z] = new Array(this.trackLength).fill("  ");

    this.track[this.hero.track][this.hero.position] = this.hero.skin;

    if (acc % 10 === 5) {
      this.enemy.push(new Enemy(this.trackLength, x % 3));
      this.track[this.enemy[x].track][this.enemy[x].position] = this.enemy[x].skin;
      x++;
    }

    this.enemy.forEach((el) => (this.track[el.track][el.position] = el.skin));
    this.enemy.forEach((el) => el.moveLeft());

    this.track[this.boomerang.track][this.boomerang.position] = this.boomerang.skin;
    
    if (this.hero.position == this.boomerang.position) {
      boomerangDirection = -boomerangDirection;
      this.boomerang.position = -100;
    }

    this.enemy.forEach((el) => {
      if (el.position == this.boomerang.position) {
        boomerangDirection = -boomerangDirection;
        el.position = -100;
      }
    })


    if (boomerangDirection == 1) this.boomerang.moveRight();
    if (boomerangDirection == -1) this.boomerang.moveLeft();
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
    getKeypress(this.hero);
    setInterval(() => {
      acc++;
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(
        this.track,
        this.hero.position,
        this.enemy.position,
        this.boomerang.position,
        boomerangDirection,
        acc
      );
    }, 100);
  }
}

module.exports = Game;
