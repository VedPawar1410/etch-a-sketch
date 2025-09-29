const container = document.querySelector("#grid-container");
const gridSize = 16;

/* Fucntion to create custom size grid */
function createGrid(gridSize){
    for (let i = 0; i < gridSize*gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add("grid-item");

        container.appendChild(gridItem);
        
    }
}

createGrid(gridSize);