import Game from "./scripts/game";
import "./styles/index.scss";


document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  let ctxHeight = canvas.height;
  let ctxWidth = canvas.width;
  const game = new Game();
  //newbox, displayscore, gameover, play all in game now

  // was at the bottom of play
  // window.requestAnimationFrame(play);

  // game.play();
  // window.requestAnimationFrame(() => {game.play()})

  function gameLoop() {
    ctx.clearRect(0, 0, ctxWidth, ctxHeight);
    game.play();
    requestAnimationFrame(gameLoop);
  }
  requestAnimationFrame(gameLoop);

});

// let game = new Game();
// ctx.clearRect(0,0,ctxWidth, ctxHeight)
