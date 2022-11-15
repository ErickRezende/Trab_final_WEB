import {Board} from './board.js'
import {Card} from './card.js'

const board = new Board()
const card = new Card()

console.log(canvas.width, canvas.height) // 1366 x 768

function animate() {
    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height)
        
        //context.fillStyle= '#eec6a6'
        //context.fillRect(canvas.width / 2 - 350, canvas.height - 310, 700, canvas.height - 10)

        board.update()
        card.update()
    }, 1000 / 30)
}

animate()
