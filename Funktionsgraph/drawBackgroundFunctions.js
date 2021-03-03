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
    worldCtx.fillStyle = "black";
    worldCtx.fillText(xAxis , 410, 420, 540);
    worldCtx.fillText(xAxis * 10 , 590, 420, 540);
}