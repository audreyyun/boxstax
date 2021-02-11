class Box {
    constructor(game) {
        this.game = game
        this.drawBox = this.drawBox.bind(this);
        this.dropBox = this.dropBox.bind(this);
        this.drawTable = this.drawTable.bind(this);
        this.play = this.play.bind(this);
        this.newBox = this.newBox.bind(this);
        this.createBox = this.createBox.bind(this);
        this.collisionDetection = this.collisionDetection.bind(this)

        this.xSpeed = 2;
        this.ySpeed = 5;
        this.boxes = [];
        this.boxes[0] = {
            x: 0,
            y: 595,
            width: 80
        };
    }

    createBox(ctx) {
        for (let n = 0; n < this.boxes.length; n++) {
            let box = this.boxes[n];
            this.game.ctx.fillStyle = '#C9FFFF';
            this.game.ctx.fillRect(box.x, (600 - box.y + this.game.viewScreen), box.width, this.game.boxHeight);
        }
    }

    drawTable(ctx) {
        this.game.ctx.beginPath();
        this.game.ctx.rect(this.game.tableX, this.game.canvas.height - this.game.tableHeight, this.game.tableWidth, this.game.tableHeight);
        this.game.ctx.fillStyle = "#0095DD";
        this.game.ctx.fill();
        this.game.ctx.closePath;
    }

    newBox() {
        const width = this.boxes[this.game.current].width;
        this.boxes[this.game.current] = {
            x: 0,
            y: (this.game.current + 10) * this.game.boxHeight,
            width: this.boxes[this.game.current].width
        };
    }

    // move(ctx) {
    //     this.game.ctx.clearRect(0, 0, 720, 425);
    //     this.createBox(ctx)

    //     this.boxes[this.game.current].x += this.xSpeed;
    //     this.boxes[this.game.current].y += this.ySpeed;  
    // }

    drawBox(ctx) {
        this.drawTable();
        if (this.game.mode === 'waiting') {

            for (let i = 0; i < this.boxes.length; i++) {
                let box = this.boxes[i];
                this.game.ctx.beginPath();
                this.game.ctx.rect(this.boxes[this.game.current].x, this.boxes[this.game.current], box.width, this.game.boxHeight);
                this.game.ctx.fillStyle = "#C9FFFF";
                this.game.ctx.fill();
            }

        }

        if (this.game.mode === 'fall') {
            this.dropBox();
            this.game.current++;
        }

    }
    
    collisionDetection() {
        // if (this.xSpeed > 0 && (this.boxes[this.game.current].x + this.boxes[this.game.current].width > this.game.canvas.width)){
        //     this.xSpeed = -this.xSpeed;
        //     // this.boxes[this.game.current].x += this.xSpeed;
        //     // debugger
        // }
        // if (this.xSpeed < 0 && this.boxes[this.game.current].x > 0) {
        //     this.xSpeed = -this.xSpeed;
        //     // this.boxes[this.game.current].x += this.xSpeed;
        // }
        // this.boxes[this.game.current].x += this.xSpeed;

        if (this.boxes[this.game.current].x === this.boxes[this.game.current].width + this.game.canvas.width) { 
            this.xSpeed = -this.xSpeed;
            this.boxes[this.game.current].x += this.xSpeed;
        }
    }

    dropBox() {        
        // this.xSpeed = 0;
        // this.boxes[this.game.current].y += this.ySpeed;
        console.log(this.boxes[this.game.current].y)
        console.log(this.ySpeed)
        console.log(this.game.current)
        // if (this.boxes[this.game.current].y > this.game.canvas.height - this.game.tableHeight) {
        //     // debugger
        //     this.boxes[this.game.current].y = this.game.canvas.height - (this.game.boxHeight + this.game.tableHeight);
        //     this.boxes[this.game.current].y += this.ySpeed;  
        // }
        
        // if ((this.game.current !== 0) && (this.boxes[this.game.current].y === this.boxes[this.game.current - 1].y + this.game.boxHeight)) {
            this.boxes[this.game.current].y = this.game.canvas.height - (this.game.boxHeight + this.game.tableHeight);
            this.boxes[this.game.current].y -= this.ySpeed;  
            this.game.mode = 'waiting';
        // }

    }

    play() { 
        // this.boxes[this.game.current].y -= this.ySpeed;
        // this.collisionDetection();
        if ((this.game.current !== 0) && (this.boxes[this.game.current].y === this.boxes[this.game.current - 1].y + this.game.boxHeight)) {
            this.game.mode = 'waiting';
            let difference = this.boxes[this.game.current].x - this.boxes[this.game.current - 1].x;
            if (Math.abs(difference) >= this.boxes[this.game.current].width) {
                this.game.gameOver();
            }
            
            if (this.boxes[this.game.current].x > this.boxes[this.game.current - 1].x) {
                this.boxes[this.game.current].width = this.boxes[this.game.current].width - difference;
                
            }
        }
        
        if (this.xSpeed > 0) {
            this.xSpeed += .2;
        } else {
            this.xSpeed -= .2;
        }
        this.dropBox();
        this.game.score++;
        this.game.windowScroller = this.game.boxHeight;
        this.newBox(); 
    }

}

export default Box;