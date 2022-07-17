const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Brain = require('./game-models/Brain');
const View = require('./View');
const getKeypress = require('./keyboard');
const player = require('play-sound')(opts = {});

class Game {
  constructor(trackLength, userName) {
    this.userName = userName;
    this.trackLength = trackLength;
    this.trackRoad = 1;
    this.words = [
      ['🅵', '🆂'],
      ['🆂', '🆀', '🅻'],
      ['🅹', '🅾', '🅸', '🅽'],
      ['🅲', '🅻', '🅰', '🆂', '🆂'],
      ['🆁', '🅴', '🅶', '🅴', '🆇', '🅿'],
      ['🅿', '🆁', '🅾', '🅼', '🅸', '🆂', '🅴'],
      ['🅲', '🅰', '🅻', '🅻', '🅱', '🅰', '🅲', '🅺'],
      ['🆁', '🅴', '🅲', '🆄', '🆁', '🆂', '🅸', '🅾', '🅽'],
      ['🅰', '🆂', '🆈', '🅽', '🅲', '🅷', '🆁', '🅾', '🅽', '🆈'],
    ];
    this.round = 1;
    this.targetWord = this.words[this.round - 1];
    this.displayedWord = []
    this.colors = ['\x1b[31m', '\x1b[32m', '\x1b[34m', '\x1b[35m', '\x1b[36m'];
    this.targetWord.forEach((letter) => {
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.displayedWord.push([letter, `${color}${letter}\x1b[0m`]);
    });
    this.letterIndex = null;
    this.coloredLetters = [];
    this.brain = new Brain(0, trackLength, this.trackRoad, player);
    this.hero = new Hero(0, trackLength, this.trackRoad, this.brain, this.sound, player);
    this.enemy = [new Enemy(this.trackLength - 3, Math.floor(Math.random() * 3), this.targetWord, player)];
    this.view = new View();
    this.track = [];
    this.trackBorder = [];
    this.sound = player.play('./src/sounds/gamesound2.wav');
    this.player = player;
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
      this.brain.move(this.hero.trackRoad, this.hero.position, this.enemy);
    }

    this.trackBorder = new Array(this.trackLength).fill('-');
  }

  check() {
    this.enemy.forEach((enemy) => {
      if (this.hero.position === enemy.position && 
        this.hero.trackRoad === enemy.trackRoad) {
        this.hero.die(this.enemy, this.userName, this.round, this.sound);
      }

      if ((this.brain.position === enemy.position || 
        this.brain.position - enemy.position === 1) && 
        this.brain.trackRoad === enemy.trackRoad &&
        this.brain.flyStatus === true) {
        if (this.targetWord.includes(enemy.skin)) {
          this.letterIndex = this.targetWord.indexOf(enemy.skin);
          const secondLetterIndex = this.targetWord.indexOf(enemy.skin, this.letterIndex + 1);

          if (!this.coloredLetters.includes(this.letterIndex)) {
            this.coloredLetters.push(this.letterIndex);

            if (this.coloredLetters.length === this.targetWord.length) {
              this.round++;
              this.displayedWord = [];
              this.coloredLetters = [];
              this.letterCounter = 0;
              this.targetWord = this.words[this.round - 1];

              this.targetWord.forEach((letter) => {
                const color = this.colors[Math.floor(Math.random() * this.colors.length)];
                this.displayedWord.push([letter, `${color}${letter}\x1b[0m`]);
              });
            }
          } else if (!this.coloredLetters.includes(secondLetterIndex)) {
            this.coloredLetters.push(secondLetterIndex);

            if (this.coloredLetters.length === this.targetWord.length) {
              this.round++;
              this.displayedWord = [];
              this.coloredLetters = [];
              this.letterCounter = 0;
              this.targetWord = this.words[this.round - 1];

              this.targetWord.forEach((letter) => {
                const color = this.colors[Math.floor(Math.random() * this.colors.length)];
                this.displayedWord.push([letter, `${color}${letter}\x1b[0m`]);
              });
            }
          }

          else {
            this.hero.die(this.enemy, this.userName, this.round, this.sound);
          }
        } else {
          this.hero.die(this.enemy, this.userName, this.round, this.sound);
        }

        enemy.die();
        this.brain.flyDirection = -1;
      }
    });
  }

  play() {

    getKeypress(this.hero, this.enemy);
    setInterval(() => {
      this.check();
      this.regenerateTrack();
      this.view.render(this.track, this.trackBorder, this.displayedWord, this.coloredLetters, this.round);
    }, 100);
    setInterval(() => {
      this.enemy.push(new Enemy(this.trackLength - 3, Math.floor(Math.random() * 3), this.targetWord, player));
    }, 600);
  }
}

module.exports = Game;
