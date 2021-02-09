import "./styles/index.scss";

// document.addEventListener('DOMContentLoaded', function () {

//   const canvas = document.getElementById('canvas');
//   const ctx = canvas.getContext('2d');


//   ctx.beginPath();
//   ctx.rect(20, 40, 50, 50);
//   ctx.fillStyle = "#FF0000";
//   ctx.fill();
//   ctx.closePath();

//   ctx.beginPath();
//   ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
//   ctx.fillStyle = "green";
//   ctx.fill();
//   ctx.closePath();

//   ctx.beginPath();
//   ctx.rect(160, 10, 100, 40);
//   ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
//   ctx.stroke();
//   ctx.closePath();
//   // ctx.fillStyle = 'green';
//   // ctx.fillRect(10, 10, 150, 100);
//   window.ctx = ctx; //just so we have access so we can test

// });



// import "./images/yoda-stitch.jpg";
// import canvasExample from "./scripts/canvas";
//   // import Square from "./scripts/square";
//   // import { DOMExample } from "./scripts/DOMExample";
// // const currentStateObj = {
// //   currentExample: null,
// //   currentEventListeners: [],
// // };


// document.querySelector("#canvas-demo").addEventListener("click", startCanvas);
// document.querySelector("#DOM-demo").addEventListener("click", startDOM);


document.addEventListener('DOMContentLoaded', () => {

  // const canvas = document.getElementById('myCanvas');
  // const ctx = canvas.getContext('2d');
  // let x = canvas.width / 2;
  // let y = canvas.height - 30;
  // let dx = 2;
  // let dy = -2;



  // function draw() { 
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   drawBox();
  //   x += dx;
  //   y += dy;
  // }
  

  // function drawBox() { 
  //   ctx.beginPath();
  //   ctx.rect(20, 20, 150, 100);
  //   // ctx.fillStyle = "#0095DD";
  //   ctx.fill();
  //   ctx.stroke();
  // }
  
  // let interval = setInterval(draw, 10);

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
  //click just make it box move faster left and right
  canvas.addEventListener('click', (e) => {
    requestAnimationFrame(drawBox);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    xSpeed = 0;
    y += ySpeed;
  }, false);

  

  requestAnimationFrame(drawBox);

});

