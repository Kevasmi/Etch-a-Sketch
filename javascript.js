let grid = document.querySelector('.grid-container');
let resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('mousedown', resetGame);

function resetGame() {
    let number = prompt('Enter the number of squares on each side:', '');
    let squares = (number * number);
    console.log(squares);
    divCreator(squares);
}

function removeChildNodes () {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

function divCreator(number) {
    removeChildNodes();
    grid.style.gridTemplateColumns = `repeat(${Math.sqrt(number)}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${Math.sqrt(number)}, 1fr)`;
    for (i = 0; i < number; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "grid-item";
        grid.appendChild(newDiv);
    }
    let divs = document.querySelectorAll(".grid-item");
    divs.forEach(div => {
        div.addEventListener('mouseover', e => {
            div.style.backgroundColor = 'black';
    })
    });
}
divCreator(256);