class Player {
    constructor(color) {
        this.name = ""
        this.numb = 0
        this.pos = 1

        this.keys = {
            
        }

        this.color = color
    }

    draw(board) {
        context.beginPath()
        context.arc(canvas.width / 17, (canvas.height / 8.5) + (this.numb - 1) *  canvas.width / 34 * 2.5, canvas.width / 34, 0, 2 * Math.PI)      
        context.fillStyle = this.color
        context.fill()

        context.font = `${parseInt(canvas.width / 34)}px Arial`
        context.textBaseline = 'middle'
        context.textAlign = 'start'
        context.fillText(this.name, canvas.width / 11, (canvas.height / 8.5) + (this.numb - 1) *  canvas.width / 34 * 2.5)

        context.arc(board.position.x + board.image.width / 3 * this.pos, board.position.y + 117, canvas.width / 34, 0, 2 * Math.PI)      
        context.fill()
        context.closePath()
    }

    update(board) {
        this.draw(board)
    }
}


/*class Player {
    constructor() {
        this.name = ""
        this.pos = 0

        this.piece = new Image()
        this.piece.src = "../img/pieces.png"

    }

    draw() {
        context.drawImage(
            this.piece,
            79, 0, // Cut init
            79, 79, // Cut size
            0, 0, // Position
            79, 79 // Image size
        )
    }

    update() {
        this.draw()
    }
}*/