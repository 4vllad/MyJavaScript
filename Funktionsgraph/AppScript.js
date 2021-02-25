//Canvas Element
let world = document.getElementById("world");
let worldCtx = world.getContext("2d");


//Axis of the Graph
let xAxis = 1;
let yAxis = 1;


let lineWidth = 4;//Line Width of the Graph
let range = 400;//How many dots are used for Graph
let PunktDichte = 0.01 //How close the dots are to each other

//Value for Zoom functionality
let pixelMultiplikator = 1;

let pixelMountain = range/pixelMultiplikator;

let pixelDensity = 1;
//Für das Karroeffekt
let GraphSegmentMult = 1;
//How Powerfull the zoom ist
let ZoomFaktor = 2;

let value = document.getElementById("input").value;


/*
* Graph
*
 */

function draw() {
    worldCtx.clearRect(0,0,800,800); // Clear Canvas
    initBackground();//Zeichne Hintergrund
    value = document.getElementById("input").value; //Speichere Inpute Wert
    getPixelMultiplikator();//
    getPixelDensity();
    interpretValue(value);
}

function interpretValue(value) {
    this.value = value;
    let str = value;
    let teil1 = str.slice(0,1);
    let teil2 = str.slice(1,2);
    if (teil1 == "x") {
        if (teil2 == "^") {
            drawGraph2(value);
        }
        else {
            drawLinearGraph(value);
        }
    }
    else if (teil2 == "q") {
        drawSquareRoot(value);
    }
    else if (value == "sin(x)") {
        drawSinus(value);
    }
    else if (value == "cos(x)") {
        drawCosinus(value);
    }

}
//For linear graph f(x)=x TODO: fix the Höhe
function drawLinearGraph(value) {
    worldCtx.clearRect(0,0,800,800);
    initBackground();
    let str = value;
    document.getElementById("test1").innerText ="Value:" + value;
    let teil1 = str.slice(0,1);
    let teil2 = str.slice(1,2);
    let teil3 = str.slice(2,str.length);
    //document.getElementById("test2").innerText =
    // " Teil1:" +  teil1 + " Teil2:" +  teil2 + " Teil3:" +  teil3;
    let höhe = teil3;

    if (teil2 == "+"){
        höhe = teil3;
    }
    else if (teil2 == "-"){
        höhe = -teil3;
    }

    for(let i = -range; i < range; i += PunktDichte){
        worldCtx.beginPath();
        worldCtx.lineWidth = lineWidth;
        //worldCtx.strokeStyle = "orange";
        worldCtx.fillStyle = "orange";
        //worldCtx.rect(i * 10, 800 - i * 10, 10, 10);
        worldCtx.fillRect(400 + i, 400 - i - höhe, lineWidth, lineWidth);
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

    for(let i = -range; i < range; i += PunktDichte){
        worldCtx.beginPath();
        worldCtx.lineWidth = lineWidth;
        worldCtx.fillStyle = "orange";
        worldCtx.fillRect(400 + i / pixelMultiplikator, (400 - Math.pow(i,potenz)  / pixelMultiplikator) - höhe , lineWidth, lineWidth);
        worldCtx.stroke();
    }
    document.getElementById("test").innerText = rest + " and " + potenz;
}

//sqrt(x)
    function drawSquareRoot(value){
        this.value = value;
        let str = value;
        let teil1 = str.slice(0,5);
        let teil2 = str.slice(5,6);
        let teil3 = str.slice(6,7);
        let teil4 = str.slice(7,8);
        document.getElementById("test2").innerText =
            "teil1:" +  teil1 + " teil2:" + teil2 + " teil3:" + teil3 ;

        for(let i = -range; i < range; i += PunktDichte){
            worldCtx.beginPath();
            worldCtx.lineWidth = lineWidth;
            worldCtx.fillStyle = "orange";
            if (teil3 == ")"){
                worldCtx.fillRect(400 + i / pixelMultiplikator, (400 - Math.sqrt(i)  / pixelMultiplikator), lineWidth, lineWidth);
            }
            else if (teil3 == "+"){
                teil4 = parseFloat(teil4);
                worldCtx.fillRect(400 + i / pixelMultiplikator + teil4, (400 - Math.sqrt(i)  / pixelMultiplikator) , lineWidth, lineWidth);
            }
            else if (teil3 == "-"){
                teil4 = parseFloat(teil4);
                worldCtx.fillRect(400 + i / pixelMultiplikator - teil4, (400 - Math.sqrt(i)  / pixelMultiplikator) , lineWidth, lineWidth);
            }
            worldCtx.stroke();
        }
}


//sin(x)
function drawSinus(value){
    this.value = value;
    let str = value;
    let rest = str.slice(0,4);
    let sin = str.slice(4,5);
    document.getElementById("test2").innerText ="rest: " +  rest + " sin:" + sin;
    for(let i = -range; i < range; i += PunktDichte){
        worldCtx.beginPath();
        worldCtx.lineWidth = lineWidth;
        worldCtx.fillStyle = "orange";
        worldCtx.fillRect(400 + i / pixelMultiplikator, (400 - Math.sin(i)  / pixelMultiplikator), lineWidth, lineWidth);
        worldCtx.stroke();
    }
}


//cos(x)
function drawCosinus(value){
    this.value = value;
    let str = value;
    let rest = str.slice(0,4);
    let cos = str.slice(4,5);
    document.getElementById("test2").innerText ="rest: " +  rest + " cos:" + cos;
    for(let i = -range; i < range; i += PunktDichte){
        worldCtx.beginPath();
        worldCtx.lineWidth = lineWidth;
        worldCtx.fillStyle = "orange";
        worldCtx.fillRect(400 + i / pixelMultiplikator, (400 - Math.cos(i)  / pixelMultiplikator), lineWidth, lineWidth);
        worldCtx.stroke();
    }
}


//Get Zoom Number
function getPixelMultiplikator() {
    let pixelValue = document.getElementById("pixelmultiplikator").value;
    pixelMultiplikator = pixelValue;
}

//For Later??
function getPixelDensity() {
    let pixelDensityValue = document.getElementById("pixeldensity").value;
    pixelDensity = pixelDensityValue;
}
//Zoom in the Graph

function zoomPlus(){
    let pixelValue = document.getElementById("pixelmultiplikator").value;
    pixelValue = pixelValue / ZoomFaktor; //For Zooming in the Graph
    xAxis = xAxis / ZoomFaktor; //For Zooming SegmentNumbers
    //GraphSegmentMult = GraphSegmentMult * ZoomFaktor; //For Zooming SegmentLines
    document.getElementById("pixelmultiplikator").value = pixelValue;
    draw();
}

//Zoom out the Graph
function zoomMinus(){
    let pixelValue = document.getElementById("pixelmultiplikator").value;
    pixelValue = pixelValue * ZoomFaktor;//For Zooming in the Graph
    xAxis = xAxis * ZoomFaktor;//For Zooming SegmentNumbers
    //GraphSegmentMult = GraphSegmentMult / ZoomFaktor; //For Zooming SegmentLines
    document.getElementById("pixelmultiplikator").value = pixelValue;
    draw();
}

//TODO: Make Graph move Up
function moveGraphUp(){
    höhe = höhe + 50;
    //document.getElementById("input").value = "x^2" + höhe;
    draw();
}
//TODO: Make Graph move Down
function moveGraphDown(){
    höhe = höhe - 50;
    draw();
}

//Change Style
let style = 1;
function changeStyle(){
    if (style == 1){
        style = 2;
        draw();
    }
    else if(style == 2){
        style = 1;
        draw();
    }

}

//Clear the Canvas and Draw new Lines
function Clear() {
    worldCtx.clearRect(0,0,800,800);
    drawXAxis("green");
    drawYAxis("purple");
    if(style == 1){drawHorizontalSegmentation2();} else{drawHorizontalSegmentation();}
    if(style == 1){drawVerticalSegmentation2();} else{drawVerticalSegmentation();}
    drawSegmentNumbers();
}

//Reload the Page
function reset(){
    location.reload();
}

//Start all the functions
function initBackground() {
    drawXAxis("green");
    drawYAxis("purple");
    if(style == 1){drawHorizontalSegmentation2();} else{drawHorizontalSegmentation();}
    if(style == 1){drawVerticalSegmentation2();} else{drawVerticalSegmentation();}
    drawSegmentNumbers();
}

//Start the App
initBackground();


