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

    if (j > 50 && j % 5 == 4 && this.enemy2.position >= 0)

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
    getKeypress(this.hero, this.hero.position, this.enemy.position);
    setInterval(() => {
      j++;
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(
        this.track
      );
    }, 100);
  }
}

module.exports = Game;

