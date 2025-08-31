let backbutton = document.getElementById("back");
let nextbutton = document.getElementById("next");
let images = document.querySelectorAll(".gallery span img");
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = (i >= index && i < index + 3) ? "block" : "none";
    });
 } 
showImage(currentIndex);    

backbutton.addEventListener("click", () => {
   
        currentIndex--;
        showImage(currentIndex);
         
 })

 nextbutton.addEventListener('click',()=>{
   
        currentIndex++;
        showImage(currentIndex)
       
    
 })