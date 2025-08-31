let parent = document.querySelector('.container')
let button = document.querySelector('.btn')

function noteupdate() {
    localStorage.setItem("note",container.innerHTML)
}

button.addEventListener('click', () => {
    let note = document.createElement('p')
    let img = document.createElement('img')
    img.src = "deleat.webp"
    note.className = "note"
    note.innerText = "New Note"
    note.setAttribute('contenteditable', "true")

    parent.appendChild(note)
    note.appendChild(img)

    
    img.addEventListener('click', (event) => {
        event.stopPropagation(); 
        parent.removeChild(note)
        noteupdate()
    });
     
    let cleared = false;
    note.addEventListener('focus', () => {
        if (!cleared) {
            note.innerText = "";
            note.appendChild(img);
            cleared = true;
        }
    });
    note.addEventListener('input', () => {
        if (!cleared) {
            note.innerText = "";
            note.appendChild(img);
            cleared = true;
        }
    });
});


