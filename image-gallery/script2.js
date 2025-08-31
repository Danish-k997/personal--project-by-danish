let scrollgallery = document.querySelector('.gallery')
let backbtn = document.getElementById('back')
let nextbtn = document.getElementById('next')

scrollgallery.addEventListener("wheel", (evt) => {
     scrollgallery.style.scrollBehavior = "smooth"
    evt.preventDefault()
    scrollgallery.scrollLeft += evt.deltaY;
})

backbtn.addEventListener("click", () => {
    scrollgallery.style.scrollBehavior = "smooth"
    scrollgallery.scrollLeft -= 900;
})

nextbtn.addEventListener("click", () => {
    scrollgallery.style.scrollBehavior = "smooth"
    scrollgallery.scrollLeft += 900;
})  