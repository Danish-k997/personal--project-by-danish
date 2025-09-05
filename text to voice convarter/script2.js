let button = document.getElementById('btn')
let inputbox = document.getElementById('input')
let selectbox = document.querySelector('#select')
let rang = document.querySelector('#progress')
let speech = new SpeechSynthesisUtterance();

button.addEventListener('click', function play() {
    speech.text = inputbox.value
    window.speechSynthesis.speak(speech)

    let stime = inputbox.value.length*80
    let progressValue = 0;
    rang.value = 0
    
   let interval = setInterval(() => {
        progressValue++
        rang.value = progressValue;
        if (progressValue >= 100) {
            clearInterval(interval)
        }

    }, stime/100);

});

let voices = []
let selectvoice = selectbox;

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices()
    speech.voice= voices[0]

    voices.forEach((voice,i)=>(selectvoice.options[i] = new Option(voice.name,i)));
};

selectvoice.addEventListener('change',function () {
    speech.voice = voices[selectvoice.value]
});