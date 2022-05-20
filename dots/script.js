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
  

function checkBox(coords){
    let numBoxes = 0
    //Box 1
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 2
    if(coords.includes([1,2])&&coords.includes([1,7])&&coords.includes([2,8])&&coords.includes([7,8])){
        numBoxes+=1
    }
    //Box 3
    if(coords.includes([2,3])&&coords.includes([2,8])&&coords.includes([3,9])&&coords.includes([8,9])){
        numBoxes+=1
    }
    //Box 4
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 5
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 6
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 7
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 8
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 9
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 10
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 11
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 12
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 13
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 14
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 15
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 16
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 17
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 18
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 19
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 20
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 21
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 22
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 23
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 24
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }
    //Box 25
    if(coords.includes([0,1])&&coords.includes([0,6])&&coords.includes([1,7])&&coords.includes([6,7])){
        numBoxes+=1
    }

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
        move.sort(function(a, b) {
            return a - b;
          });
   if(countShaded==2){
       if(lines.indexOf(move) !== -1){
           console.log("it works")
            toastr.error("Already an existing line!")
            return
       }
        let line = document.createElement("div")
        if(currentPlayer=="blue")
        {
            line.className = "blue-line"
        }
        else{
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
       console.log(move)
       lines.push(move)
       move = []
       countShaded = 0
       lastShaded=-10
       console.log(lines)
   }
}


for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (e) => {
        const target = e.target
        chooseDot(target)
    });
}


