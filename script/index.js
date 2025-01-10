import { Game } from "./Game.js";
import { loadSettings } from "./utils.js";
const setting = loadSettings();
console.log(setting);

if (!setting) {
  const defaultSettings = {
    volume: 50,
    difficulty: "medium",
    enemyGenerateSpeed: 2000,
    enemyMoveSpeed: 2,
    scorePerEnemy: 2,
  };

  localStorage.setItem("gameSettings", JSON.stringify(defaultSettings));
}
const game = new Game("canvas");
