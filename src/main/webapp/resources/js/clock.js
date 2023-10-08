const hourHand = document.getElementById("hour-hand")
const minuteHand = document.getElementById("minute-hand")
const secondHand = document.getElementById("second-hand")

function setDate(curTime) {
    const seconds = curTime.getSeconds()
    const minutes = curTime.getMinutes()
    const hours = curTime.getHours() % 12

    const secondDegrees = 90 + 360 * (seconds / 60)
    secondHand.style.transform = `rotate(${secondDegrees}deg)`

    const minuteDegrees = 90 + 360 * (minutes / 60) + 6 * (seconds / 60)
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`

    const hourDegrees = 90 + 360 * (hours / 12) + 30 * (minutes / 60)
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}
