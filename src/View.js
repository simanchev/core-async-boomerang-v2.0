// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track, trackBorder, word, coloredLetters, round) {
    this.track = track;
    this.trackBorder = trackBorder;
    this.word = word;
    this.coloredLetters = coloredLetters;
    this.round = round;
    this.displayWord = '';

    console.clear();
    word.forEach((letter, index) => {
      if (this.coloredLetters.includes(index)) {
        this.displayWord += `${letter[1]} `;
      } else {
        this.displayWord += `${letter[0]} `;
      }
    });

    console.log('\n');
    console.log(`Тема занятия (${this.round = round} из 9): ${this.displayWord}`)
    console.log('\n');
    console.log(this.trackBorder.join(''));
    console.log('\n');

    for (let i = 0; i < 3; i++) {
      console.log(this.track[i].join(''));
      console.log('\n');
    }

    console.log(this.trackBorder.join(''));
    console.log('\n');
  }
}

module.exports = View;
