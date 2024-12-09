//global variables
const squareContainer = document.querySelector("#squareContainer");
let NUM_OF_SQUARES = 256;

function createSquare()
{
    //create a div
    const square = document.createElement("div");

    //give it same width and height (50px) and make it orange
    square.style.cssText = "width: 50px; height: 50px; background: orange; margin: 5px;"

    //attach it to the existing container div
    squareContainer.appendChild(square);
}

//creates grid of squares
for (let i = 0; i < NUM_OF_SQUARES; i++)
{
        createSquare();
}