class Box { 
    constructor(game) { 
        this.game = game;
        this.boxTemplate = this.boxTemplate.bind(this);
        this.collisionDetection = this.collisionDetection.bind(this);
        this.createBox = this.createBox.bind(this);
        this.incrementSpeed = this.incrementSpeed.bind(this)
    }

    boxTemplate() {
        this.game.boxes[this.game.current] = {
            x: 0,
            y: (this.game.current + 10) * 50,
            width: this.game.boxes[this.game.current - 1].width //the last box's width
        };
    }

    createBox(currentBox) { 
            let box = currentBox;
            this.game.ctx.fillStyle = '#C9FFFF';
            this.game.ctx.fillRect(box.x, 600 - box.y + this.game.viewScreen, box.width, 50);
    }

    collisionDetection() { 
        this.game.boxes[this.game.current].x = this.game.boxes[this.game.current].x + this.game.xSpeed;
        if (this.game.xSpeed > 0 && this.game.boxes[this.game.current].x + this.game.boxes[this.game.current].width > this.game.canvas.width){
            this.game.xSpeed = -this.game.xSpeed;
        }
        if (this.game.xSpeed < 0 && this.game.boxes[this.game.current].x < 0) {
            this.game.xSpeed = -this.game.xSpeed;
        }
    }

    boxFalling() {
        this.game.boxes[this.game.current].x = this.game.boxes[this.game.current].x - this.game.xSpeed;
        this.game.boxes[this.game.current].y = this.game.boxes[this.game.current].y - this.game.ySpeed;
        if (this.game.boxes[this.game.current].y == this.game.boxes[this.game.current - 1].y + 50) {
            this.game.mode = 'waiting';
            let difference = this.game.boxes[this.game.current].x - this.game.boxes[this.game.current - 1].x;
            if (Math.abs(difference) >= this.game.boxes[this.game.current].width) {
                this.game.gameOver();
            }

            if (this.game.boxes[this.game.current].x > this.game.boxes[this.game.current - 1].x) {
                this.game.boxes[this.game.current].width = this.game.boxes[this.game.current].width - difference;

            } else {
                this.game.boxes[this.game.current].width = this.game.boxes[this.game.current].width + difference;
                this.game.boxes[this.game.current].x = this.game.boxes[this.game.current - 1].x;
            }

            this.incrementSpeed();

            this.game.current++;
            this.game.score++;
            this.game.windowScroller = 50;
            this.game.box.boxTemplate();
        }
    }

    incrementSpeed() {  // later might change if i have levels to not do it after every single once
        if (this.game.xSpeed > 0) {
            this.game.xSpeed += .2;
        } else {
            this.game.xSpeed -= .2;
        }
    }
}

export default Box;