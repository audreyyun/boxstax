
import Box from './Box'

class Game {
    constructor() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext('2d');
        this.ctxHeight = this.canvas.height;
        this.ctxWidth = this.canvas.width;
        this.box = new Box(this); //allows us to have access to all the other game components
        this.render = this.render.bind(this)
        this.startGame = this.startGame.bind(this)
        this.newBox = this.newBox.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.play = this.play.bind(this)

        this.windowScroller;
        this.viewScreen = 0;
        this.current = -1; // go into game component 
        this.mode = null;
        this.xSpeed = 2;
        this.ySpeed = 5;
        this.tableHeight = 20;
        this.tableWidth = 100;
        this.tableX = (this.canvas.width - this.tableWidth) / 2
        this.boxHeight = 50;
        this.boxes = [];
        this.score = 0;
        this.boxes[0] = {
            x: 0,
            y: 5,
            width: 80
        };
    }

    startGame() {
        console.log('this.startgame')
        this.box;
        console.log(this.box)
        this.displayScore();
        this.mode = 'waiting';
        this.xSpeed = 2;
        this.current++;
        this.newBox();
        this.box.drawBox();
        //requestanimationframe
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
        console.log('this.play')
        console.log(this.mode)      

        
        //change the width of the box
        for (let n = 0; n < this.boxes.length; n++) {
            let box = this.boxes[n];
            this.ctx.fillStyle = '#C9FFFF';
            this.ctx.fillRect(box.x, 600 - box.y + this.viewScreen, box.width, this.boxHeight);
        }

        //if the box is moving side to side
        if (this.mode === 'waiting') {
            console.log(this.current)
            console.log(this.boxes)
            this.boxes[this.current].x = this.boxes[this.current].x + this.xSpeed;
            if (this.xSpeed > 0 && this.boxes[this.current].x + this.boxes[this.current].width > this.canvas.width)
                this.xSpeed = -this.xSpeed;
            if (this.xSpeed < 0 && this.boxes[this.current].x < 0)
                this.xSpeed = -this.xSpeed;
        }

        //after click, while box is falling 
        if (this.mode === 'fall') {
            this.boxes[this.current].y = this.boxes[this.current].y - this.ySpeed;
            console.log('this.box')
            this.box.play();
            // if (this.boxes[this.current].y === this.boxes[this.current - 1].y + this.boxHeight) {
            //     this.mode = 'waiting';
            //     let difference = this.boxes[this.current].x - this.boxes[this.current - 1].x;
            //     if (Math.abs(difference) >= this.boxes[this.current].width) {
            //         this.gameOver();
            //     }

            //     if (this.boxes[this.current].x > this.boxes[this.current - 1].x) {
            //         this.boxes[this.current].width = this.boxes[this.current].width - difference;

            //     } else {
            //         this.boxes[this.current].width = this.boxes[this.current].width + difference;
            //         this.boxes[this.current].x = this.boxes[this.current - 1].x;
            //     }
            //     if (this.xSpeed > 0) {
            //         this.xSpeed += .2;
            //     } else {
            //         this.xSpeed -= .2;
            //     }

            //     this.current++;
            //     this.score++;
            //     this.windowScroller = this.boxHeight;
            //     this.newBox();
            // }
        }

        if (this.windowScroller) {
            this.viewScreen++;
            this.windowScroller--;
        }
    }

    newBox() {
        this.boxes[this.current] = {
            x: 0,
            y: (this.current + 10) * this.boxHeight,
            width: this.boxes[this.current].width
        };
    }

}


export default Game;