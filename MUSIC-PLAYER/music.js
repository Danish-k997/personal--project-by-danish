let song = document.getElementById('audio')
let play = document.getElementById('play')
let rand = document.getElementById('rang')
let volume = document.getElementById('volume')


function playsong() {
  play.addEventListener('click',function () {
      
      if (song.paused) {
          song.play()
          play.src = "pause-button.png"
      }
      else{
          song.pause()
          play.src = "play-button.png"
      }
  })
}
playsong()

setInterval(() => {
rang.value = song.currentTime;
}, 500);

rang.onchange = function () {
    song.play()
    song.currentTime = rang.value
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


 // 1. Song list
const songs = [
  {
    title: "Mere Wala Sardar",
    artist: "arjit",
    image: "arjit sing.jpg",
    audio: "arjit.mp3/song1.m4a"
  }
];

// 2. Current song index
let currentIndex = 0;

// 3. Access DOM elements
const songImage = document.getElementById("song-image");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const nextBtn = document.getElementById("next-btn");

// 4. Update function
function loadSong(index) {
  const song = songs[index];
  songImage.src = song.image;
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
  audio.src = song.audio;
}

// 5. Next button click
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  audio.play(); // optional: auto play on next
});

// 6. Load first song initially
loadSong(currentIndex);
