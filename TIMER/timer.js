let [seconds, minutes, hours ] = [0,0,0]; 
let displaytime = document.querySelector('#timer')
let start = document.getElementById('play')
let timer = null;
let pause = document.getElementById('stop');

function timerwork() {
    seconds++;
    if (seconds == 60) {
        seconds = 0
        minutes++;
        if (minutes == 60) {
            minutes = 0
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes :minutes ;
    let s = seconds < 10 ? "0" + seconds : seconds ;

    displaytime.innerHTML = `${h}:${m}:${s}`
    
} 
function watchstar() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(timerwork, 1000);
    start.style.display = "none";   
    pause.style.display = "inline"; 
}
start.addEventListener('click',watchstar)

pause.addEventListener('click', function () {
    clearInterval(timer);
    timer = null;
    pause.style.display = "none";   
    start.style.display = "inline"; 
});

let reset = document.getElementById('reset')
reset.addEventListener('click', function () {
    clearInterval(timer);
    timer = null;
    displaytime.innerHTML = "00:00:00";
    pause.style.display = "none";
    start.style.display = "inline";
});

