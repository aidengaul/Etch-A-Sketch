let grid = [];
const numBoxes = 16; // this is for both x and y

function initGrid() {
    const container = document.getElementById('grid-container');

    for (let i = 0; i < numBoxes; i++) {
        // create the new row div
        const row = document.createElement('div');
        row.classList.add('row');

        if (i === 0)
            row.id = 'first-row';
        if (i === 15) 
            row.id = 'last-row';

        for (let j = 0; j < numBoxes; j++) {
            // create the new grid box div
            const box = document.createElement('div');
            box.classList.add('grid-box');

            if (j === 15)
                box.classList.add('last-box');

            row.appendChild(box);
        }
        
        container.appendChild(row);
    }
}

initGrid();