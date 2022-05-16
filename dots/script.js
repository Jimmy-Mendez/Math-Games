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

function chooseDot(target){
    let oldColor = target.style.backgroundColor
    let index = -10
    let countShaded = 0
    let dotNum=-1
    for (var i = 0; i < elements.length; i++) {
        if(elements[i].style.backgroundColor!='white'){
            index = i
            countShaded += 1
            }
        if(target == elements[i]){
            dotNum=i
            }
        }
    if (elements[dotNum].style.backgroundColor!='red'){
        elements[dotNum].style.backgroundColor='white'
    }
    else if (dotNum != index+6 && dotNum != index-6 && dotNum != index+1 &&dotNum != index-1 && countShaded == 1){
            elements[index].style.backgroundColor='white'
            elements[dotNum].style.backgroundColor='red'
        console.log('case1')
    }
    else{
        elements[dotNum].style.backgroundColor='red'
        countShaded+=1
        console.log('case2')
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
        chooseDot(target)
    });
}


