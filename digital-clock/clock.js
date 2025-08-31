let hrs = document.getElementById("hours");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");

setInterval(() => {
    hrs.innerHTML = (new Date().getHours()<10?"0":"") + new  Date().getHours();
    mins.innerHTML = (new Date().getMinutes()<10?"0":"") + new  Date().getMinutes();
    sec.innerHTML = (new Date().getSeconds()<10?"0":"") + new  Date().getSeconds();
}, 1000);
