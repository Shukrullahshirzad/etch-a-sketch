let screen = document.querySelector(".screen");
let screenWidth = document.querySelector(".screen").offsetWidth;
let screenHeight = document.querySelector(".screen").offsetHeight;
let size = [...document.querySelectorAll(".grid-btn")];
let selectedSize = 100;
let selectedClass = "small";
let rainbowColors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
// add event listener to size buttons

for(item of size){
    item.addEventListener("click",(e)=>{
        selectedSize = parseInt(e.target.classList[0]);
        selectedClass = e.target.classList[1];
    })
}

function randomColorGenerator(){
    let randomNumber = Math.floor(Math.random()*7);
    let randomColor = rainbowColors[randomNumber];
    return randomColor
}
function createGrid(dimension){
    screen.textContent = "";
    let squareNumber = (screenHeight * screenWidth)/dimension;
    for(let i = 0; i<squareNumber; i++){
        let newEl = document.createElement("div");
        screen.appendChild(newEl);
        newEl.classList.add(selectedClass);
      }
}

let createGridBtn = document.querySelector(".create-grid-btn");
createGridBtn.addEventListener("click", ()=>{
    createGrid(selectedSize); 
});
// defualt grid
createGrid(selectedSize);

// change the background color of the grid
let colorBTN = document.querySelectorAll(".btn");
let colorChoice;
colorBTN.forEach(item => {
    item.addEventListener('click', (e)=>{
        colorChoice = e.target.textContent
    })
});
function changeBackground(item){
    let colorSelected = document.querySelector(".grid-color").value;
 
    if([...screen.children].includes(item.target)){
        if(colorChoice == ""){
            item.target.style.backgroundColor = colorSelected
        }
        else if(colorChoice == "rainbow"){
            item.target.style.backgroundColor = randomColorGenerator(); 
        }
        else if(colorChoice == "erase"){
            item.target.style.backgroundColor = "";
        }
        else{
             item.target.style.backgroundColor = colorSelected;
        }
        
    }
   
}
screen.addEventListener("mousedown", (e)=>{
    changeBackground(e)
});

// clear the screen

function clearScreen(){
    for(let i = 0; i<screen.children.length; i++){
        screen.children[i].style.backgroundColor = "";
    }
}

let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clearScreen);