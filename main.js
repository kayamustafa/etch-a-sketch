let color = '#000000'


function createBoard(size) {
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = 'repeat(' + size + ',1fr)';
    board.style.gridTemplateRows = 'repeat(' + size + ',1fr)';
    let isMouseDown = false
    for (let i = 0; i < size ** 2; i++) {
        let square = document.createElement('div');

        square.addEventListener('mousedown', () => {
            isMouseDown = true;
            getColor(square);
        })

        square.addEventListener('mousemove', () => {
            if (isMouseDown) getColor(square);
        })
        square.addEventListener('mouseup', () => {
            isMouseDown = false;
        })

        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}

createBoard(16);

function changeSize(input) {
    resetBoard();
    createBoard(input);
}

function setInputValue() {
    let inputValue = document.querySelector('#boardsize')
    let output = document.querySelector('#range-value')
    output.innerText = inputValue.value + 'x' + inputValue.value;
}

function getColor(a) {
    console.log('wqeqwe')
    if (color === "random") a.style.backgroundColor = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
    else a.style.backgroundColor = color;
}

function setColor(newColor) {
    color = newColor;
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}