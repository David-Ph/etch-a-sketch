// ///                          //////
//          DOM                      //
// ///                         //////

const gridContainer = document.querySelector('.grid-container');
const pickSizeBtn = document.querySelector('#size-btn');
const pickedColor = document.querySelector('#picked-color');
const rainbowBtn = document.querySelector('#rainbow-btn');
const grayscaleBtn = document.querySelector('#grayscale-btn');
const clearBtn = document.querySelector('#clear-btn');
let gridSize = 16;


// ///                          //////
//          INITIAL EXECUTION               //
// ///                         //////
createGrid(gridSize);

// ///                          //////
//          EVENT LISTENER               
// ///                         //////

// initial color
gridContainer.addEventListener('mouseover', (event) =>{
    if(event.target.classList.contains('grid')){
        event.target.style.backgroundColor = 'black';
    }
})

pickSizeBtn.addEventListener('click', changeGridSize);
pickedColor.addEventListener('change', sketchWithCustomColor);
rainbowBtn.addEventListener('click', sketchWithRainbowColor);
grayscaleBtn.addEventListener('click', sketchWithGrayscale);
clearBtn.addEventListener('click', clearGrids);

// ///                          //////
//          FUNCTION               //
// ///                         //////
function createGrid(gridNumber){
    // reset grid container content
    gridContainer.innerHTML = '';
    // do a double loop to create the grid
    for(let i = 0; i < gridNumber; i++){
        // create a new row
        let newRow = document.createElement('div');
        gridContainer.appendChild(newRow);
        // and then populate that row with cols
        for(let i = 0; i < gridNumber; i++){
            let newCol = document.createElement('div');
            newCol.classList.add('grid');
            // create the dataset to later manipulate the background color
            newCol.dataset.r = 255;
            newCol.dataset.g = 255;
            newCol.dataset.b = 255;
            // set width and height
            newCol.style.width = `${gridContainer.offsetWidth / gridNumber}px`;
            newCol.style.height = `${gridContainer.offsetWidth / gridNumber}px`;
            newRow.appendChild(newCol);
        }
    }
    // if i create all the grid instantly with a single loop
    // it's slow to load
    // and it's hard to make a proper layout
}
function changeGridColor(grid, color){
    grid.style.backgroundColor = `${color}`;
}
function changeGridSize(){
    let newSize;
    do{
        newSize = parseInt(window.prompt('Enter new grid size from 1 - 100'));
    }while(newSize > 100 || newSize < 0 || isNaN(newSize));
    
    gridSize = newSize;
    createGrid(gridSize);
}
function sketchWithCustomColor(){
    let newColor = pickedColor.value;
    gridContainer.addEventListener('mouseover', (event) =>{
        if(event.target.classList.contains('grid')){
            changeGridColor(event.target, newColor);
        }
    })
}
function sketchWithRainbowColor(){
    gridContainer.addEventListener('mouseover', (event) =>{
        if(event.target.classList.contains('grid')){
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let newColor = `rgb(${red}, ${green}, ${blue})`;
            changeGridColor(event.target, newColor);
        };
    });
};
function sketchWithGrayscale(){
    gridContainer.addEventListener('mouseover', (event) =>{
        if(event.target.classList.contains('grid')){
            event.target.dataset.r -= 25.5;
            event.target.dataset.g -= 25.5;
            event.target.dataset.b -= 25.5;
            let newColor = `rgb(${event.target.dataset.r}, ${event.target.dataset.g}, ${event.target.dataset.b})`
            changeGridColor(event.target, newColor);
        }
    })
}
function clearGrids(){
    createGrid(gridSize);
}