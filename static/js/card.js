function sortSeq() {
    var seq = [0], randNumb = 0

    for (var cont = 0; cont < 4; cont++) {
        randNumb = parseInt(Math.random() * 5)

        while (seq.includes(randNumb)) {
            randNumb = parseInt(Math.random() * 5)
        }

        seq.push(randNumb)
    }

    return seq
}

class Card {
    constructor() {
        this.size = {
            x: canvas.width * 0.6,
            y: canvas.height * 0.8
        }

        this.position = {
            x: canvas.width - canvas.width * 0.7,
            y: canvas.height / 2 - this.size.y / 2
        }

        console.log("x: ", this.size.x)

        this.color = "#eec6a6"
        this.font_color = "#2f2f2f"

        this.seq = sortSeq()

        this.text = ""
    }

    draw() {
        context.fillStyle = this.color
        context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y)

        context.font = `${this.size.x / 30}px bold Arial`
        context.fillStyle = this.font_color
        context.textBaseline = 'center'
        context.textAlign = 'start'

        for (var i = 0; i < 5; i++) {
            if (i > 0){
                this.text = String.fromCharCode(64 + i, 41, 32) + question1[this.seq[i]]
            } else {
                this.text = question1[this.seq[i]]
            }
            
            context.fillText(this.text, this.position.x + 20, this.position.y + i * (this.size.y / 5) + 30)
        }
    }

    update() {
        //this.seq = sort()
        //console.log(this.seq)

        this.draw()
    }
}