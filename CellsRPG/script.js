//Resources
let energy = 0;
let cells = 0;
let food = 0;

//Creatures
let tenCellOrganism = 0;
let hunCellOrganism = 0;

//First Assignment
document.getElementById("firstParagraph").innerText = "Energy: " + energy;
document.getElementById("secondParagraph").innerText = "Cells: " + cells;
document.getElementById("thirdParagraph").innerText = "Food: " + food;
//Creature Assignment
document.getElementById("forthParagraph").innerText = "TenCell: " + tenCellOrganism;
document.getElementById("fifthParagraph").innerText = "HunCell: " + hunCellOrganism;

//Start Refreshing these functions
function init() {
    //if (tenCellOrganism >= 1){food = food - 1; document.getElementById("thirdParagraph").innerText = "Food: " + food;}
    generateEnergy();
    generateFood();
    generateCells();
    generateTenCells();
}

//Generates Energy from thin air 0_0
function generateEnergy() {
    energy++;energy++;energy++;energy++;
    document.getElementById("firstParagraph").innerText = "Energy: " + energy;
}

//Cells Search for Food
function generateFood() {
    if (cells >= 1){
        food = food + (Math.round(cells * 100) / 100);
        document.getElementById("thirdParagraph").innerText = "Food: " + food;
    }
}

function generateCells(){
    if(tenCellOrganism >= 1){
        cells = cells + 1;
        document.getElementById("secondParagraph").innerText = "Cells: " + cells;
    }
}

function generateTenCells(){
    if(hunCellOrganism >= 1){
        tenCellOrganism  = tenCellOrganism  + 1;
        document.getElementById("forthParagraph").innerText = "TenCell: " + tenCellOrganism;
    }
}

//Create Cells from Energy :)
function addCell(){
    if (energy >= 10){
        cells = cells + 1;
        energy = energy - 10;
        document.getElementById("firstParagraph").innerText = "Energy: " + energy;
        document.getElementById("secondParagraph").innerText = "Cells: " + cells;
    }

}

//Create First Creature
function addTenCellOrganism(){
    if (cells >= 10){
        tenCellOrganism = tenCellOrganism + 1;
        cells = cells - 10;
        document.getElementById("forthParagraph").innerText = "TenCell: " + tenCellOrganism;
        document.getElementById("secondParagraph").innerText = "Cells: " + cells;
    }

}
//Create Second Creature
function addHunCellOrganism(){
    if (tenCellOrganism >= 10){
        hunCellOrganism = hunCellOrganism + 1;
        tenCellOrganism = tenCellOrganism - 10;
        document.getElementById("forthParagraph").innerText = "TenCell: " + tenCellOrganism;
        document.getElementById("fifthParagraph").innerText = "HunCell: " + hunCellOrganism;
    }

}

//Start the App
setInterval(init, 100);