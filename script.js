const cellElements = document.querySelectorAll(".game-board .cell");
const player1=document.querySelectorAll(".players .player1")
const player2=document.querySelectorAll(".players .player2")
// console.log({player1, player2})
const playerO = "O"
const playerx = "X"
let toggleTurn = true
cellElements.forEach(cell => {
    cell.onclick = () => {
        let currentplayer = toggleTurn ? playerO : playerx
        cell.classList.add("disabled")
        console.log(cell)
        addIncell(cell, currentplayer);
        swapplayer();
        checkWinCondition();
    }
})
function swapplayer() {
    toggleTurn = !toggleTurn      
    if(toggleTurn){
        player1[0].classList.add("active")
        player2[0].classList.remove("active")
        console.log(player2)
        console.log(player1)
    }else{
        player2[0].classList.add("active")
        player1[0].classList.remove("active")
    }
}
function addIncell(cell, currentplayer) {
    cell.innerHTML = currentplayer
    cell.classList.add(currentplayer)
}
const winning_condition=[
    [0,1,2],
    [3,4,5],
    [6,7,8]
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

function checkWinCondition() {
    console.log({cellElements});
    for(const i of winning_condition) {
        if (!cellElements[i[0]].innerHTML || !cellElements[i[1]].innerHTML || !cellElements[i[2]].innerHTML) {
            continue;
        }
        console.log(cellElements[i[0]].innerHTML, cellElements[i[1]].innerHTML, cellElements[i[2]].innerHTML)
        if (cellElements[i[0]].innerHTML == cellElements[i[1]].innerHTML && cellElements[i[1]].innerHTML == cellElements[i[2]].innerHTML) {
            console.log("Someone win");
            
        }
    }
}