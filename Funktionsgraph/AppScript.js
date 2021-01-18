//Canvas Element
let world = document.getElementById("world");
let worldCtx = world.getContext("2d");


//Axis of the Graph
let xAxis = 0;
let yAxis = 0;

let lineWidth = 3;
let steps = 400;

let pixelMultiplikator = 1;


let pixelMountain = steps/pixelMultiplikator;

let pixelDensity = 1;

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
        worldCtx.lineWidth = 1;
        worldCtx.strokeStyle = "blue";
        worldCtx.moveTo(400 - 10,10 * i);
        worldCtx.lineTo(400 + 10,10 * i);
        worldCtx.stroke();
    }
}

function drawHorizontalSegmentation2() {
    for (let i = 0; i < 100; i++){
        worldCtx.beginPath();
        worldCtx.lineWidth = 0.5;
        worldCtx.strokeStyle = "blac";
        worldCtx.moveTo(0,10 * i);
        worldCtx.lineTo(800,10 * i);
        worldCtx.stroke();
    }
}

function drawVerticalSegmentation() {
    for (let i = 0; i < 100; i++){
        worldCtx.beginPath();
        worldCtx.lineWidth = 1;
        worldCtx.strokeStyle = "red";
        worldCtx.moveTo(i * 10,400 + 10);
        worldCtx.lineTo(i * 10,400 - 10);
        worldCtx.stroke();
    }
}

function drawVerticalSegmentation2() {
    for (let i = 0; i < 100; i++){
        worldCtx.beginPath();
        worldCtx.lineWidth = 0.5;
        worldCtx.strokeStyle = "black";
        worldCtx.moveTo(i * 10,800);
        worldCtx.lineTo(i * 10,0);
        worldCtx.stroke();
    }
}

function draw() {
    worldCtx.clearRect(0,0,800,800);
    initBackground();
    let value = document.getElementById("input").value;
    //document.getElementById("test").innerText = value;
    getPixelMultiplikator();
    getPixelDensity();
    interpretValue(value);

}

function interpretValue(value) {
    this.value = value;
    if (value == "x" || value == "x^1"){
        drawLinearGraph();
    }
    else {
        drawGraph2(value);
    }

}

function drawLinearGraph() {
    worldCtx.clearRect(0,0,800,800);
    initBackground();

    this.value = value;
    let str = value;
    let rest = str.slice(0,1);

    let höhe = parseFloat(str.slice(2,str.length));

    if (isNaN(höhe)) {
        höhe = 0;
        document.getElementById("test2").innerText ="höhe: " +  höhe;
    }
    else {
        document.getElementById("test2").innerText ="höhe: " +  höhe;
    }


    for(let i = -steps; i < steps; i += 0.01){
        worldCtx.beginPath();
        worldCtx.lineWidth = lineWidth;
        //worldCtx.strokeStyle = "orange";
        worldCtx.fillStyle = "orange";
        //worldCtx.rect(i * 10, 800 - i * 10, 10, 10);
        worldCtx.fillRect(400 + i, 400 - i - höhe , lineWidth, lineWidth);
        worldCtx.stroke();
    }
}



function drawGraph2(value) {
    this.value = value;
    let str = value;
    let rest = str.slice(0,1);
    let potenz = str.slice(2,3);

    let höhe = parseFloat(str.slice(3,str.length));

    if (isNaN(höhe)) {
        höhe = 0;
        document.getElementById("test2").innerText ="höhe: " +  höhe;
    }
    else {
        document.getElementById("test2").innerText ="höhe: " +  höhe;
    }

    for(let i = -steps; i < steps; i += 0.01){

        worldCtx.beginPath();
        worldCtx.lineWidth = lineWidth;
        worldCtx.fillStyle = "orange";
        worldCtx.fillRect(400 + i / pixelMultiplikator, (400 - Math.pow(i,potenz)  / pixelMultiplikator) - höhe , lineWidth, lineWidth);
        worldCtx.stroke();
    }
    document.getElementById("test").innerText = rest + " and " + potenz;
}



function getPixelMultiplikator() {
    let pixelValue = document.getElementById("pixelmultiplikator").value;
    pixelMultiplikator = pixelValue;
}

function getPixelDensity() {
    let pixelDensityValue = document.getElementById("pixeldensity").value;
    pixelDensity = pixelDensityValue;
}
//Zoom in the Graph
function zoomPlus(){
    let pixelValue = document.getElementById("pixelmultiplikator").value;
    pixelValue = pixelValue * 10;
    document.getElementById("pixelmultiplikator").value = pixelValue;
    draw();
}

//Zoom out the Graph
function zoomMinus(){
    let pixelValue = document.getElementById("pixelmultiplikator").value;
    pixelValue = pixelValue / 10;
    document.getElementById("pixelmultiplikator").value = pixelValue;
    draw();
}

//Clear the Canvas and Draw new Lines
function Clear() {
    worldCtx.clearRect(0,0,800,800);
    drawXAxis();
    drawYAxis();
    drawHorizontalSegmentation2();
    drawVerticalSegmentation2();
}

//Start all the functions
function initBackground() {
    drawXAxis();
    drawYAxis();
    drawHorizontalSegmentation2();
    drawVerticalSegmentation2();
}

//Start the App
initBackground();


