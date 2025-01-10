
export class Background {
  constructor(src) {
    this.img = new Image();
    this.img.src = src;
  }

  load(callback) {
    this.img.onload = callback;
  }

  render(ctx, width, height) {
    ctx.drawImage(this.img, 0, 0, width, height);
  }
}
