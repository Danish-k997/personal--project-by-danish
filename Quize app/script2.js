let showqustion = document.getElementById('qustion')
let showanswer = document.getElementsByClassName('answers')[0]
let next = document.getElementById('next')

let qustions = [
    {
        qustion: "what is the capital of india",
        answers: [
            { Text: "bangal", correct: "false" },
            { Text: "Delhi", correct: "true" },
            { Text: "mumbai", correct: "false" },
            { Text: "kota", correct: "false" },

        ]
    },
    {
        qustion: "what is the ceo of microsoft",
        answers: [
            { Text: "bill", correct: "false" },
            { Text: "Danish", correct: "true" },
            { Text: "elon", correct: "false" },
            { Text: "mark", correct: "false" },

        ]
    },
    {
        qustion: "what is the owner of meta",
        answers: [
            { Text: "mark", correct: "false" },
            { Text: "Danish", correct: "true" },
            { Text: "bill", correct: "false" },
            { Text: "elon", correct: "false" },

        ]
    },
    {
        qustion: "what is the ceo of spackeX",
        answers: [
            { Text: "elon", correct: "false" },
            { Text: "Danish", correct: "true" },
            { Text: "mark", correct: "false" },
            { Text: "kunal shah", correct: "false" },

        ]
    }

]

let currentQustionIndex = 0;
let score = 0;
function startQuize() {
    currentQustionIndex = 0;
    score = 0;
    showQuize()
}

function showQuize() {
    let currentQustion = qustions[currentQustionIndex];
    let qustionNo = currentQustionIndex + 1;
    showqustion.innerHTML = qustionNo + "." + currentQustion.qustion;

    showanswer.innerHTML = ""
    currentQustion.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerHTML = answer.Text
        button.classList.add('btn')
        showanswer.appendChild(button)
        button.dataset.correct = answer.correct
        button.addEventListener('click', selectanswer)
        next.style.display = "none"

    })

}
showQuize()

function selectanswer(e) {
    let selectbtn = e.target;
    let iscorrect = selectbtn.dataset.correct === "true"
    if (iscorrect) {
        selectbtn.classList.add("correct")
        score++
    }
    else {
        selectbtn.classList.add("incorrect")
    }

    let allbtn = document.querySelectorAll('.btn')

    allbtn.forEach(btns => {
        if (btns.dataset.correct === "true") {
            btns.classList.add('correct')
        }
    });

    allbtn.forEach(btn =>{
       btn.disabled = "true"
    })
    next.style.display = "block"
}
function showscore(){
    showqustion.innerHTML = ""
    showanswer.innerHTML = ""
    showqustion.innerHTML = `your score is ${score} by ${qustions.length}`
}

function nextquize() {
    currentQustionIndex++
    if (currentQustionIndex < qustions.length ) {
        showQuize()
    }
    else{
        showscore()  
        next.innerHTML = "playagin"
    }
}
next.addEventListener('click',function () {
    if (currentQustionIndex < qustions.length) {
        nextquize()
    }
    else{
        startQuize()
    }
    
})