import "./styles/index.scss";

document.addEventListener('DOMContentLoaded', () => {

  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  let x = 0;
  let y = 5;
  let xSpeed = 2;
  let ySpeed = 5;

  function drawBox() {
    requestAnimationFrame(drawBox);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(x, y, 60, 60);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
    x += xSpeed;

    if (x > canvas.width - 60) {
      xSpeed = -xSpeed;
    } else if (x < 0) {
      xSpeed = -xSpeed;
    }

  }

  
  canvas.addEventListener('click', (e) => {
    requestAnimationFrame(drawBox);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    xSpeed = 0;
    y += ySpeed;
  }, false);

  

  requestAnimationFrame(drawBox);

});

