function updAllTime() {
    let dates = document.getElementsByClassName("td-3")
    for (let elem of dates) {
        updElemTime(elem)
    }
}
function updElemTime(elem) {
    let curDate = new Date(parseInt(elem.innerHTML));
    elem.innerHTML = curDate.toLocaleString();
}