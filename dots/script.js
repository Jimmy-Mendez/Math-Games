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
    
function adjustLine(from, to, line){

    var fT = from.offsetTop  + from.offsetHeight/2;
    var tT = to.offsetTop    + to.offsetHeight/2;
    var fL = from.offsetLeft + from.offsetWidth/2;
    var tL = to.offsetLeft   + to.offsetWidth/2;
    
    var CA   = Math.abs(tT - fT);
    var CO   = Math.abs(tL - fL);
    var H    = Math.sqrt(CA*CA + CO*CO);
    var ANG  = 180 / Math.PI * Math.acos( CA/H );
  
    if(tT > fT){
        var top  = (tT-fT)/2 + fT;
    }else{
        var top  = (fT-tT)/2 + tT;
    }
    if(tL > fL){
        var left = (tL-fL)/2 + fL;
    }else{
        var left = (fL-tL)/2 + tL;
    }
  
    if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
      ANG *= -1;
    }
    top-= H/2;
  
    line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-transform"] = 'rotate('+ ANG +'deg)';
    line.style.top    = top+'px';
    line.style.left   = left+'px';
    line.style.height = H + 'px';
  }
  

function chooseDot(target){
   let lines_div = document.getElementById("lines");
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
       if(lines.contains(move)){
            toastr.error("Already an existing line!")
            return
       }
        let line = document.createElement("div")
        if(currentPlayer=="blue")
        {
            currentPlayer="red"
            line.className = "blue-line"
        }
        else{
            currentPlayer="blue"
            line.className = "red-line"
        }
        lines_div.appendChild(line)
        adjustLine(
            elements[move[0]], 
            elements[move[1]],
            line
      );
       elements[move[0]].style.backgroundColor='white'
       elements[move[1]].style.backgroundColor='white'
       lines.push(move)
       move = []
       countShaded = 0
       lastShaded=-10
       console.log(move)
       console.log(lines)
   }
}


for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (e) => {
        const target = e.target
        chooseDot(target)
    });
}


