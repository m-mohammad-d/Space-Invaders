
export class Align {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }


  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  isAlignedWith(other) {
    return this.x === other.x && this.y === other.y;
  }
}
