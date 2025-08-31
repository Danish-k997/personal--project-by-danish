let rightbox = document.querySelector('.right');
let leftbox = document.querySelector('.left');
let items = document.getElementsByClassName('item');
let = selected = null;

for (const item of items) {
      item.addEventListener('dragstart',function (e) {
        selected = e.target;
      })
    }
   
    leftbox.addEventListener('dragover',function (e) {
      e.preventDefault()  
    });

    leftbox.addEventListener('drop',function (e) {
        if (selected) {
            leftbox.appendChild(selected)
            selected = null;
        }
    })
    rightbox.addEventListener('dragover',function (e) {
      e.preventDefault()  
    });

    rightbox.addEventListener('drop',function (e) {
        if (selected) {
            rightbox.appendChild(selected)
            selected = null;
        }
    })
