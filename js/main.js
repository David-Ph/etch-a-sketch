// ///
//          DOM
// ///

const gridContainer = document.querySelector('.grid-container');
const gridSize = 100;

function createGrid(gridNumber){

    for(let i = 1; i < (gridNumber); i++){

        let newRow = document.createElement('div');
        gridContainer.appendChild(newRow);

        for(let i = 0; i < gridNumber; i++){
            let newCol = document.createElement('div');
            newCol.classList.add('grid');
            newCol.style.width = `${gridContainer.offsetWidth / gridNumber}px`;
            newCol.style.height = `${gridContainer.offsetWidth / gridNumber}px`;
            newRow.appendChild(newCol);
        }

    }
}

createGrid(gridSize);
console.log(gridContainer.offsetWidth)