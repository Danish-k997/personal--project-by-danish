let num = document.getElementById('shownum')
let incbtn = document.getElementById('inc')
let decbtn = document.getElementById('dec')
let resbtn = document.getElementById('res')

function countfun() {
     let val = num.textContent
     function updateUI() {
          num.textContent = val;
      }
      
      incbtn.addEventListener('click',function incerese() {
          val++
          updateUI()
           if (val >= 0) {
                decbtn.disabled = false;
                decbtn.classList.remove('dis')
            }
        })
        
        decbtn.addEventListener('click',function descrise() {
            val--
            updateUI()
            if (val <= 0) {
                decbtn.disabled = true;
                decbtn.classList.add('dis')
            }
        })
        
        resbtn.addEventListener('click',function incerese() {
            val = 0
            updateUI()
        })
}
countfun()