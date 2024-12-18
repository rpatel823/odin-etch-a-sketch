//global variables
const squareContainer = document.querySelector("#squareContainer");
const buttonContainer = document.querySelector(".newGridButton");
//700 container - 80 left/right padding = 620
const USABLE_CONTAINER_SPACE = 620;
//initial grid of 16x16;
let gridSize = 16;
let squareSize = 0;

function createSquare()
{
    //create a div to represent a sqaure
    const square = document.createElement("div");

    //add a class to the div for styling
    square.classList.add('square');

    //compute the square size to fit grid across all usuable space;
    squareSize = USABLE_CONTAINER_SPACE/gridSize;

    //update the square's width/height to that size;
    square.style.flexBasis = squareSize.toString() + "px";
    square.style.height = squareSize.toString() + "px";

    //attach it to the existing container div
    squareContainer.appendChild(square);
}

function deleteGrid()
{
    //html collection of the current square elements
    let squares = document.getElementsByClassName('square');

    //iterate through collection backwards and remove each element
    for (let i = (squares.length - 1); i >= 0; i--) 
    {
        squares[i].parentNode.removeChild(squares[i]);
    }
}
 

function createGrid(gridSize)
{
    for (let i = 0; i < (gridSize * gridSize); i++)
        {
            createSquare();
        }
}
    

function changeColor (event)
{
    event.target.style.backgroundColor = "purple";
}

//changes square color when mouse is over the square
squareContainer.addEventListener('mouseover', (event) =>
    {
        if (event.target.classList.contains('square'))
        {
            changeColor(event);
        }
    });

//replace current grid with new grid based off user input
buttonContainer.addEventListener("click", (event) =>
{
    gridSize = prompt("What's the new grid size (max 100)?");
    gridSize = Number(gridSize);

    //input validation check
    while (gridSize <= 0 || gridSize > 100 || isNaN(gridSize))
    {
        gridSize = prompt("Please enter a valid grid size (max 100)");
        gridSize = Number(gridSize);
    }

    deleteGrid();
    createGrid(gridSize);
});

//initial grid creation
createGrid(gridSize);
