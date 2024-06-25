let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newBtn = document.querySelector(".new-btn");
let winn = document.querySelector(".win");
let msg = document.querySelector(".msg-reference");

let turn0 = true;

const winning = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8], [3, 4, 5], [6, 7, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0)
        {
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
    
});

const checkWinner = () => {
for(let pattern of winning){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
        }
    }
}
};

const showWinner = (winner) => {
    winn.innerText = `Winner, Congratulation Winner is ${winner}`;
    msg.classList.remove("hide");
    disabledBoxes();
};

const disabledBoxes = () => {
    for(box of boxes)
    {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msg.classList.add("hide");
};

reset.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);

    