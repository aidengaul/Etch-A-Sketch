const defaultBoxes = 16;
let numBoxes = defaultBoxes; 
let currentColor = "black";

function initGrid() {
    const container = document.getElementById('grid-container');

    for (let i = 0; i < numBoxes; i++) {
        // create the new row div
        const column = document.createElement('div');
        column.classList.add('column');

        if (i === numBoxes - 1)
            column.classList.add('last-column');

        for (let j = 0; j < numBoxes; j++) {
            // create the new grid box div
            const box = document.createElement('div');
            box.classList.add('grid-box');

            if (j === numBoxes - 1)
                box.classList.add('last-box');

            column.appendChild(box);
        }
        
        container.appendChild(column);
    }

    const gridBoxes = document.querySelectorAll('.grid-box');
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener('mouseenter', changeBoxState);
    })

    const sizeButtons = document.querySelectorAll('.size-button');
    sizeButtons.forEach((button) => {
        button.addEventListener('click', changeCanvasSize);
    })

    const colorButtons = document.querySelectorAll('.color-button');
    colorButtons.forEach((button) => {
        button.addEventListener('click', changeColor)
    })

    const reset = document.querySelector('#clear');
    reset.addEventListener('click', resetGrid);
}

function resetGrid() {
    const container = document.getElementById('grid-container');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    initGrid();
}

function changeBoxState(e) {
    if (e.target.classList.contains('selected'))
        return;
        
    e.target.classList.add(currentColor);
    e.target.classList.add('selected');
}

function changeCanvasSize(e) {
    const newSize = e.target.id;
    numBoxes = newSize;
    resetGrid();
}

function changeColor(e) {
    currentColor = e.target.id;
}

initGrid();