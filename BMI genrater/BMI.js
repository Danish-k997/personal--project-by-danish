let form = document.querySelector('form')

form.addEventListener("submit",function (e) {
   e.preventDefault()
   let height = parseInt(document.querySelector("#height").value)
   let weight = parseInt(document.querySelector("#weight").value)
   let resualt = document.querySelector("#resualt")
   let adw = document.querySelector("#ad")
   let bmi =  (weight/((height/100)**2))

   if (height ===""|| height < 0 || isNaN(height)) {
   resualt.innerHTML = "please enter a vaild height"
}
else if (weight ===""|| weight < 0 || isNaN(weight)) {
   resualt.innerHTML = "please enter a vaild weight"
}

else{
   resualt.innerHTML= bmi.toFixed(2)
}
if (bmi<20.00) {
   adw.innerHTML="very bad"
}
else if (bmi>=20.00) {
   adw.innerHTML="very good"
   
}
else{
   
   adw.innerHTML=" good 😀"
}
   
})

