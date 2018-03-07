var svg = document.getElementById("thing");
var clear = document.getElementById("clear");
var t = 0;
var guessX = 0;
var guessY = 0;
var x = Math.random()*500;
var y = Math.random()*500;


var drawcirc = function(x,y){
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")  
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 20);
    circle.setAttribute("fill", "red");
    svg.appendChild(circle)
    circle.addEventListener("click", function(event){colorcirc(event)});
}

var colorcirc = function(event){
    console.log(event.target);
    if (event.target.getAttribute("fill") == "red"){
        event.target.setAttribute("fill", "blue")
        event.stopPropagation()
    }
    else {
        svg.removeChild(event.target)
        event.stopPropagation()
        drawcirc(x,y)
        x = Math.random()*500;
        y = Math.random()*500;
    }
}

var draw = function(event){
    storeGuess(event);
    drawcirc(guessX, guessY);
}

function storeGuess(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    guessX = x;
    guessY = y;
    console.log("x coords: " + guessX + ", y coords: " + guessY);
}

var clearcan = function(event){
    svg.innerHTML = "";
    t = 0
}


clear.addEventListener("click", clearcan);
svg.addEventListener("click", draw);