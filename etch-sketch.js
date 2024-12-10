//global variables
const squareContainer = document.querySelector("#squareContainer");
let NUM_OF_SQUARES = 256;

function createSquare()
{
    //create a div
    const square = document.createElement("div");

    //add a class to the div
    square.classList.add('square');

    //give it same width and height (50px) and initial color
    square.style.cssText = "width: 50px; height: 50px; background-color: green; margin: 5px;"

    //attach it to the existing container div
    squareContainer.appendChild(square);
}

//creates grid of squares
for (let i = 0; i < NUM_OF_SQUARES; i++)
{
        createSquare();
}

function changeColor (event)
{
    event.target.style.backgroundColor = "purple";
}

//changes square color when mouse is over the square
squareContainer.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('square'))
    {
        changeColor(event);
    }
  });
