const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Brain = require('./game-models/Brain');
const View = require('./View');
const getKeypress = require('./keyboard');

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.trackRoad = 1;
    this.brain = new Brain(0, trackLength, this.trackRoad);
    this.hero = new Hero(0, trackLength, this.trackRoad, this.brain);
    this.enemy = [new Enemy(this.trackLength - 3, Math.floor(Math.random() * 3))];
    this.view = new View();
    this.track = [];
    this.trackBorder = [];
    this.words = [
      ['🅽', '🅿', '🅼'],
      '🅵🆂',
      '🅰🆁🆁🅰🆈',
      '🆁🅴🅲🆄🆁🆂🅸🅾🅽',
      '🆁🅴🅶🅴🆇🅿',
      '🅾🅱🅹🅴🅲🆃',
      '🆃🅷🅸🆂',
      '🅲🅻🅰🆂🆂',
      '🅲🅰🅻🅻🅱🅰🅲🅺',
      '🅿🆁🅾🅼🅸🆂🅴',
      '🅰🆂🆈🅽🅲',
      '🅰🆆🅰🅸🆃',
      '🆂🆀🅻',
      '🅹🅾🅸🅽',
      '🆂🅴🆀🆄🅴🅻🅸🆉🅴',
    ];
    this.regenerateTrack();
  }

  regenerateTrack() {
    for (let i = 0; i < 3; i++) {
      this.track[i] = new Array(this.trackLength).fill(' ');
    }

    this.track[this.hero.trackRoad][this.hero.position] = this.hero.skin;
    this.enemy.forEach((enemy) => {
      this.track[enemy.trackRoad][enemy.position] = enemy.skin;
      enemy.moveLeft();
    });

    if (this.brain.flyStatus) {
      this.track[this.brain.trackRoad][this.brain.position] = this.brain.skin;
      this.brain.move(this.hero.trackRoad, this.hero.position);
    }

    this.trackBorder = new Array(this.trackLength).fill('-');
  }

  check() {
    if (this.hero.position === this.enemy.position && 
      this.hero.trackRoad === this.enemy.trackRoad) {
      this.hero.die();
    }
  }

  play() {
    getKeypress(this.hero, this.enemy);
    setInterval(() => {
      this.check();
      this.regenerateTrack();
      this.view.render(this.track, this.trackBorder, this.words);
    }, 100);

    setInterval(() => {
      this.enemy.push(new Enemy(this.trackLength - 3, Math.floor(Math.random() * 3)));
    }, 1500);
  }
}

module.exports = Game;


















// const Hero = require("./game-models/Hero");
// const Enemy = require("./game-models/Enemy");
// const Boomerang = require("./game-models/Boomerang");
// const View = require("./View");
// const getKeypress = require("./keyboard");

// let x = 0;
// let acc = 1;
// let boomerangDirection = 1;
// let i = 1;

// class Game {
//   constructor({ trackLength }) {
//     this.trackLength = trackLength;
//     this.boomerang = new Boomerang(trackLength, 1);
//     this.hero = new Hero(0, trackLength, this.boomerang, 1);
//     this.enemy = [];
//     this.view = new View();
//     this.track = [];
//     this.regenerateTrack();
//   }

//   regenerateTrack() {
//     for (let z = 0; z < 3; z++)
//       this.track[z] = new Array(this.trackLength).fill("  ");

//     this.track[this.hero.track][this.hero.position] = this.hero.skin;

//     if (acc % 10 === 5) {
//       this.enemy.push(new Enemy(this.trackLength, x % 3));
//       this.track[this.enemy[x].track][this.enemy[x].position] = this.enemy[x].skin;
//       x++;
//     }

//     this.enemy.forEach((el) => (this.track[el.track][el.position] = el.skin));
//     this.enemy.forEach((el) => el.moveLeft());

//     this.track[this.boomerang.track][this.boomerang.position] = this.boomerang.skin;
    
//     if (this.hero.position == this.boomerang.position) {
//       boomerangDirection = -boomerangDirection;
//       this.boomerang.position = -100;
//     }

//     this.enemy.forEach((el) => {
//       if (el.position == this.boomerang.position) {
//         boomerangDirection = -boomerangDirection;
//         el.position = -100;
//       }
//     })


//     if (boomerangDirection == 1) this.boomerang.moveRight();
//     if (boomerangDirection == -1) this.boomerang.moveLeft();
//   }

//   check() {
//     if (
//       this.hero.position === this.enemy.position &&
//       this.hero.track === this.enemy.track
//     ) {
//       this.hero.die();
//     }
//   }

//   play() {
//     getKeypress(this.hero);
//     setInterval(() => {
//       acc++;
//       // Let's play!
//       this.check();
//       this.regenerateTrack();
//       this.view.render(
//         this.track,
//         this.hero.position,
//         this.enemy.position,
//         this.boomerang.position,
//         boomerangDirection,
//         acc
//       );
//     }, 100);
//   }
// }

// module.exports = Game;
