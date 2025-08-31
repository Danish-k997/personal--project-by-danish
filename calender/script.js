let date = document.querySelector('#date')
let day = document.querySelector('#day')
let month = document.querySelector('#month')
let year = document.querySelector('#year')

let dates = new Date()
const dayname = dates.toLocaleString('en-US',{weekday:'long'})
const monthname = dates.toLocaleString("en-US",{month:'long'})

date.innerHTML = dates.getDate()
day.innerHTML = dayname
month.innerHTML = monthname
year.innerHTML = dates.getFullYear()