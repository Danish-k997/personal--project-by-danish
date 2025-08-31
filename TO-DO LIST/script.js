let addbtn = document.querySelector('.addbtn')
let container = document.querySelector('.container')
let input = document.querySelector('#input')
let addli = document.querySelector('.addli')

addbtn.addEventListener('click', () => {
    if (input.value === "") {
        alert("Please enter a task")
        return
    }
    else {
        let li = document.createElement('li')
        li.innerHTML = input.value
        let remove = document.createElement('span')
        remove.innerHTML = "X"
            container.appendChild(li)
        addli.appendChild(li)
        li.appendChild(remove)
        remove.classList.add('remove')
        remove.addEventListener('click', () => {
            li.remove()
           
        })  
        
        li.addEventListener('click', () => {
            li.style.textDecoration = "line-through"
             
        })
        
    }
    
    input.value = ""
})
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addbtn.click()
    }}  )

    function savedata() {
        localStorage.setItem("data", addli.innerHTML)
    }
    function showdata() {
        addli.innerHTML = localStorage.getItem("data")
    }   

    