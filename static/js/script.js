const board = new Board()
const card = new Card()
const players = [new Player("#00f"), new Player("#f00")]
const initAsk = new Button("../img/button.png", "Button", "#f3d5bd", 40, 500, 400, 96)
const clock = new Button("../img/button.png", "Start Timing", "#f3d5bd", 5, 400, 300, 96)
const timer = new Timer()

const fps = 30
var ask = false

console.log(canvas.width, canvas.height) // 1366 x 768

for (var player = 0; player < players.length; player++) {
    players[player].name = `Player${player + 1}`
    players[player].numb = player + 1
}

players[0].keys = {
    "a": "a", 
    "b": "s", 
    "c": "d",
    "d": "f"
}

players[1].keys = {
    "a": "j", 
    "b": "k", 
    "c": "l",
    "d": "ç"
}

addEventListener("keydown", (event) => {
    console.log(event.key)
})


function gameHome() {
    if (initAsk.click()) {
        ask = true
    }

    board.update()

    for (var player = 0; player < players.length; player++) {
        players[player].update(board)
    }

    initAsk.update()
}

function asks() {

    if (clock.click()) {
        timer.timing = true
    }

    if (timer.timing){
        timer.startTiming(fps)
    }

    card.update()
    clock.update()
    timer.update()
}


function animate() {
    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height)

        if (!ask) {
            gameHome()
        } else {
            asks()
        }

    }, 1000 / fps)
}

animate()
