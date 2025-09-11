let boxes = document.querySelectorAll(".box");
let winner = document.querySelector(".show-win");
let winnerbox = document.querySelector(".winner");
let palyagainbtn = document.querySelector(".play-again");
let resetbtn = document.querySelector("#reset");

let turno = true;

let winpatten = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno === true) {
      box.textContent = "o";
      box.style.color = "black";
      turno = false;
    } else {
      box.textContent = "x";
      turno = true;
      box.style.color = "red";
    }
    box.disabled = true;
    checkwinner();
  });
});

function disabledbtn() {
  for (const box of boxes) {
    box.disabled = true;
    box.textContent = "";
  }
}
function enabledbtn() {
  for (const box of boxes) {
    box.disabled = false;
    box.textContent = "";
  }
}
function reset() {
  turno = true;
  enabledbtn();
  winnerbox.classList.add("hide");
}

const checkwinner = () => {
  for (const partten of winpatten) {
    let pos1val = boxes[partten[0]].innerText;
    let pos1va2 = boxes[partten[1]].innerText;
    let pos1va3 = boxes[partten[2]].innerText;

    function showwinner() {
      winner.innerHTML = ` winner is ${pos1val}`;
      winnerbox.classList.remove("hide");
      disabledbtn();
    }

    if (pos1val != "" && pos1va2 != "" && pos1va3 != "") {
      if (pos1val === pos1va2 && pos1va2 === pos1va3) showwinner(pos1val);
    }
  }
};

palyagainbtn.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);
