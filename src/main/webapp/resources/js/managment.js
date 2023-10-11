window.onload = function () {
    fillCanvas()
    buttonSwitch(true)
}

function manageRequest(data){
    if (data.status === "success") {
        drawLastRow()
        updAllTime()
    }
}

function showNotification() {
    let notificationField = document.getElementById("exception")
    notificationField.style.opacity = "1"
}

function hideNotification() {
    let notificationField = document.getElementById("exception")
    notificationField.style.opacity = "0"
}