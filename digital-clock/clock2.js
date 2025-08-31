let hours = document.getElementById('hours')
let minutes = document.getElementById('mins')
let seconds = document.getElementById('sec')

setInterval(() => {
    let date = new Date()
    hours.innerHTML = (date.getHours() < 10 ? "0" : "") + date.getHours()
    minutes.innerHTML = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes()
    seconds.innerHTML = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds()
}, 1000);
