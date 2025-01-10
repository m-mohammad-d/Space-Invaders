import { Align } from "./Align.js";

export class Ship extends Align {
  constructor(x, y) {
    super(x, y);
    this.img = new Image();
    this.img.src = "../asset/image/ship.png";
  }

  load(callback) {
    this.img.onload = callback;
  }

  move(newX, newY) {
    if (newX >= 0 && newX <= 800 - 50) {
      this.x = newX;
    }
    if (newY >= 20 && newY <= 600 - 50) {
      this.y = newY;
    }
  }

  render(ctx) {
    ctx.drawImage(this.img, this.x, this.y, 50, 50);
  }
}
