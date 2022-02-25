let grid = document.querySelector('.grid-container')

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
            console.log(e.type);
    })
    });
}
divCreator();