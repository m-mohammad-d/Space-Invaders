import { Ship } from "./Ship.js";
import { Bullet } from "./Bullet.js";
import { Alien } from "./Alien.js";
import { Background } from "./Background.js";

export class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.gameOverModal = document.getElementById("gameOverModal");
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 800;
    this.canvas.height = 600;
    this.gameOver = false;

    this.ship = new Ship(this.canvas.width / 2 - 25, this.canvas.height - 80);
    this.background = new Background("./asset/image/background.jpg");
    this.bullets = [];
    this.aliens = [];

    this.initGame();
    this.bindEvents();
  }

  initGame() {
    this.ship.load(() => {
      this.updateCanvas();
    });
  }

  bindEvents() {
    document.addEventListener("keypress", this.handleKeyPress.bind(this));
    this.canvas.addEventListener("click", this.handleClick.bind(this));
  }

  handleKeyPress(e) {
    switch (e.key) {
      case "d":
        this.ship.move(this.ship.x + 10, this.ship.y);
        break;
      case "a":
        this.ship.move(this.ship.x - 10, this.ship.y);
        break;
      case "s":
        this.ship.move(this.ship.x, this.ship.y + 10);
        break;
      case "w":
        this.ship.move(this.ship.x, this.ship.y - 10);
        break;
      case " ":
        this.generateBullet();
        break;
    }
  }

  handleClick(e) {
    if (this.gameOver) {
      const x = e.offsetX;
      const y = e.offsetY;

      if (
        x >= this.canvas.width / 2 - 100 &&
        x <= this.canvas.width / 2 + 100 &&
        y >= this.canvas.height / 2 + 30 &&
        y <= this.canvas.height / 2 + 70
      ) {
        this.restartGame();
      }
    }
  }

  ShowgameOver() {
    this.gameOverModal.classList.add("show")
    this.gameOverModal.addEventListener("click" , () => {
      this.restartGame()
    })
  }
  updateCanvas() {
    if (this.gameOver) {
      this.ShowgameOver();
      return;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.background.render(this.ctx, this.canvas.width, this.canvas.height);
    this.ship.render(this.ctx);

    this.updateBullets();
    this.updateAliens();
    this.checkCollisions();

    requestAnimationFrame(() => this.updateCanvas());
  }

  updateBullets() {
    this.bullets.forEach((bullet, index) => {
      if (bullet.y > 0) {
        bullet.move();
        bullet.render(this.ctx);
      } else {
        this.bullets.splice(index, 1);
      }
    });
  }

  updateAliens() {
    this.aliens.forEach((alien, index) => {
      alien.move();
      if (alien.y + alien.height > this.canvas.height) {
        this.gameOver = true;
      }
      alien.render(this.ctx);
    });
  }

  generateBullet() {
    const bullet = new Bullet(this.ship.x + 23, this.ship.y - 10);
    this.bullets.push(bullet);
  }

  checkCollisions() {
    this.bullets.forEach((bullet, bulletIndex) => {
      this.aliens.forEach((alien, alienIndex) => {
        if (bullet.collidesWith(alien)) {
          this.bullets.splice(bulletIndex, 1);
          this.aliens.splice(alienIndex, 1);
        }
      });
    });
  }

  generateAlien() {
    const alien = new Alien(
      Math.random() * (this.canvas.width - 50),
      0,
      50,
      50
    );
    this.aliens.push(alien);
  }

  restartGame() {
    this.gameOver = false;
    this.bullets = [];
    this.gameOverModal.classList.remove("show")
    this.aliens = [];
    this.ship = new Ship(this.canvas.width / 2 - 25, this.canvas.height - 80);
    this.ship.load(() => {
      this.updateCanvas();
    });
  }
}
