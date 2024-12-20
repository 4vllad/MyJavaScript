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

//Multiplikatoren
let reset = 1;

//Delta of Resources
let foodDelta = cells - (tenCellOrganism * 10) - (hunCellOrganism * 200) - (humanCellOrganism * 100000);

//First Assignment
document.getElementById("firstParagraph").innerText = "Energy: " + energy;
document.getElementById("deltaParagraph").innerText = "Delta; " + foodDelta;
document.getElementById("secondParagraph").innerText = "Cells: " + cells;
document.getElementById("thirdParagraph").innerText = "Food: " + food;
//Creature Assignment
document.getElementById("forthParagraph").innerText = "TenCell: " + tenCellOrganism;
document.getElementById("fifthParagraph").innerText = "HunCell: " + hunCellOrganism;
document.getElementById("fifthParagraph").innerText = "HunCell: " + hunCellOrganism;
document.getElementById("sixthParagraph").innerText = "Humans: " + humanCellOrganism;
document.getElementById("resetButton").innerText = " Reset for 10 HunCells";
document.getElementById("resets").innerText = "Resets " + reset + " = Multiplikator for all ";
document.getElementById("info").innerText = "Create 2 humans each worth 37.2 Trillion Cells";

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
        energy = energy +(1*reset);
        document.getElementById("firstParagraph").innerText = "Energy: " + energy;
    } 
}

//Cells Search for Food
function generateFood() {
    if (cells >= 1 && (time%10 == 0)){
        food = food + (Math.round(cells * 100) / 100);
        document.getElementById("thirdParagraph").innerText = "Food: " + food;
        foodDelta = cells - (tenCellOrganism * 10) - (hunCellOrganism * 200) - (humanCellOrganism * 100000);
        document.getElementById("deltaParagraph").innerText = "Delta " + " " + foodDelta;
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
        cells = cells + tenCellOrganism * (1*reset);
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
        tenCellOrganism  = tenCellOrganism  + hunCellOrganism * (1*reset);
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

//Reset
function resetGame(){
    let confirmReset = confirm("Reset ALL for " + (10*reset) + " HunCells?");
    if (confirmReset == true && hunCellOrganism >= (10*reset)){
        resetGameAll();
        reset = reset * 2;
        document.getElementById("resetButton").innerText = " Reset for " +  (10*reset) +  " HunCells";
        document.getElementById("resets").innerText = "Resets " + reset + " = Multiplikator for all ";
    }
    else {}
}

function resetGameAll() {
    time = 0;
    energy = 0;
    cells = 0;
    food = 0;
    

//Creatures
    tenCellOrganism = 0;
    hunCellOrganism = 0;
    humanCellOrganism = 0;
//First Assignment
    document.getElementById("firstParagraph").innerText = "Energy: " + energy;
    document.getElementById("secondParagraph").innerText = "Cells: " + cells;
    document.getElementById("thirdParagraph").innerText = "Food: " + food;
//Creature Assignment
    document.getElementById("forthParagraph").innerText = "TenCell: " + tenCellOrganism;
    document.getElementById("fifthParagraph").innerText = "HunCell: " + hunCellOrganism;
    document.getElementById("fifthParagraph").innerText = "HunCell: " + hunCellOrganism;
    document.getElementById("sixthParagraph").innerText = "Humans: " + humanCellOrganism;
}

//Start the App
setInterval(init, 100);