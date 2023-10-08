const timeP = document.getElementById("time")
const dateP = document.getElementById("date")

function updateTime() {
    const curDate = new Date()
    dateP.innerHTML = curDate.toLocaleDateString()
    timeP.innerHTML = curDate.toLocaleTimeString()
    setDate(curDate)
}

setInterval(updateTime, 1000)