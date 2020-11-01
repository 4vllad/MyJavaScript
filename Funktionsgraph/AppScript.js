//Canvas Element
let world = document.getElementById("world");
let worldCtx = world.getContext("2d");


//Axis of the Graph
let xAxis = 0;
let yAxis = 0;


function drawXAxis() {
    worldCtx.beginPath();
    worldCtx.lineWidth = 5;
    worldCtx.strokeStyle = "green";
    worldCtx.moveTo(0,400);
    worldCtx.lineTo(800,400);
    worldCtx.stroke();
}

function drawYAxis() {
    worldCtx.beginPath();
    worldCtx.lineWidth = 5;
    worldCtx.strokeStyle = "purple";
    worldCtx.moveTo(400,0);
    worldCtx.lineTo(400,800);
    worldCtx.stroke();
}

//Start all the functions
function init() {
    drawXAxis();
    drawYAxis();
}

//Start the App
init();

