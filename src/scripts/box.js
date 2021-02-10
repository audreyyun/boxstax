class Box {
    constructor(game) {
        this.game = game
        this.draw = this.draw.bind(this);
        this.drawBox = this.drawBox.bind(this);
        this.dropBox = this.dropBox.bind(this);
        this.drawTable = this.drawTable.bind(this);
        this.play = this.play.bind(this);
        this.newBox = this.newBox.bind(this);
    }

    draw(ctx) {
        this.game.ctx.fillStyle = '#C9FFFF';
        this.game.ctx.fillRect(box.x, 600 - box.y + this.game.viewScreen, box.width, this.game.boxHeight);
    }

    drawTable(ctx) {
        this.game.ctx.beginPath();
        this.game.ctx.rect(this.game.tableX, this.game.canvas.height - this.game.tableHeight, this.game.tableWidth, this.game.tableHeight);
        this.game.ctx.fillStyle = "#0095DD";
        this.game.ctx.fill();
        this.game.ctx.closePath;
    }

    newBox() {
        console.log(this.game.boxes[this.game.current].width)
        const width = this.game.boxes[this.game.current].width;
        this.game.boxes[this.game.current] = {
            x: 0,
            y: (this.game.current + 10) * this.game.boxHeight,
            width: this.game.boxes[this.game.current].width
        };
    }

    move(ctx) {
        this.game.ctx.clearRect(0, 0, 720, 425);
        this.draw(ctx)

        this.start.x += this.game.xSpeed
        this.start.y += this.game.ySpeed;  
    }

    drawBox(ctx) {
        this.drawTable();
        if (this.game.mode === 'waiting') {

            for (let i = 0; i < this.game.boxes.length; i++) {
                let box = this.game.boxes[i];
                this.game.ctx.beginPath();
                this.game.ctx.rect(this.game.x, this.game.y, box.width, this.game.boxHeight);
                this.game.ctx.fillStyle = "#C9FFFF";
                this.game.ctx.fill();
            }

            this.game.x += this.game.xSpeed;

            if (this.game.x > this.game.canvas.width - 80) {
                this.game.xSpeed = -this.game.xSpeed;
            } else if (this.game.x < 0) {
                this.game.xSpeed = -this.game.xSpeed;
            }
        }

        if (this.game.mode === 'fall') {
            this.dropBox();
            this.game.current++;
        }

        this.game.canvas.addEventListener('click', (e) => {
            if (this.game.mode === 'waiting') {
                this.game.mode = 'fall';
            }
        }, false);
    }


    dropBox() {
        console.log(this.dropBox)
        this.game.xSpeed = 0;
        this.game.y += this.game.ySpeed;

        if (this.game.y > this.game.canvas.height - (this.game.boxHeight + this.game.tableHeight)) {
            this.game.y = this.game.canvas.height - (this.game.boxHeight + this.game.tableHeight);
        }

        if (this.game.y === 540) {
            this.game.mode = 'waiting';
        }

    }

    play() { 
        console.log('box.play')
        if (this.game.boxes[this.game.current].y === this.game.boxes[this.game.current - 1].y + this.game.boxHeight) {
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

            if (this.game.xSpeed > 0) {
                this.game.xSpeed += .2;
            } else {
                this.game.xSpeed -= .2;
            }

            this.game.score++;
            this.game.windowScroller = this.game.boxHeight;
            this.newBox();
        }
    }

}

export default Box;