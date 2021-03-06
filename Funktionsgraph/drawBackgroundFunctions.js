/*
* Background
*
 */

//Die x Achse von dem Graphen
function drawXAxis(color) {
    worldCtx.beginPath();
    worldCtx.lineWidth = lineWidth;
    worldCtx.strokeStyle = color;
    worldCtx.moveTo(0,400);
    worldCtx.lineTo(800,400);
    worldCtx.stroke();
}

//Die y Achse von dem Graphen
function drawYAxis(color) {
    worldCtx.beginPath();
    worldCtx.lineWidth = lineWidth;
    worldCtx.strokeStyle = color;
    worldCtx.moveTo(400,0);
    worldCtx.lineTo(400,800);
    worldCtx.stroke();
}

//Erste Art der Unterteilung (Segmentierung) der x Achse
function drawHorizontalSegmentation() {
    for (let i = 0; i < 100; i++){
        worldCtx.beginPath();
        worldCtx.lineWidth = 1;
        worldCtx.strokeStyle = "blue";
        worldCtx.moveTo(400 - 10,20 * i * GraphSegmentMult);
        worldCtx.lineTo(400 + 10,20 * i * GraphSegmentMult);
        worldCtx.stroke();
    }
}

//Zweite Art der Unterteilung (Segmentierung) der x Achse
function drawHorizontalSegmentation2() {
    for (let i = 0; i < 100; i++){
        worldCtx.beginPath();
        worldCtx.lineWidth = 0.5;
        worldCtx.strokeStyle = "black";
        worldCtx.moveTo(0,20 * i * GraphSegmentMult);
        worldCtx.lineTo(800,20 * i * GraphSegmentMult);
        worldCtx.stroke();
    }
}

//Erste Art der Unterteilung (Segmentierung) der x-Achse
function drawVerticalSegmentation() {
    for (let i = 0; i < 100; i++){
        worldCtx.beginPath();
        worldCtx.lineWidth = 1;
        worldCtx.strokeStyle = "red";
        worldCtx.moveTo(i * 20 * GraphSegmentMult,400 + 10);
        worldCtx.lineTo(i * 20 * GraphSegmentMult,400 - 10);
        worldCtx.stroke();
    }
}

//Zweite Art der Unterteilung (Segmentierung) der y-Achse
function drawVerticalSegmentation2() {
    for (let i = 0; i < 100; i++){
        worldCtx.beginPath();
        worldCtx.lineWidth = 0.5;
        worldCtx.strokeStyle = "black";
        worldCtx.moveTo(i * 20 * GraphSegmentMult,800);
        worldCtx.lineTo(i * 20 * GraphSegmentMult,0);
        worldCtx.stroke();
    }
}

//Zahlen für die einzelne Segmente an den Achsen, hier erst 2 Zahlen
function drawSegmentNumbers(){
    worldCtx.font = '20px serif';
    worldCtx.fillStyle = "white";
    //worldCtx.fillText(xAxis , 410, 420, 200);
    //Rechts
    worldCtx.fillText(xAxis * 10/20 , 570, 420, 200);
    worldCtx.beginPath();
    worldCtx.strokeStyleStyle = "black";
    worldCtx.moveTo(600,390);
    worldCtx.lineTo(600,410);
    worldCtx.stroke();
    //Oben
    worldCtx.fillText(xAxis * 10/20 , 370, 218, 200);
    worldCtx.beginPath();
    worldCtx.strokeStyleStyle = "black";
    worldCtx.moveTo(390,200);
    worldCtx.lineTo(410,200);
    worldCtx.stroke();
    //Unten
    worldCtx.beginPath();
    worldCtx.strokeStyleStyle = "black";
    worldCtx.moveTo(390,600);
    worldCtx.lineTo(410,600);
    worldCtx.stroke();
    //Links
    worldCtx.beginPath();
    worldCtx.strokeStyleStyle = "black";
    worldCtx.moveTo(200,390);
    worldCtx.lineTo(200,410);
    worldCtx.stroke();
}

function drawGraphValues(){
    let Strecke = document.getElementById("inputStaucheUndStrecke").value;
    let Strecke2 = document.getElementById("inputStaucheUndStrecke2").value;
    let Typ = document.getElementById("input").value;
    let Typ2 = document.getElementById("input2").value;
    let Höhen = document.getElementById("inputHeight").value;
    let Höhen2 = document.getElementById("inputHeight2").value;
    worldCtx.font = '25px serif';
    worldCtx.fillStyle = "orange";
    let firstGraph = "f(x)= " + Strecke  + " * " + Typ + " + " + Höhen;
    let secondGraph = "g(x)= "+ Strecke2 + " * " + Typ2 + " + " + Höhen2;
    worldCtx.fillText(firstGraph , 580, 30, 200);
    worldCtx.fillStyle = "blue";
    worldCtx.fillText(secondGraph , 580, 60, 200);
}