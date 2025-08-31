let rang = document.getElementById('rang')
let song = document.getElementById('audio')
let play = document.getElementById('play')

function playsong() {
        // rang.max = song.duration;
        // rang.value = song.currentTime;
    }
// playsong()

function playpause() {
    play.addEventListener('click', function() {
        if (song.paused) {
            song.play()
            play.src = "pause-button.png"
        } else {
            song.pause()
            play.src = "play-button.png"
        }
    })
}
playpause()

setInterval(() => {
    rang.value = song.currentTime;
},500)

rang.onchange = function () {
    song.play()
    song.currentTime = rang.value;
    if (song.play()) {
         play.src = "pause-button.png"
        }
        else{
            
            play.src = "play-button.png"
    }
}
audio.volume = 0.5
 volume.addEventListener('input',()=>{
    audio.volume = volume.value/100
 })


