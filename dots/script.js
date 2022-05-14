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

function chooseDot(dotNum){
    return dotNum
}

var elements = document.getElementsByClassName("dot");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (e) => {
        const target = e.target
        let oldColor = target.style.backgroundColor
        if (currentPlayer == "red"){
            if (oldColor == 'red'){
                target.style.backgroundColor =  'white'
            }
            else{
                target.style.backgroundColor =  'red'
            }
        }
    });
}

//document.getElementsByClassName("dot").addEventListener("click", (e) => {
//    const target = e.target
//    console.log("hi")
//    target.classList.add("colored-red-dot")
//})

