import { Align } from "./Align.js";

export class Alien extends Align {
  constructor(x, y, width = 50, height = 50, speed = 4) {
    super(x, y);
    this.width = width;
    this.height = height;
    this.color = "#0f0";
    this.speed = speed;
    this.img = new Image();
    this.img.src = "./asset/image/alien.png";
  }

  move() {
    this.y += this.speed;
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
