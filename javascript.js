const defaultBoxes = 16;
let numBoxes = defaultBoxes; 

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
        gridBox.addEventListener('mouseenter', changeBoxState)
    });
}

function changeBoxState(e) {
    e.target.classList.add('selected');
}

initGrid();