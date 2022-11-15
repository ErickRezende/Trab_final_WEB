export class Board {
    constructor() {
        this.src = "../img/board.png"

        this.position = {
            x: canvas.width / 2 - 450,
            y: 10
        }

        this.image = new Image()
        this.image.src = this.src
    }

    draw() {
        context.drawImage(this.image, this.position.x, this.position.y)
    }

    update(){
        this.draw()
    }
}