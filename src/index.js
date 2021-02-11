import Game from "./scripts/game";
import "./styles/index.scss";


document.addEventListener('keydown', (e) => {

  if (e.key === 'Enter') {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let ctxHeight = canvas.height;
    let ctxWidth = canvas.width;
    const game = new Game();

    function gameLoop() {
      ctx.clearRect(0, 0, ctxWidth, ctxHeight);
      game.play();
      requestAnimationFrame(gameLoop);
    }
    requestAnimationFrame(gameLoop);
}

});
