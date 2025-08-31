// let clock =   document.getElementById("clock")
// setInterval(function(){
//     let date = new Date()
    
//     clock.innerHTML = date.toLocaleTimeString();
// },1000);

let min = 20;
let sec = 0;

let timerD = document.getElementById("clock")

let timer = setInterval(() => {
    if (min ===0) {
      if (sec===0) {
        clearInterval(timer)
        timerD.innerHTML = "Time,s up!"
        timerD.style.color = "red";
        return;
      } else{
        min--;
        sec = 59;
       }
}else{
    sec--;
}
let minstr =String(min).padStart(2,'0')
let seostr = String(sec).padEnd(2,'0')
timerD.innerHTML = `${minstr}:${seostr}`;
}, 1000);

