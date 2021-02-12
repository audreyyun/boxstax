import Box from "./Box1";

class Game {
    constructor() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.startGame = this.startGame.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.play = this.play.bind(this);
        this.displayScore = this.displayScore.bind(this) 

        this.box = new Box(this);
        this.windowScroller;
        this.viewScreen = 0;
        this.current = null; // go into game component 
        this.mode = null;
        this.xSpeed = 2;
        this.ySpeed = 5;
        this.score = 0;
        this.boxes = [];

        this.boxes[0] = { // the box on the bottom
            x: (this.canvas.width / 2) - 70,
            y: 50,
            width: 125
        };

        this.canvas.addEventListener('click', (e) => {
            if (this.mode === 'waiting') {
                this.mode = 'fall';
            }
        }, false);
    }

    displayScore() {
        this.ctx.font = "bold 20px";
        this.ctx.fillStyle = 'black';
        this.ctx.fillText('Score: ' + this.score, 300, 50);
    }

    startGame() { // used in index.js
        this.boxes.splice(1, this.boxes.length - 1);
        this.viewScreen = 0;
        this.windowScroller = 0;
        this.xSpeed = 2;
        this.current = 1;
        this.box.boxTemplate();
        this.mode = 'waiting';
    }

    gameOver() {
        alert("GAME OVER. Replay?");
        
        document.location.reload();
    }

    play() {
        
        // for this.score
        this.displayScore();
        //change the width of the box
        for (let n = 0; n < this.boxes.length; n++) {
            this.box.createBox(this.boxes[n]);
        }

        this.boxes[this.current].x = this.boxes[this.current].x + this.xSpeed;
        //if the box is moving side to side
        if (this.mode === 'waiting') {
            this.box.collisionDetection();
        }

        //after click, while box is falling 
        if (this.mode === 'fall') {
            this.box.boxFalling();
        }

        if (this.windowScroller) {
            this.viewScreen++;
            this.windowScroller--;
        }
    }

};


export default Game;