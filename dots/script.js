let currentPlayer = "red"
let lastShaded = -10
let countShaded = 0
let lines = []
let move = []

function initBoard() {
    let board = document.getElementById("game-board");

    for (let i = 0; i < 6; i++) {
        let row = document.createElement("div")
        row.className = "number-row"
        
        for (let j = 0; j < 6; j++) {
            let dot = document.createElement("div")
            dot.className = "dot"
            row.appendChild(dot)
        }

        board.appendChild(row)
    }
}

initBoard();

var elements = document.getElementsByClassName("dot");
       
function chooseDot(target){
   let dotNum=-1
   for (var i = 0; i < elements.length; i++) {
       if(target == elements[i]){
           dotNum=i
           }
       }
       if (elements[dotNum].style.backgroundColor=='black'){
           elements[dotNum].style.backgroundColor='white'
           move.pop()
           countShaded=0
           lastShaded = -10
       }
       else if (countShaded==0 || dotNum == lastShaded+6 || dotNum == lastShaded-6 || dotNum == lastShaded+1 || dotNum == lastShaded-1){
           elements[dotNum].style.backgroundColor='black'
           lastShaded = dotNum
           countShaded+=1
           move.push(dotNum)
       }
       else {
           if(lastShaded!=-10){
               elements[lastShaded].style.backgroundColor='white'
               move.pop()
               }
               elements[dotNum].style.backgroundColor='black'
               lastShaded=dotNum
               move.push(dotNum)
           }
   if(countShaded==2){
       elements[move[0]].style.backgroundColor='white'
       elements[move[1]].style.backgroundColor='white'
       lines.push(move)
       move = []
       countShaded = 0
       lastShaded=-10
       console.log(move)
       console.log(line)
   }
}
       


for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (e) => {
        const target = e.target
        chooseDot(target)
    });
}


