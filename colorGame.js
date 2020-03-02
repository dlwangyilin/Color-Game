var numberSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");
init();

function init(){
    // mode buttons event listenera
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        // figure how many squares to show
        this.textContent === "Easy" ? numberSquares = 3: numberSquares = 6;
        reset();
        })
    }

    for(var i = 0; i < squares.length; i++){
        // add click listener
        squares[i].addEventListener("click", function(){
            // grab color of clicked color
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct";
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
    reset();
}
for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    // figure how many squares to show
    this.textContent === "Easy" ? numberSquares = 3: numberSquares = 6;
    reset();
    })
}

function reset(){
    colors = generateRandomColors(numberSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
    reset();
});


function changeColors(color){
    for(var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
    }

}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);    // 0 - 255
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";
    return color
}