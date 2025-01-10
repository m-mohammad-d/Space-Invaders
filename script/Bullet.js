
import { Align } from "./Align.js";

export class Bullet extends Align {
  constructor(x, y) {
    super(x, y); 
    this.width = 4;
    this.height = 10;
    this.color = "#fff";
    this.speed = 5;
  }


  move() {
    this.y -= this.speed; 
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  collidesWith(alien) {
    return (
      this.x < alien.x + alien.width &&
      this.x + this.width > alien.x &&
      this.y < alien.y + alien.height &&
      this.y + this.height > alien.y
    );
  }
}
