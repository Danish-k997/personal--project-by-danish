const randomcolor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i <6; i++) {
        color+= hex[Math.floor(Math.random()*16)]; 
    }
    return color;

}
let inID;
document.querySelector("#start").addEventListener("click",function (e) { 
    inID = setInterval(() => {
        document.body.style.backgroundColor = `${randomcolor()}`
        
    }, 1000);
})
document.querySelector("#stop").addEventListener("click",function (e) {
    clearInterval(inID)
    
})