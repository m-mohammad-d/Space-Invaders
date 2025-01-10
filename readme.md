
# Space Invaders

Space Invaders is a classic arcade-style space shooter game built with HTML, CSS, and JavaScript. The goal is to control a spaceship and shoot down alien enemies while avoiding collisions. The game gets more challenging as you progress, with aliens moving faster and becoming harder to avoid.

---

## Installation

To run the game locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/space-invaders.git
   ```
2. Navigate to the project directory:
   ```bash
   cd space-invaders
   ```
3. Open the `index.html` file in your browser to start playing.

---

## Game Overview

In **Space Invaders**, you control a spaceship that can move left, right, and shoot bullets to destroy aliens. The aliens spawn at the top of the screen and move down toward the player's ship. If an alien collides with the spaceship or reaches the bottom of the screen, the game is over.

The game includes:
- Randomly generated aliens.
- Bullet mechanics that allow the spaceship to shoot down enemies.
- A score system that rewards players for destroying aliens.
- Settings to adjust the speed of alien generation and sound volume.

---

## Game Classes

Here’s a brief explanation of the main JavaScript classes in the project:

### 1. **Alien.js**
   This file defines the behavior of the alien enemies. The `Alien` class contains properties like position, movement logic, and rendering functionality. Each alien is randomly generated at the top of the screen and moves downward. If it reaches the bottom, the game ends.

### 2. **Align.js**
   This utility file helps with alignment of game elements on the screen. It includes functions for positioning objects such as the spaceship, aliens, and bullets. This ensures that everything is aligned properly during gameplay.

### 3. **Background.js**
   This file handles the rendering of the background image or animation during the game. It may also manage the scrolling of the background or ensure that it loops correctly, providing the illusion of continuous movement in the game world.

### 4. **Bullet.js**
   This file defines the behavior of the bullets fired by the spaceship. The `Bullet` class controls the movement of the bullet, checking if it hits an alien, and handling its removal from the screen when it goes off the canvas.

### 5. **Game.js**
   This is the core of the game. The `Game` class manages the game loop, updates the canvas, handles user input, and checks for collisions between bullets and aliens. It also manages game-over conditions and restarts the game.

### 6. **Ship.js**
   This file defines the player's spaceship. The `Ship` class controls the ship's movement on the canvas based on keyboard input (such as arrow keys or `WASD` keys). It also handles shooting bullets and rendering the spaceship on the screen.

### 7. **Settings.js**
   This file stores the game’s configuration settings, such as the speed of alien generation and sound volume. The settings can be modified to adjust the difficulty and audio levels of the game.

### 8. **utils.js**
   This file contains utility functions that are used across the game. It includes functions for loading settings, playing sounds, and other common tasks required during the game.

---

## Project Link

You can access the project repository here:  
[Space Invaders GitHub Repository](https://github.com/yourusername/space-invaders)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

