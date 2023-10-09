const cv = document.querySelector('canvas');
const width = cv.width
const height = cv.height
const radius = width * 0.42
const fontSize = 12
const ctx = cv.getContext("2d");
const rField = document.getElementById('r')

window.onload = fillCanvas
function fillCanvas() {
    let rVal = commaHandle(rField)
    ctx.strokeStyle = "#D0D0D0"
    ctx.fillStyle = "#66B2FF88"
    ctx.clearRect(0, 0, width, height)
    if (isValidR(rVal)) {
        ctx.fillRect(width / 2, height / 2, radius / 2, radius)
        ctx.beginPath()
        ctx.moveTo(width / 2 + radius, height/ 2)
        ctx.lineTo(width/ 2, height / 2 - radius)
        ctx.arc(width / 2, height / 2, radius, -Math.PI / 2, Math.PI, true)
        ctx.closePath()
        ctx.fill()
    }

    ctx.beginPath()
    ctx.moveTo(width / 2, height)
    ctx.lineTo(width / 2, 0)
    ctx.lineTo(width / 2 + 5, 10)
    ctx.moveTo(width / 2, 0)
    ctx.lineTo(width / 2 - 5, 10)

    ctx.moveTo(0, height / 2)
    ctx.lineTo(width, height / 2)
    ctx.lineTo(width - 10, height / 2 + 5)
    ctx.moveTo(width, height / 2)
    ctx.lineTo(width - 10, height / 2 - 5)

    ctx.moveTo(width / 2 + radius / 2, height / 2 + 5)
    ctx.lineTo(width / 2 + radius / 2, height / 2 - 5)

    ctx.moveTo(width / 2 + radius, height / 2 + 5)
    ctx.lineTo(width / 2 + radius, height / 2 - 5)

    ctx.moveTo(width / 2 - radius / 2, height / 2 + 5)
    ctx.lineTo(width / 2 - radius / 2, height / 2 - 5)

    ctx.moveTo(width / 2 - radius, height / 2 + 5)
    ctx.lineTo(width / 2 - radius, height / 2 - 5)

    ctx.moveTo(width / 2 + 5, height / 2  + radius / 2)
    ctx.lineTo(width / 2 - 5, height / 2  + radius / 2)

    ctx.moveTo(width / 2 + 5, height / 2 + radius)
    ctx.lineTo(width / 2 - 5, height / 2 + radius)

    ctx.moveTo(width / 2 + 5, height / 2  - radius / 2)
    ctx.lineTo(width / 2 - 5, height / 2  - radius / 2)

    ctx.moveTo(width / 2 + 5, height / 2 - radius)
    ctx.lineTo(width / 2 - 5, height / 2 - radius)

    ctx.font = `bold ${fontSize} px serif`
    ctx.fillStyle = "#D0D0D0"

    ctx.fillText("x", width - fontSize / 2, height / 2 + 15)

    ctx.fillText("y", width / 2 + 10, fontSize / 2)

    if (isValidR(rVal))  {
        ctx.fillText(rVal, width / 2 + 10, height / 2 - radius + fontSize / 2)
        ctx.fillText(rVal / 2, width / 2 + 10, height / 2 - radius / 2 + fontSize / 2)
        ctx.fillText(-rVal, width / 2 + 10, height / 2 + radius + fontSize / 2)
        ctx.fillText(-rVal / 2, width / 2 + 10, height / 2 + radius / 2 + fontSize / 2)

        ctx.fillText(-rVal, width / 2 - radius - fontSize / 2, height / 2 - 10)
        ctx.fillText(-rVal / 2, width / 2 - radius / 2 - fontSize / 2, height / 2 - 10)
        ctx.fillText(rVal, width / 2 + radius - fontSize / 2, height / 2 - 10)
        ctx.fillText(rVal / 2, width / 2 + radius / 2 - fontSize / 2, height / 2 - 10)

    }
    ctx.stroke()
}