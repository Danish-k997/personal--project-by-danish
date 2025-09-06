
let add = document.getElementById('btn')
let input = document.getElementById('input')
let listes = document.querySelector('.list')
let totalbtn = document.getElementById('counte')
let total = document.getElementById('countenum')

let items = []

add.addEventListener('click', function (e) {
    if (input.value === "") {
        alert("please enter item")
        listes.appendChild("")
    }
    e.preventDefault()
    let div = document.createElement("div")
    let croos = document.createElement('span')
    croos.innerHTML = "×"
    croos.classList.add("crose")
    div.textContent = input.value
    div.classList.add('value')
    div.appendChild(croos)
    listes.appendChild(div)
    input.value = ""
    croos.addEventListener("click",function () {
        div.remove()
    })
    items.push(input.value)

  items = items.filter((items => items!== div.textContent.replace("×","").trim()));

    totalbtn.addEventListener('click',function () {
    let totalcount = items.reduce((acc,crr)=>acc + 1,0 )  
     total.textContent = `Total value is ${totalcount}` 
    })
    total.textContent = ""
    
});





