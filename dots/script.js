let currentPlayer = "red"
let lastShaded = -10
let countShaded = 0
let permanent = []
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

//function chooseDot(target){
//    let dotNum=-1
//    for (var i = 0; i < elements.length; i++) {
//        if(target == elements[i]){
//            dotNum=i
//            }
//        }
//    if(!permanent.includes(dotNum){
//        if (elements[dotNum].style.backgroundColor==currentPlayer){
//            elements[dotNum].style.backgroundColor='white'
//            move.pop()
//            countShaded-=1
//            lastShaded = -10
//        }
//        else if (countShaded==0 || dotNum == lastShaded+6 || dotNum == lastShaded-6 || dotNum == lastShaded+1 || dotNum == lastShaded-1){
//            elements[dotNum].style.backgroundColor=currentPlayer
//            lastShaded = dotNum
//            countShaded+=1
//            move.push(dotNum)
//        }
//        else {
//            if(lastShaded!=-10){
//                elements[lastShaded].style.backgroundColor='white'
//                }
//                elements[dotNum].style.backgroundColor=currentPlayer
//                lastShaded=dotNum
//                move.pop()
//                move.push(dotNum)
//            }
//    }
//    if(countShaded==2){
//        permanent.concat(move)
//        if(currentPlayer == "blue"){
//            currentPlayer = "red"
//        }
//        else{
//            currentPlayer = "blue"
//        }
//        countShaded=0
//        lastShaded = -10
//    }
//}
       
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
           countShaded-=1
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
       countShaded = 0
       console.log('draw the line')
   }
}
       


for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (e) => {
        const target = e.target
        chooseDot(target)
    });
}


