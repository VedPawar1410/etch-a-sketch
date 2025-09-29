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
    elem.addEventListener('mouseleave', () => {
        elem.style.backgroundColor = '';
    })
};


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

//Use prepend() to add the button as the first child of the body.
document.body.prepend(btn);