class Brain {
  constructor(position, trackLength, trackRoad) {
    this.skin = '🧠';
    this.position = position;
    this.trackLength = trackLength;
    this.trackRoad = trackRoad;
    this.flyStatus = false;
    this.flyDirection = 1;
  }

  fly(trackRoad, position) {
    if (!this.flyStatus) {
      this.flyStatus = true;
      this.flyDirection = 1;
      this.trackRoad = trackRoad;
      this.position = position + 1;
    }
  }

  move(trackRoad, position) {
    this.position += this.flyDirection;

    if (this.position === this.trackLength - 1) {
      this.flyDirection = -1;
    }

    if (this.position === position && this.trackRoad === trackRoad) {
      this.flyStatus = false;
    }

    if (!this.position) this.flyStatus = false;
  }
}

module.exports = Brain;
