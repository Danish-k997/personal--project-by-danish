let start = document.getElementById('play')
let pause = document.getElementById('stop')
let reset = document.getElementById('reset')
let [hours, minutes, seconds] = [0, 0, 0]
let displaytime = document.getElementById('timer')
let timer = null;

function workflow() {
    seconds++
    if (seconds == 60) {
        seconds = 0
        minutes++

        if (minutes == 60) {
            minutes = 0
            hours++
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displaytime.innerHTML = `${h}:${m}:${s}`;
}
function whatchstart() {
    if (timer !== null) {
        clearInterval(timer)
    }
    timer = setInterval(workflow, 1000)
    pause.style.display = "inline"
    start.style.display = "none"
}

start.addEventListener('click', whatchstart)

pause.addEventListener('click', function () {
    clearInterval(timer)
    timer = null
    pause.style.display = "none"
    start.style.display = "inline"
})

reset.addEventListener('click',function () {
    clearInterval(timer)
    timer = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    displaytime.innerHTML = "00:00:00"
    pause.style.display = "none"
    start.style.display = "inline"
})





