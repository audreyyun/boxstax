import Game from "./scripts/game";
import "./styles/index.scss";


document.addEventListener('DOMContentLoaded', () => {

  const game = new Game();
  //newbox, displayscore, gameover, play all in game now

  // was at the bottom of play
  // window.requestAnimationFrame(play);

  // game.play();
  window.requestAnimationFrame(() => {game.play()})

});

// let ctxHeight = canvas.height;
// let ctxWidth = canvas.width;
// let game = new Game();
// ctx.clearRect(0,0,ctxWidth, ctxHeight)
