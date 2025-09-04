let button = document.getElementsByTagName('button')[0]
let container = document.querySelector(".container")

button.addEventListener('click', function () {
    container.classList.toggle('dark')
})