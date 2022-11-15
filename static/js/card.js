import {question1} from "./questions.js"

export class Card {
    constructor() {
        this.position = {
            x: canvas.width / 2 - 350,
            y: canvas.height - 310
        }

        this.size = {
            x: 700, 
            y: 310
        }

        this.color = "#eec6a6"
        this.font_color = "#2f2f2f"
    }

    draw() {
        context.fillStyle = this.color
        context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y)

        context.font = "30px bold Arial"
        context.fillStyle = this.font_color
        context.baseLine = 'center'

        context.fillText(question1[0], this.position.x, this.position.y + 30)
    }

    update() {
        this.draw()
    }
}