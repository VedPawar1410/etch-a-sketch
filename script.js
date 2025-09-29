const container = document.querySelector("#grid-container");
const gridSize = 16;

/* Fucntion to create custom size grid */
createGrid(gridSize);

function createGrid(gridSize){
    const containerSize = container.clientWidth; // assume square, so width == height
    /* clientWidth->built-in property of DOM element
                    includes elements padding
                    excludes borders, margins, scrollbars */
    const cellSize = containerSize / gridSize;

    for (let i = 0; i < gridSize*gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add("grid-item");

        // dynamically size each item
        gridItem.style.width = `${cellSize}px`;
        gridItem.style.height = `${cellSize}px`;

        container.appendChild(gridItem);
    }
    hoverEffect();
}




// Adding a hover effect
function hoverEffect(){
    let hoverGrid = document.querySelectorAll('.grid-item');
    for (let elem of hoverGrid) {
        elem.addEventListener('mouseenter', () => {
            elem.style.backgroundColor = 'blue';
        })
        /* elem.addEventListener('mouseleave', () => {
            elem.style.backgroundColor = '';
        }) */
    };
}


// Button and re-generate grid
const btn = document.createElement('button');
btn.textContent="New Grid";

btn.addEventListener("click",()=>{
    //user prompt to user to enter a grid of one side < 100
    let gridUserInput;
    do{
        gridUserInput = prompt("Enter the grid size you want < 100",'');
    }
    while(!(Number(gridUserInput)<=100) || typeof gridUserInput !== 'string');
    container.replaceChildren(); //removes old grid and empties the container
    createGrid(gridUserInput);
});

document.body.appendChild(btn);