class Board {
    constructor() {
        this.image = new Image()
        this.image.src = "../img/board.png"

        this.image.width = canvas.width / 1.5
        this.image.height = this.image.width / 2.2

        this.position = {
            x: parseInt(canvas.width - this.image.width - canvas.width / 20),
            y: parseInt(canvas.height / 2 - this.image.height / 2)
        }  
    }

    draw() {
        context.drawImage(this.image, this.position.x, this.position.y, this.image.width, this.image.height)
    }

    update(){
        this.draw()
    }
}