const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 5;
let xSpeed = 2;
let ySpeed = 5;
let mode = 'unclicked';

class Game {

    constructor(props) { 
        this.canvas = document.createElement('myCanvas');
        this.canvas.width = window.innerWidth * 0.75;
        this.canvas.height = window.innerHeight / 1.5;
        this.ctx = this.canvas.getContext("2d");
    }

    drawBox() {
        requestAnimationFrame(drawBox);
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.beginPath();
        this.ctx.rect(x, y, 60, 60);
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fill();
        this.ctx.closePath();
        x += xSpeed;

        if (x > canvas.width - 60) {
            xSpeed = -xSpeed;
        } else if (x < 0) {
            xSpeed = -xSpeed;
        }

        if (mode == 'fall') {
            dropBox();
        }
    }


    addEventListener(e){('click', (e) => {mode = 'fall'}, false)};

    dropBox() {
        // requestAnimationFrame(dropBox);
        xSpeed = 0;
        y += ySpeed;

        if (y > canvas.height - 60) {
            y = 540;
        }
    }
}

