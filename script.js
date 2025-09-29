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


// Adding a hover effect
let hoverGrid = document.querySelectorAll('.grid-item');
for (let elem of hoverGrid) {
    elem.addEventListener('mouseenter', () => {
        elem.style.backgroundColor = 'blue';
    })
    /* elem.addEventListener('mouseleave', () => {
        elem.style.backgroundColor = '';
    }) */
};
