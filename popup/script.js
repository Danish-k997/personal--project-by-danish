let btn = document.querySelector('#submit')
let ok = document.querySelector('#ok')
let popup = document.querySelector('.popup')

btn.addEventListener("click",function popupshow() {
    popup.classList.add("showpopup");
})
ok.addEventListener("click",function closepopup() {
    popup.classList.remove("showpopup");
    
})