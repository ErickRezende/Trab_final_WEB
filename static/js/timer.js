class Timer {
    constructor() {
        this.maxTime = 30 * 1000
        this.time = this.maxTime
        this.cont = 0

        this.timing = false

        this.position = {
            x: 130, 
            y: 80
        }

        this.radius = 60
    }

    startTiming(fps) {
        this.cont++

        this.time -= 1000 / 30

        if (this.cont >= 30) {
            this.cont = 0
        }

        console.log(this.time)
        
        if (this.time <= 0){
            this.time = this.maxTime
            this.cont = 0
            this.timing = false
        }
    }

    draw() {
        context.beginPath()
        context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)      
        context.fillStyle = "#fff"
        context.fill()
        context.lineWidth = (this.radius - this.radius / 6) / 10
        context.strokeStyle = "#000"
        context.stroke()
        context.closePath()

        context.beginPath()
        context.moveTo(this.position.x, this.position.y)
        context.lineTo(this.position.x + (this.radius - this.radius / 6), this.position.y)
        context.arc(this.position.x, this.position.y, (this.radius - this.radius / 12), 0, ((2 / (30 * 1000)) * this.time * Math.PI))
        context.lineTo(this.position.x, this.position.y) 
        context.fillStyle = "#1e59d5"
        if (this.time < 5 * 1000){
            context.fillStyle = "#E85335"
        }
        context.fill()
        context.closePath()
    }

    update() {
        this.draw()
    }
}