let grid = [];
const numBoxes = 16; // this is for both x and y

function initGrid() {
    const container = document.getElementById('grid-container');

    for (let i = 0; i < numBoxes; i++) {
        // create the new row div
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < numBoxes; j++) {
            const box = document.createElement('div');
            box.classList.add('grid-box');
            row.appendChild(box);
        }
        
        container.appendChild(row);
    }
}

initGrid();