//Resources
let energy = 0;
let cells = 0;
let food = 0;

//Creatures
let tenCellOrganism = 0;

//First Assignment
document.getElementById("firstParagraph").innerText = "Energy: " + energy;
document.getElementById("secondParagraph").innerText = "Cells: " + cells;
document.getElementById("thirdParagraph").innerText = "Food: " + food;
//Creature Assignment
document.getElementById("forthParagraph").innerText = "TenCell: " + tenCellOrganism;

//Start Refreshing these functions
function init() {
    //if (tenCellOrganism >= 1){food = food - 1; document.getElementById("thirdParagraph").innerText = "Food: " + food;}
    generateEnergy();
    generateFood();
}

//Generates Energy from thin air 0_0
function generateEnergy() {
    energy++;
    document.getElementById("firstParagraph").innerText = "Energy: " + energy;
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
//Cells Search for Food
function generateFood() {
    if (cells >= 1){
        food = Math.round((food + 0.1)*100)/100;
        document.getElementById("thirdParagraph").innerText = "Food: " + food;
    }
}

//Create First Creature
function addTenCellOrganism(){
    if (cells >= 10){
        tenCellOrganism = tenCellOrganism + 1;
        cells = cells - 10;
        document.getElementById("forthParagraph").innerText = "TenCell: " + tenCellOrganism ;
    }

}


setInterval(init, 100);