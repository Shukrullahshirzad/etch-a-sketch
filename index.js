let screen = document.querySelector(".screen");
function createGrid(){
  let gridHeigth = parseInt(document.querySelector("#grid-heigth").value);
  let gridWidth = parseInt(document.querySelector("#grid-width").value);
  let squareNumber = gridHeigth * gridWidth;
  for(let i = 0; i<squareNumber; i++){
    let newEl = document.createElement("div");
    screen.appendChild(newEl);
    newEl.classList.add("grid-div");
  }

}
let createGridBtn = document.querySelector(".create-grid-btn");

createGridBtn.addEventListener("click", createGrid)
