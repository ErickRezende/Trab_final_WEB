class Button {
    constructor(src, text, text_color, posX, posY, sizeX, sizeY) {
        this.image = new Image()
        this.image.src = src

        this.text = text
        this.text_color = text_color

        this.position = {
            x: posX,
            y: posY
        }

        this.size = {
            x: sizeX,
            y: sizeY
        }

        this.touch = false
    }

    draw() {
        context.drawImage(this.image, this.position.x, this.position.y, this.size.x, this.size.y)

        context.font = `${parseInt(this.size.y / 3)}px cursive`
        context.textBaseline = 'middle'
        context.textAlign = 'center'
        context.fillStyle = this.text_color
        context.fillText(this.text, this.position.x + this.size.x / 2, this.position.y + this.size.y / 2)
    }

    click() {
        addEventListener("mousedown", (event) => {
            if (event.buttons == 1) {
                if (event.pageX > this.position.x && event.pageX < this.position.x + this.size.x) {
                    if (event.pageY > this.position.y && event.pageY < this.position.y + this.size.y) {
                        this.touch = true
                    }
                }
            }
        }, false)

        return this.touch
    }

    update() {
        this.touch = false
        this.draw()
    }
}

/*        context.lineWidth = 2
        context.strokeStyle = "#000000"
        context.stroke(path)*/