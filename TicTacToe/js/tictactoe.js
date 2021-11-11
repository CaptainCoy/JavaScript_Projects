// this keeps track of who's turn it is
let activePlayer = "X";
// this array stores an array of moves, also determines win conditions
let selectedSquares = [];

// this function is for placing an "x" or "o" in a square
function placeXOrO (squareNumber) {
    //this condition makes sure that a square hasn't already been selected
    //the .some() is used to check each element of selectedSquares array
    if (!selectedSquares.some (element => element.includes (squareNumber))) {
        //retrieves the html html element id that was clicked
        let select = document.getElementById (squareNumber);
        //this condition checks who's up
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //   square and active player are concatenated together and added to array
        selectedSquares.push (squareNumber + activePlayer);
        // this calls a function to check for winning conditions
        checkWinConditions();
        // this changes active player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer='X';
        }
        //sound
        Audio ('./media/place.mp3');
        if (activePlayer === 'O') {
            disableClick();
            setTimeout (function() { computersTurn(); }, 1000)
        }
        // returning true is quired for computersTurn()  function to work
        return true;
    }
    // this results in computer choosing random square
    function computersTurn() {
        // boolean is required for while loop
        let success = false;
        // variable stores random number 0-8
        let pickASquare;
        // this lets the loop keep trying if a square has already been selected
        while(!success) {
            pickASquare = String(Math.floor(Math.random() *9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                // this ends the loop
                success = true;
            };
        }
    }      
}

// this parses the selectedSquares array to search forr win conditions
//draw win line is called when conditions are met
function checkWinConditions() {
    if (arrayIncludes('0X','1X','2X')) {drawWinLine(50,100,558,100)}
    else if (arrayIncludes('3X','4X','5X')) {drawWinLine(50,304,558,304)}
    else if (arrayIncludes('6X','7X','8X')) {drawWinLine(50,508,558,508)}
    else if (arrayIncludes('0X','3X','6X')) {drawWinLine(100,50,100,558)}
    else if (arrayIncludes('1X','4X','7X')) {drawWinLine(304,50,304,558)}
    else if (arrayIncludes('2X','5X','8X')) {drawWinLine(508,50,508,558)}
    else if (arrayIncludes('6X','4X','2X')) {drawWinLine(100,508,510,90)}
    else if (arrayIncludes('0X','4X','8X')) {drawWinLine(100,100,520,520)}
    else if (arrayIncludes('0O','1O','2O')) {drawWinLine(50,304,558,304)}
    else if (arrayIncludes('6O','7O','8O')) {drawWinLine(50,508,558,508)}
    else if (arrayIncludes('0O','3O','6O')) {drawWinLine(100,50,100,558)}
    else if (arrayIncludes('1O','4O','7O')) {drawWinLine(304,50,304,558)}
    else if (arrayIncludes('2O','5O','8O')) {drawWinLine(508,50,508,558)}
    else if (arrayIncludes('6O','4O','2O')) {drawWinLine(100,508,510,90)}
    else if (arrayIncludes('0O','4O','8O')) {drawWinLine(100,100,520,520)}
    else if (selectedSquares.length >= 9) {
        Audio('./media/tie.mp3');
        setTimeout(function() {resetGame(); }, 1000);
    }

    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        if (a === true && b === true && c === true) {return true}
    }
}

function disableClick() {
    body.style.pointerEvents= 'none';
    setTimeout(function() {body.style.pointerEvents= 'auto'; }, 1000);
}
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

// win lines
function drawWinLine(coordX1,coordY1,coordX2,coordY2) {
    const canvas = document.getElementById('win-lines')
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x=x1,
        y=y1;
        
    // this interacts with the canvas
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0,0,608,608)
        c.beginPath();
        c.moveTo(x1,y1)
        c.lineTo(x,y)
        c.lineWidth=10;
        c.strokeStyle='rgba(70,255,33,.8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) {x += 10;}
            if (y < y2) {y += 10;}
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {x += 10;}
            if (y >  y2) {y -= 10;}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop); }
        }
    }
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0,0,608,608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function() {clear(); resetGame(); }, 1000);
}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage = ''
    }
    selectedSquares = [];
}
