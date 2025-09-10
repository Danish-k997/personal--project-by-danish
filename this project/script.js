let btn = document.querySelector(".change-btn");
let container = document.querySelector(".card");

btn.addEventListener("click", function () {
  if (container.style.backgroundColor === "white") {
    container.style.backgroundColor = "red";
  } else {
    this.parentElement.style.backgroundColor = "white";
  }
});


// btn.addEventListener("click", function () {
//   this.style.backgroundColor = "red"
// });
