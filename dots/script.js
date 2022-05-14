let currentPlayer = "red"

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

function chooseDot(target, dotNum){
    let oldColor = target.style.backgroundColor
    let index = -1
    countShaded = 0
    for (var i = 0; i < elements.length; i++) {
        if(elements[i].backgroundColor!='white'){
            index = i
            countShaded += 1
        }
        }
    if (dotNum != index+6 && dotNum != index-6 && dotNum != index+1 &&dotNum != index-1 && countShaded == 0){
            elements[index].backgroundColor='white'
            elements[dotNum].backgroundColor='red'
    }
    else{
        elements[dotNum].backgroundColor='red'
        countShaded+=1
    }
    if(countShaded==2){
        if(currentPlayer == "blue"){
            currentPlayer = "red"
        }
        else{
            currentPlayer = "blue"
        }
    }
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (e) => {
        const target = e.target
        console.log(target)
    });
}


//for (var i = 0; i < elements.length; i++) {
//    elements[i].addEventListener('click', (e) => {
//        const target = e.target
//        let oldColor = target.style.backgroundColor
//        if (currentPlayer == "red"){
//            if (oldColor == 'red'){
//                target.style.backgroundColor =  'white'
//            }
//            else{
//                target.style.backgroundColor =  'red'
//            }
//        }
//    });
//}

