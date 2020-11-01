//Canvas Element
let world = document.getElementById("world");
let worldCtx = world.getContext("2d");


//Axis of the Graph
let xAxis = 0;
let yAxis = 0;

let lineWidth = 6;

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
    for(i = 0; i < 100; i++){

        worldCtx.beginPath();
        worldCtx.lineWidth = lineWidth;
        worldCtx.strokeStyle = "orange";
        worldCtx.rect(i * 10, 800 - i * 10, 10, 10);
        worldCtx.stroke();
    }
}

function drawParable() {
    for(i = 0; i < 100; i++){

        worldCtx.beginPath();
        worldCtx.lineWidth = lineWidth;
        worldCtx.strokeStyle = "orange";
        worldCtx.rect(Math.pow(i,2) * 10, 800 - Math.pow(i,2) * 10, 10, 10);
        worldCtx.stroke();
    }
}
//Start all the functions
function init() {
    drawXAxis();
    drawYAxis();
}

//Start the App
init();


