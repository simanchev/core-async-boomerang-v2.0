// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track, trackBorder) {

    console.clear();
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
