// import Game from "./scripts/game";
import Game from "./scripts/game1";
import "./styles/index.scss";


document.addEventListener('DOMContentLoaded', () => {
  
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  let ctxHeight = canvas.height;
  let ctxWidth = canvas.width;
  
  const game = new Game();
  document.addEventListener('click', (e) => {
    document.getElementById("start-game-page").style.display = "none";
  
});

document.getElementById('start').addEventListener("click", () => {
debugger
  if (game.isPlaying === false) { 
    game.startGame();

    function gameLoop() {
      ctx.clearRect(0, 0, ctxWidth, ctxHeight);
      game.play();
      requestAnimationFrame(gameLoop);
    }
    requestAnimationFrame(gameLoop);
  }
});



  const instruct = document.getElementById("instructions");
  const scroll = document.getElementById('instruction-background');


  instruct.onclick = function () {
    scroll.style.display = "flex";
  }

  // window.onclick = function (e) {
  //   if (e.target === scroll) {
  //     scroll.style.display = "none";
  //   }
  // }

  document.getElementById('x').addEventListener("click", () => { 
      scroll.style.display = "none";
  })
});