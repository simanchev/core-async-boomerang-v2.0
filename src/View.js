// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track, trackBorder, words) {

    console.clear();
    console.log('\n');
    console.log(`Тема занятий: ${words[0].join(' ')}`)
    console.log('\n');
    console.log(trackBorder.join(''));
    console.log('\n');

    for (let i = 0; i < 3; i++) {
      console.log(track[i].join(''));
      console.log('\n');
    }

    console.log(trackBorder.join(''));
    console.log('\n');
  }
}

module.exports = View;
