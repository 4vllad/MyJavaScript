//Canvas Element
let world = document.getElementById("world");
let worldCtx = world.getContext("2d");


//Axis of the Graph
let xAxis = 1;
let yAxis = 1;


let lineWidth = 3;//Line Width of the Graph
let steps = 400;//How many dots are used for Graph

//Value for Zoom functionality
let pixelMultiplikator = 1;

let pixelMountain = steps/pixelMultiplikator;

let pixelDensity = 1;

/*
* Background
*
 */
function drawXAxis(color) {
    worldCtx.beginPath();
    worldCtx.lineWidth = lineWidth;
    worldCtx.strokeStyle = color;
    worldCtx.moveTo(0,400);
    worldCtx.lineTo(800,400);
    worldCtx.stroke();
}

function drawYAxis(color) {
    worldCtx.beginPath();
    worldCtx.lineWidth = lineWidth;
    worldCtx.strokeStyle = color;
    worldCtx.moveTo(400,0);
    worldCtx.lineTo(400,800);
    worldCtx.stroke();
}

function drawHorizontalSegmentation() {
    for (let i = 0; i < 100; i++){
        worldCtx.beginPath();
        worldCtx.lineWidth = 1;
        worldCtx.strokeStyle = "blue";
        worldCtx.moveTo(400 - 10,20 * i);
        worldCtx.lineTo(400 + 10,20 * i);
        worldCtx.stroke();
    }
}

function drawHorizontalSegmentation2() {
    for (let i = 0; i < 100; i++){
        worldCtx.beginPath();
        worldCtx.lineWidth = 0.5;
        worldCtx.strokeStyle = "black";
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
        worldCtx.moveTo(i * 20,400 + 10);
        worldCtx.lineTo(i * 20,400 - 10);
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

function drawSegmentNumbers(){
    worldCtx.font = '20px serif';
    worldCtx.fillStyle = "black";
    worldCtx.fillText(xAxis, 410, 420, 540);
}

/*
* Graph
*
 */

function draw() {
    worldCtx.clearRect(0,0,800,800);
    initBackground();
    let value = document.getElementById("input").value;
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
//For linear graph f(x)=x
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


//For x^n Graphs
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


//Get Zoom Number
function getPixelMultiplikator() {
    let pixelValue = document.getElementById("pixelmultiplikator").value;
    pixelMultiplikator = pixelValue;
}

//
function getPixelDensity() {
    let pixelDensityValue = document.getElementById("pixeldensity").value;
    pixelDensity = pixelDensityValue;
}
//Zoom in the Graph

function zoomPlus(){
    let pixelValue = document.getElementById("pixelmultiplikator").value;
    pixelValue = pixelValue / 10;
    xAxis = xAxis / 10;
    document.getElementById("pixelmultiplikator").value = pixelValue;
    draw();
}

//Zoom out the Graph
function zoomMinus(){
    let pixelValue = document.getElementById("pixelmultiplikator").value;
    pixelValue = pixelValue * 10;
    xAxis = xAxis * 10;
    document.getElementById("pixelmultiplikator").value = pixelValue;
    draw();
}

function moveGraphUp(){
    höhe = höhe + 50;
    //document.getElementById("input").value = "x^2" + höhe;
    draw();
}

function moveGraphDown(){
    höhe = höhe - 50;
    draw();
}

//Clear the Canvas and Draw new Lines
function Clear() {
    worldCtx.clearRect(0,0,800,800);
    drawXAxis("green");
    drawYAxis("purple");
    drawHorizontalSegmentation();
    drawVerticalSegmentation();
    drawSegmentNumbers();
}

//Start all the functions
function initBackground() {
    drawXAxis("green");
    drawYAxis("purple");
    drawHorizontalSegmentation();
    drawVerticalSegmentation();
    drawSegmentNumbers();
}

//Start the App
initBackground();


