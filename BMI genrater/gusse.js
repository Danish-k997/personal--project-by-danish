let number =  document.querySelector("#num")
let submit =  document.querySelector("#sub")
let attempt = document.getElementsByTagName("h4")
let form = document.getElementsByTagName("form")
console.log(form.item(0))
form.item(0).addEventListener("submit", function (e) {
    e.preventDefault()
    let num = parseInt(number.value)
    let random = Math.floor(Math.random() * 10) + 1
    console.log(random)
    if (num === random) {
        attempt.item(0).innerHTML = "You guessed it right! The number was " + random;
        submit.disabled= true;
    } else if (num < random) {
        attempt.item(0).innerHTML = "Too low! Try again.";
    } else if (num > random) {
        attempt.item(0).innerHTML = "Too high! Try again.";
    }
    else {
        attempt.item(0).innerHTML = "Please enter a valid number.";
    }
    let reseat = document.querySelector('.guesses').addEventListener('click',function (e) {
        submit.disabled =false
    })
}   
)