
import Box from './Box'

class Game {
    constructor() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext('2d');
        this.ctxHeight = this.canvas.height;
        this.ctxWidth = this.canvas.width;
        this.box = new Box(this); //allows us to have access to all the other game components
        this.render = this.render.bind(this);
        this.startGame = this.startGame.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.play = this.play.bind(this);


        this.windowScroller;
        this.viewScreen = 0;
        this.current = 0; // go into game component 
        this.mode = null;
        // this.xSpeed = 2;
        // this.ySpeed = 5;
        this.tableHeight = 20;
        this.tableWidth = 100;
        this.tableX = (this.canvas.width - this.tableWidth) / 2
        this.boxHeight = 50;
        this.score = 0;

        this.canvas.addEventListener('click', (e) => {
            if (this.mode === 'waiting') {
                this.mode = 'fall';
                this.box.play(); //falling function    
            }
        }, false);
    }

    startGame() {
        this.box;
        this.displayScore();
        this.mode = 'waiting';
        this.box.xSpeed = 2;
        this.current = 0;
        this.box.drawBox();
    }

    render() {
        this.box.drawBox();
    }

    displayScore() {
        this.ctx.font = "bold 20px";
        this.ctx.fillStyle = 'black';
        this.ctx.fillText('Score: ' + this.score, 300, 50);
    }

    gameOver() {
        mode = 'gameOver';
        alert("GAME OVER. Replay?");
        document.location.reload();
    }

    play() {
        this.startGame();
        this.box.createBox();
        // console.log(this.mode)
        //if the box is moving side to side
        // this.box.boxes[this.current].y += this.box.ySpeed; 
        this.box.boxes[this.current].x += this.box.xSpeed;
        // debugger
        
        if (this.box.boxes[this.current].x > this.canvas) {
            console.log(this.box.boxes[this.current].x);
            // this.box.collisionDetection();
            this.box.xSpeed = -this.box.xSpeed;
            this.box.xSpeed = 0;
        }

        if (this.box.boxes[this.current].x === 10) {
            this.box.xSpeed = 0;
        }
        if (this.mode === 'waiting') {
            // if (this.box.xSpeed > 0 && this.box.boxes[this.current].x + this.box.boxes[this.current].width > this.canvas.width)
            //     this.box.xSpeed = -this.box.xSpeed;
            // if (this.box.xSpeed < 0 && this.box.boxes[this.current].x < 0)
            //     this.box.xSpeed = -this.box.xSpeed;
        }

        if (this.windowScroller) {
            this.viewScreen++;
            this.windowScroller--;
        }
    }

}


export default Game;