//Canvas Element
let world = document.getElementById("world");
let worldCtx = world.getContext("2d");


//Axis of the Graph
let xAxis = 0;
let yAxis = 0;

let lineWidth = 3;
let steps = 400;

function drawXAxis() {
    worldCtx.beginPath();
    worldCtx.lineWidth = lineWidth;
    worldCtx.strokeStyle = "green";
    worldCtx.moveTo(0,400);
    worldCtx.lineTo(800,400);
    worldCtx.stroke();
}

function drawYAxis() {
    worldCtx.beginPath();
    worldCtx.lineWidth = lineWidth;
    worldCtx.strokeStyle = "purple";
    worldCtx.moveTo(400,0);
    worldCtx.lineTo(400,800);
    worldCtx.stroke();
}

function drawHorizontalSegmentation() {
    for (let i = 0; i < 100; i++){
        worldCtx.beginPath();
        worldCtx.lineWidth = lineWidth - 1;
        worldCtx.strokeStyle = "blue";
        worldCtx.moveTo(400 - 10,10 * i);
        worldCtx.lineTo(400 + 10,10 * i);
        worldCtx.stroke();
    }
}

function drawVerticalSegmentation() {
    for (let i = 0; i < 100; i++){
        worldCtx.beginPath();
        worldCtx.lineWidth = lineWidth - 1;
        worldCtx.strokeStyle = "red";
        worldCtx.moveTo(i * 10,400 + 10);
        worldCtx.lineTo(i * 10,400 - 10);
        worldCtx.stroke();
    }
}

function draw() {
    worldCtx.clearRect(0,0,800,800);
    init();
    let value = document.getElementById("input").value;
    document.getElementById("test").innerText = value;

    interpretValue(value);

}

function interpretValue(value) {
    this.value = value;
    if (value == "x"){
        drawLinearGraph();
    }
    if (value == "x^2"){
        drawParable();
    }
}

function drawLinearGraph() {
    for(i = -steps; i < steps; i++){

        worldCtx.beginPath();
        worldCtx.lineWidth = lineWidth;
        //worldCtx.strokeStyle = "orange";
        worldCtx.fillStyle = "orange";
        //worldCtx.rect(i * 10, 800 - i * 10, 10, 10);
        worldCtx.fillRect(400 + i, 400 - i , lineWidth, lineWidth);
        worldCtx.stroke();
    }
}

function drawParable() {
    for(i = -steps; i < steps; i++){

        worldCtx.beginPath();
        worldCtx.lineWidth = lineWidth;
        worldCtx.fillStyle = "orange";
        worldCtx.fillRect(400 + i, 400 - Math.pow(i,2), lineWidth, lineWidth);
        worldCtx.stroke();
    }
}

function Clear() {
    worldCtx.clearRect(0,0,800,800);
    drawXAxis();
    drawYAxis();
}
//Start all the functions
function init() {
    drawXAxis();
    drawYAxis();
    drawHorizontalSegmentation();
    drawVerticalSegmentation();
}

//Start the App
init();


