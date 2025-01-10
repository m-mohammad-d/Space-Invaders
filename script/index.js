
import { Game } from "./Game.js";


const game = new Game("canvas");


setInterval(() => {
  game.generateAlien();
}, 2000); 
