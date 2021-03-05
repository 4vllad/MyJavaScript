//Canvas Element
let world = document.getElementById("world");
let worldCtx = world.getContext("2d");


//Axis of the Graph
let xAxis = 0.1;
let yAxis = 1;
let fixedN = 3;

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
let value2 = document.getElementById("input2").value;
let secondaryColor = false;
let höhe = parseFloat(document.getElementById("inputHeight").value);
let StaucheUndStrecke = parseFloat(document.getElementById("inputStaucheUndStrecke").value);
let LinksUndRechts = parseFloat(document.getElementById("inputLinksUndRechts").value);


/*
* Graph
*
 */

function draw() {
    worldCtx.clearRect(0,0,800,800); // Clear Canvas
    initBackground();//Zeichne Hintergrund
    value = document.getElementById("input").value; //Speichere Input Wert
    value2 = document.getElementById("input2").value; //Speichere Input Wert
    höhe = parseFloat(document.getElementById("inputHeight").value);
    pixelMultiplikator = parseFloat(document.getElementById("pixelmultiplikator").value);
    xAxis = pixelMultiplikator;//Constraint of the scale + Zoom factor + xAxis value
    getPixelMultiplikator();//
    getPixelDensity();
    interpretValue(value);secondaryColor = true;
    interpretValue(value2);secondaryColor = false;
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
            drawLinearGraph(value, höhe);
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
//For linear graph f(x)=x
function drawLinearGraph(value) {
    worldCtx.clearRect(0,0,800,800);
    initBackground();
    let str = value;
    document.getElementById("test1").innerText ="Value:" + value;
    let teil1 = str.slice(0,1);
    let teil2 = str.slice(1,2);
    let teil3 = str.slice(2,str.length);

    for(let i = -range; i < range; i += PunktDichte){
        worldCtx.beginPath();
        worldCtx.lineWidth = lineWidth;
        if (secondaryColor == false){ worldCtx.fillStyle = "orange"; }
        else if (secondaryColor ==true) { worldCtx.fillStyle = "blue";  }
        worldCtx.fillRect((400 + i), ((400 - i / StaucheUndStrecke)  - LinksUndRechts) - höhe, lineWidth, lineWidth);
        worldCtx.stroke();
    }
}




//For x^n Graphs
function drawGraph2(value) {
    this.value = value;
    let str = value;
    let rest = str.slice(0,1);
    let potenz = str.slice(2,3);

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
        if (secondaryColor == false){ worldCtx.fillStyle = "orange"; }
        else if (secondaryColor ==true) { worldCtx.fillStyle = "blue";  }
        worldCtx.fillRect((400 + i / pixelMultiplikator),  (400  - Math.pow(i + LinksUndRechts,potenz)  / pixelMultiplikator / StaucheUndStrecke) - höhe , lineWidth, lineWidth);
        worldCtx.stroke();
    }

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
            if (secondaryColor == false){ worldCtx.fillStyle = "orange"; }
            else if (secondaryColor ==true) { worldCtx.fillStyle = "blue";  }

            worldCtx.fillRect(400 + i / pixelMultiplikator, (400 - Math.sqrt(i + LinksUndRechts)  / pixelMultiplikator * StaucheUndStrecke) - höhe, lineWidth, lineWidth);

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
        if (secondaryColor == false){ worldCtx.fillStyle = "orange"; }
        else if (secondaryColor == true) { worldCtx.fillStyle = "blue";  }
        worldCtx.fillRect(400 + i / pixelMultiplikator, (400 - Math.sin(i + LinksUndRechts)  / pixelMultiplikator * StaucheUndStrecke) - höhe, lineWidth, lineWidth);
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
        if (secondaryColor == false){ worldCtx.fillStyle = "orange"; }
        else if (secondaryColor ==true) { worldCtx.fillStyle = "blue";  }
        worldCtx.fillRect(400 + i / pixelMultiplikator, (400 - Math.cos(i + LinksUndRechts)  / pixelMultiplikator * StaucheUndStrecke) - höhe, lineWidth, lineWidth);
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
    pixelMultiplikator = document.getElementById("pixelmultiplikator").value;
    pixelMultiplikator = pixelMultiplikator / ZoomFaktor; //For Zooming in the Graph
    xAxis = xAxis / ZoomFaktor; //For Zooming SegmentNumbers
    xAxis = xAxis.toFixed(fixedN);
    //GraphSegmentMult = GraphSegmentMult * ZoomFaktor; //For Zooming SegmentLines
    document.getElementById("pixelmultiplikator").value = pixelMultiplikator.toFixed(4);
    draw();
}

//Zoom out the Graph
function zoomMinus(){
    pixelMultiplikator = document.getElementById("pixelmultiplikator").value;
    pixelMultiplikator = pixelMultiplikator * ZoomFaktor;//For Zooming in the Graph
    xAxis = xAxis * ZoomFaktor;//For Zooming SegmentNumbers
    xAxis = xAxis.toFixed(fixedN);
    //GraphSegmentMult = GraphSegmentMult / ZoomFaktor; //For Zooming SegmentLines
    document.getElementById("pixelmultiplikator").value = pixelMultiplikator.toFixed(4);
    draw();
}

//Graph move Up
function moveGraphUp(){
    höhe = parseFloat(document.getElementById("inputHeight").value);
    höhe = höhe + 10;
    document.getElementById("inputHeight").value = höhe;
    draw();
}
//Graph move Down
function moveGraphDown(){
    höhe = parseFloat(document.getElementById("inputHeight").value);
    höhe = höhe - 10;
    document.getElementById("inputHeight").value = höhe;
    draw();
}

//Strecke den Graph m * x TODO:Noch falsch
function strecke(){
    StaucheUndStrecke = parseFloat(document.getElementById("inputStaucheUndStrecke").value);
    StaucheUndStrecke = StaucheUndStrecke * 2 ;
    document.getElementById("inputStaucheUndStrecke").value = StaucheUndStrecke;
    draw();
}

//Stauche den Graph m / x TODO:Noch falsch
function stauche(){
    StaucheUndStrecke = parseFloat(document.getElementById("inputStaucheUndStrecke").value);
    StaucheUndStrecke = StaucheUndStrecke / 2 ;
    document.getElementById("inputStaucheUndStrecke").value = StaucheUndStrecke;
    draw();
}

//Bewege den Graphen nach Links (x+k) TODO:Noch nicht fertig
function links1(){
    LinksUndRechts = parseFloat(document.getElementById("inputLinksUndRechts").value);
    LinksUndRechts = LinksUndRechts + 1 ;
    document.getElementById("inputLinksUndRechts").value = LinksUndRechts;
    draw();
}

///Bewege den Graphen nach Rechts (x-k) TODO:Noch nicht fertig
function rechts(){
    LinksUndRechts = parseFloat(document.getElementById("inputLinksUndRechts").value);
    LinksUndRechts = LinksUndRechts - 1 ;
    document.getElementById("inputLinksUndRechts").value = LinksUndRechts;
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

function showNotes(){
    document.getElementById("notes").style.visibility = "visible";

}

function hideNotes(){
    document.getElementById("notes").style.visibility = "collapse";

}

//<iframe id="notes" src="" style="display: block; position: absolute;
//  left: 820px; top: 70px; width: 800px; height: 800px;
//   border: 1px solid rgb(153, 153, 153);" title="Iframe Example"></iframe>

//Start the App
initBackground();
draw();


