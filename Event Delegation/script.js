const gallery = document.getElementById('gallery');
const addCardBtn = document.getElementById('addCardBtn');

let cardCount = 1;

// Add new card
addCardBtn.addEventListener('click', function () {
  const card = document.createElement('div');
  card.classList.add('card')
  card.innerHTML = `
    <img src="https://picsum.photos/200?random=${cardCount}" alt="Image">
    <h4 class="title">Card ${cardCount}</h4>
    <div class="btn-group">
      <button class="btn edit-btn">Edit</button>
      <button class="btn delete-btn">Delete</button>
    </div>
  `;
  gallery.appendChild(card);
  cardCount++;
});

// 🧠 Event Delegation starts here
gallery.addEventListener('click', function (e) {
  // DELETE BUTTON
  if (e.target.classList.contains('delete-btn')) {
    e.target.closest('.card').remove();
  }

  // EDIT BUTTON
  if (e.target.classList.contains('edit-btn')) {
    const card = e.target.closest('.card');
    const title = card.querySelector('.title');
    let newTitle = prompt("Enter new title:", title.textContent);
    if (newTitle) {
      title.textContent = newTitle;
    }
  }
});
