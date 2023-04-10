let screen = document.querySelector(".screen");
let screenWidth = document.querySelector(".screen").offsetWidth;
let screenHeight = document.querySelector(".screen").offsetHeight;
let size = [...document.querySelectorAll(".grid-btn")];
let selectedSize = 100;

// add event listener to size buttons
for(item of size){
    item.addEventListener("click",(e)=>{
        selectedSize = parseInt(e.target.classList[0]);
    })
}
let squareNumber = (screenHeight * screenWidth)/selectedSize;
function createGrid(dimension){
    for(let i = 0; i<squareNumber; i++){
      let newEl = document.createElement("div");
      screen.appendChild(newEl);
      newEl.classList.add("grid-div");
    }
}

let createGridBtn = document.querySelector(".create-grid-btn");
createGridBtn.addEventListener("click", ()=>{
    console.log(selectedSize)
})