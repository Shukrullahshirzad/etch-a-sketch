let screen = document.querySelector(".screen");
let screenWidth = document.querySelector(".screen").offsetWidth;
let screenHeight = document.querySelector(".screen").offsetHeight;
let size = [...document.querySelectorAll(".grid-btn")];
let selectedSize = 100;
let selectedClass;
// add event listener to size buttons
for(item of size){
    item.addEventListener("click",(e)=>{
        selectedSize = parseInt(e.target.classList[0]);
        selectedClass = e.target.classList[1];
    })
}


function createGrid(dimension){
    screen.textContent = "";
    let squareNumber = (screenHeight * screenWidth)/selectedSize;
    for(let i = 0; i<squareNumber; i++){
        let newEl = document.createElement("div");
        screen.appendChild(newEl);
        newEl.classList.add(selectedClass);
      }
}

let createGridBtn = document.querySelector(".create-grid-btn");
createGridBtn.addEventListener("click", ()=>{
    createGrid(selectedSize); 
})