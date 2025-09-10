const gallery = document.getElementById("gallery");
const addCardBtn = document.getElementById("addCardBtn");

let cardCount = 1;

addCardBtn.addEventListener("click", function () {
  let div = document.createElement("div");
  div.classList.add('card')
  div.innerHTML =`
    <img src="https://picsum.photos/200?random=${cardCount}" alt="Image">
    <h4 class="title">Card ${cardCount}</h4>
    <div class="btn-group">
      <button class="btn edit-btn">Edit</button>
      <button class="btn delete-btn">Delete</button>
    </div>`;
    gallery.appendChild(div)
    cardCount++
});

gallery.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.closest('.card').remove();
    }
});
gallery.addEventListener('click', function (e) {
    if (e.target.classList.contains('edit-btn')) {
     const card = e.target.closest('.card')
     const title = card.querySelector('.title');
     let newTitle = prompt('Enter a new title:',title.textContent )
     if (newTitle) {
        title.textContent = newTitle
     }
    }
});


