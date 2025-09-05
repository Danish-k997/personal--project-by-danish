let successfullbtn = document.getElementById('valid')
let errorbtn = document.getElementById('errors')
let waitbtn = document.getElementById('wait')
let smassage = document.querySelector('.success')
let emassage = document.querySelector('.error')
let wmassage = document.querySelector('.wait')
let massage = document.querySelector('.massage')

successfullbtn.addEventListener('click', function () {
    let div = document.createElement('div')
    div.classList.add("success")
    div.innerHTML = "successfull!😎"
    massage.appendChild(div)
});
errorbtn.addEventListener('click', function () {
  let div = document.createElement('div')
    div.classList.add("error")
    div.innerHTML = "error!😪"
    massage.appendChild(div)
});
waitbtn.addEventListener('click', function () {
    let div = document.createElement('div')
    div.classList.add("wait")
    div.innerHTML = "please wait🤗"
    massage.appendChild(div)
});