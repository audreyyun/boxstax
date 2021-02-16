class Box { 
    constructor(game) { 
        this.game = game;
        this.boxTemplate = this.boxTemplate.bind(this);
        this.collisionDetection = this.collisionDetection.bind(this);
        this.createBox = this.createBox.bind(this);
        this.incrementSpeed = this.incrementSpeed.bind(this)
        this.boxpic = new Image();
        this.boxpic.src = 'src/images/block.png'
    }

    boxTemplate() {
        this.game.boxes[this.game.current] = {
            x: 0,
            y: (this.game.current + 10) * 50,
            width: this.game.boxes[this.game.current - 1].width //the last box's width
        };
    }

    createBox(currentBox) { //necessary because width changes
            let box = currentBox;
            let blockImg = this.boxpic;
            this.game.ctx.drawImage(blockImg, box.x, 600 - box.y + this.game.viewScreen, box.width, 50);
    }

    collisionDetection() { 
        let currentBox = this.game.boxes[this.game.current];
        currentBox.x = currentBox.x + this.game.xSpeed;
        if (this.game.xSpeed > 0 && currentBox.x + currentBox.width > this.game.canvas.width){
            this.game.xSpeed = -this.game.xSpeed;
        }
        if (this.game.xSpeed < 0 && currentBox.x < 0) {
            this.game.xSpeed = -this.game.xSpeed;
        }
    }

    boxFalling() {
        let currentBox = this.game.boxes[this.game.current];
        let lastBox = this.game.boxes[this.game.current - 1];

        currentBox.x = currentBox.x - this.game.xSpeed;
        currentBox.y = currentBox.y - this.game.ySpeed;

        if (currentBox.y == lastBox.y + 50) {
            this.game.mode = 'waiting';
            let difference = currentBox.x - lastBox.x;
            
            if (Math.abs(difference) >= currentBox.width) {
                this.game.gameOver();
            }

            if (currentBox.x > lastBox.x) {
                currentBox.width = currentBox.width - difference;

            } else {
                currentBox.width = currentBox.width + difference;
                currentBox.x = lastBox.x;
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