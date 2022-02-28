let grid = document.querySelector('.grid-container');
let button = document.querySelector('.reset-button');

function divCreator() {
    for (i = 0; i < 1024; i++) {
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
divCreator();