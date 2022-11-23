//Resources
let time = 0;
let energy = 0;
let cells = 0;
let food = 0;

//Creatures
let tenCellOrganism = 0;
let hunCellOrganism = 0;
let humanCellOrganism = 0;

//Konstanten
const humanCellAmount = 37200000000000;


//First Assignment
document.getElementById("firstParagraph").innerText = "Energy: " + energy;
document.getElementById("secondParagraph").innerText = "Cells: " + cells;
document.getElementById("thirdParagraph").innerText = "Food: " + food;
//Creature Assignment
document.getElementById("forthParagraph").innerText = "TenCell: " + tenCellOrganism;
document.getElementById("fifthParagraph").innerText = "HunCell: " + hunCellOrganism;
document.getElementById("fifthParagraph").innerText = "HunCell: " + hunCellOrganism;
document.getElementById("sixthParagraph").innerText = "Humans: " + humanCellOrganism;

//Start Refreshing these functions
function init() {
    //if (tenCellOrganism >= 1){food = food - 1; document.getElementById("thirdParagraph").innerText = "Food: " + food;}

    generateTime();
    generateEnergy();
    generateFood();
    generateCells();
    generateTenCells();

    checkWin();
}
//Generate Time
function generateTime() {
    time++;
    console.log(time);
}

//Generates Energy from thin air 0_0
function generateEnergy() {
    if (energy > 100) {
        //Do nothing
        energy = 100; document.getElementById("firstParagraph").innerText = "Energy: " + energy;
    }
    else if(energy < 100) {
        energy++;energy++;energy++;energy++;
        document.getElementById("firstParagraph").innerText = "Energy: " + energy;
    } 
}

//Cells Search for Food
function generateFood() {
    if (cells >= 1 && (time%10 == 0)){
        food = food + (Math.round(cells * 100) / 100);
        document.getElementById("thirdParagraph").innerText = "Food: " + food;
    }
    if (tenCellOrganism >=1 && (time%10 == 0)){
        food = food - 10;
        document.getElementById("thirdParagraph").innerText = "Food: " + food;
    }
    if (hunCellOrganism >=1 && (time%10 == 0)){
        food = food - 200;
        document.getElementById("thirdParagraph").innerText = "Food: " + food;
    }
    if (humanCellOrganism >=1 && (time%10 == 0)){
        food = food - 100000;
        document.getElementById("thirdParagraph").innerText = "Food: " + food;
    }

    if (food <= 0) {
        document.getElementById("thirdParagraph").style.color = "red";
        document.getElementById("forthParagraph").style.color = "red";
        document.getElementById("fifthParagraph").style.color = "red";
    } 
    else {
        document.getElementById("thirdParagraph").style.color = "#25c62e";
        document.getElementById("forthParagraph").style.color = "#c6bb25";
        document.getElementById("fifthParagraph").style.color = "#a79d0f";
    }
}

//Creation and Death of TenCell
function generateCells(){
    //Creation
    if(tenCellOrganism >= 1 && (time%10 == 0)){
        cells = cells + tenCellOrganism;
        document.getElementById("secondParagraph").innerText = "Cells: " + cells;
    }
    //Death
    if (tenCellOrganism >= 1 && food <= 0 && (time%10 == 0)){
        tenCellOrganism = tenCellOrganism - 1;
        document.getElementById("forthParagraph").innerText = "TenCell: " + tenCellOrganism;
    }
}

//Creation and Death of HunCell
function generateTenCells(){
    //Creation
    if(hunCellOrganism >= 1 && (time%10 == 0)){
        tenCellOrganism  = tenCellOrganism  + hunCellOrganism;
        document.getElementById("forthParagraph").innerText = "TenCell: " + tenCellOrganism;
    }
    //Death
    if (hunCellOrganism >= 1 && food <= 0 && (time%10 == 0)){
        hunCellOrganism = hunCellOrganism - 1;
        document.getElementById("fifthParagraph").innerText = "HunCell: " + hunCellOrganism;
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
//Human
function addHumanCellOrganism(){
    if (cells >= humanCellAmount){
        humanCellOrganism = humanCellOrganism + 1;
        cells = cells - humanCellAmount;
        document.getElementById("secondParagraph").innerText = "Cells: " + cells;
        document.getElementById("sixthParagraph").innerText = "Humans: " + humanCellOrganism;
    }

}

//Winning Condition
let won = false;
function checkWin() {
    if (humanCellOrganism == 2 && won == false){
        alert("You won!");
        won = true;
    }
}

//Start the App
setInterval(init, 100);