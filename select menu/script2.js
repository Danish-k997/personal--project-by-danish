let arrowbtn = document.getElementById('arrow')
let selecttext = document.querySelector('#selecttext')
let menubar = document.querySelector('.menu')
let menubarlist = document.querySelectorAll('.menu li')

arrowbtn.addEventListener('click',function showmenu() {
    if (menubar.style.display === "none"|| menubar.style.display === "" ) {
        menubar.style.display = "block"
        arrowbtn.classList.add('rotate')
    }
    else{
        menubar.style.display = "none"
        arrowbtn.classList.remove('rotate')
    }
})

menubarlist.forEach(list =>{
    list.addEventListener('click',function () {
        selecttext.innerHTML = this.innerHTML
        
        menubar.style.display = "none"
        arrowbtn.classList.remove('rotate')
    })
})