// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    for (let z = 0; z < 3; z++) {
    console.log(track[z].join(""));
    }
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
