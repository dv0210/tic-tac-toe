let boxes = document.querySelectorAll(".boxes");
let resetBtn = document.querySelector("#reset-btn");
let newgamebutton = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".winnershow");
let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
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
    console.log("bhe");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
}

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Player ${winner} wins!`;
  msgcontainer.classList.remove("hide");
  disabledBoxes();
};

const checkwinner = () => {
  for (let pattern of winPattern) {
    let = pos1value = boxes[pattern[0]].innerText;
    let = pos2value = boxes[pattern[1]].innerText;
    let = pos3value = boxes[pattern[2]].innerText;
    if (pos1value != "" && pos2value != "" && pos3value != "") {
      if (pos1value === pos2value && pos2value === pos3value) {
        console.log("winner", pos1value);
        showWinner(pos1value);
      }
    }
  }
};

newgamebutton.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);