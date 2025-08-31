function startCountdown(durationInSeconds) {
  let timer = durationInSeconds;

  setInterval(() => {
    let days = Math.floor(timer / (60 * 60 * 24));
    let hours = Math.floor((timer % (60 * 60 * 24)) / 3600);
    let minutes = Math.floor((timer % 3600) / 60);
    let seconds = Math.floor(timer % 60);

    
    days = days.toString().padStart(2, '0');
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('Minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

   
    timer--;

    
    if (timer < 0) {
      timer = durationInSeconds;
    }
  }, 1000);
}


startCountdown(345600);
