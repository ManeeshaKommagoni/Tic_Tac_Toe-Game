let boxes = document.querySelectorAll(".box");
let message = document.querySelector("#msg");
let msgContainer = document.querySelector(".msgContainer");
let reset =document.querySelectorAll(".reset_game_btn")[0];
let newGame =document.querySelectorAll(".new_game_btn")[0];
let count=0;
let winnerPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
var turnO = true;
const btnDisable = () =>
{
    boxes.forEach((box) =>
    {
    box.disabled= true;
    });
}
const btnEnable = () =>
    {
        boxes.forEach((box) =>
        {
        box.innerText = "";    
        box.disabled= false;
        });
    }
const resetting =() =>
{
    turnO = true;
    count = 0;
    btnEnable();
    msgContainer.classList.add("hide");
   

}
reset.addEventListener("click", resetting);
newGame.addEventListener("click", resetting);

const showWinner = (winner) =>
{
    if(winner === "draw")
    {
        message.innerText = `It's a Draw \n Both! Played Well`;
    }  
    else
    { 
    message.innerText = `Congratulations, ${winner} Won the match`;
    }
    msgContainer.classList.remove("hide");
}
boxes.forEach((box) =>
{
    box.addEventListener("click", () =>
    {
        count++;
        if(turnO === true ) //player O
        {
            box.innerText = "O";
            checkWinner();
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            checkWinner();
            turnO = true;
        }
        box.disabled =true;
    });
});


const checkWinner = () =>
{
    winnerPatterns.forEach((pattern) =>
    {
        let pos1 =boxes[pattern[0]].innerText;
        let pos2 =boxes[pattern[1]].innerText;
        let pos3 =boxes[pattern[2]].innerText;
        
        if(count === 9)
            showWinner("draw");
        else if(pos1 != "" && pos2 != "" && pos3 != "")
        {
             if( pos1 === pos2  && pos2 === pos3)
              {
                  showWinner(pos1);
              }
            
        }

    });
}