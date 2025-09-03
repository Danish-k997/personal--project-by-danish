let qustionshow = document.getElementById('qustion')
let answerbtn = document.getElementsByClassName('btn')
let next = document.getElementById('next')
let answers = document.getElementsByClassName('answers')[0]

const qustions = [
    {
        qustion: "what is the capital of india",
        answer: [
            { text: "Mumbai", correct: false },
            { text: "Delhi", correct: true },
            { text: "Banglore", correct: false },
            { text: "jaipur", correct: false },
        ]
    },
    {
        qustion: "who is the prime minster of india",
        answer: [
            { text: "modi", correct: false },
            { text: "Danish", correct: true },
            { text: "yogi", correct: false },
            { text: "rahul-gandhi", correct: false },
        ]
    },
    {
        qustion: "Who is the world biggest tech bussness man",
        answer: [
            { text: "Elon musk", correct: false },
            { text: "Danish", correct: true },
            { text: "zurkbarg", correct: false },
            { text: "bill gates", correct: false },
        ]
    },
    {
        qustion: "who is the owner of microsoft",
        answer: [
            { text: "elon", correct: false },
            { text: "bill", correct: true },
            { text: "zuckr", correct: false },
            { text: "janson", correct: false },
        ]
    }
]

let currentQustionIndex = 0;
let score = 0;

function startqustion() {
    currentQustionIndex = 0;
    score = 0;
    showqustion();
}

function showqustion() {
    let currentQustion = qustions[currentQustionIndex];
    let qustionNo = currentQustionIndex + 1;
    qustionshow.innerHTML = qustionNo + "." + currentQustion.qustion;

    answers.innerHTML = '';
    currentQustion.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answers.appendChild(button)
        button.dataset.correct = answer.correct;
        button.addEventListener('click', selectedans)
    });
    next.style.display = "none"

}
startqustion()
function selectedans(e) {
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === "true"
    if (iscorrect) {
        selectedbtn.classList.add("correct");
        score++;
    }
    else {
        selectedbtn.classList.add("incorrect");
    }
    const allbutton = document.querySelectorAll('.btn')
    allbutton.forEach(btn => {
        if (btn.dataset.correct === "true") {
            btn.classList.add("correct");
        }
    });

    allbutton.forEach(btn => {
        btn.disabled = "true"
    })
    next.style.display = "block"
}

function showscore() {
    qustionshow.innerHTML = ""
    answers.innerHTML = ""
    qustionshow.innerHTML = `your score is ${score} by ${qustions.length}`
    next.innerHTML = "playagin"

}

function handalnext() {
    currentQustionIndex++
    if (currentQustionIndex < qustions.length) {
        showqustion();
    }
    else {
        showscore();
    }
}

next.addEventListener('click', () => {
    if (currentQustionIndex < qustions.length) {
        handalnext()
    }
    else {
        startqustion()
    }
})


