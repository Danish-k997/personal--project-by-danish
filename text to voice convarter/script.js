let button = document.getElementById('btn')
let inputbox = document.getElementById('input')
let selectbox = document.querySelector('#select')
let rang = document.querySelector('#progress')
let speech = new SpeechSynthesisUtterance();


let voices = [];

let voiceselect = selectbox;

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    
    voices.forEach((voice,i)=>(voiceselect.options[i] = new Option(voice.name,i)));
};

voiceselect.addEventListener('change', ()=>{
    speech.voice = voices[voiceselect.value]
});

button.addEventListener('click',function () {
    speech.text = inputbox.value;
    window.speechSynthesis.speak(speech)

   

    // Estimate duration (not perfect)
    let estimatedTime = inputbox.value.length * 80; // 80ms per char approx
    let progressValue = 0;

    rang.value = 0;

    // Reset and start slider animation
    let interval = setInterval(() => {
        progressValue++;
        progress.value = progressValue;
        if (progressValue >= 100) {
            clearInterval(interval);
        }
    }, estimatedTime / 100); // divide total time into 100 steps

    

    // When speech ends, stop the slider
    speech.onend = () => {
        clearInterval(interval);
        progress.value = 100; // make sure it ends at full
    };
    
});