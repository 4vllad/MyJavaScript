//Canvas Element
let world = document.getElementById("world");
let worldCtx = world.getContext("2d");


//Axis of the Graph
let xAxis = 20;
let yAxis = 1;
let fixedN = 3;

let lineWidth = 4;//Line Width of the Graph
let range = 400;//How many dots are used for Graph
let PunktDichte = 0.01 //How close the dots are to each other
let PunktSumme = range / PunktDichte;

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
let höhe2 = parseFloat(document.getElementById("inputHeight2").value);
let StaucheUndStrecke = parseFloat(document.getElementById("inputStaucheUndStrecke").value);
let StaucheUndStrecke2 = parseFloat(document.getElementById("inputStaucheUndStrecke2").value);
let LinksUndRechts = parseFloat(document.getElementById("inputLinksUndRechts").value);
let LinksUndRechts2 = parseFloat(document.getElementById("inputLinksUndRechts2").value);

let valueArray  = new Array();
let valueArray2 = new Array();

let schnittPunktArray = new Array();

let rundung = 1;

/*
* Graph
*
 */

function draw() {
    worldCtx.clearRect(0,0,800,800); // Clear Canvas
    clearSchnittpunktArray();//Lösche alle Schnittpunkte
    initBackground();//Zeichne Hintergrund
    getInputValues();
    xAxis = pixelMultiplikator;//Constraint of the scale + Zoom factor + xAxis value
    getPixelMultiplikator();//
    getPixelDensity();
    interpretValue(value);secondaryColor = true;drawMittelPunkt();
    interpretValue(value2);secondaryColor = false;drawMittelPunkt();
    rechnung();
    drawSchnittpunkte();
    drawGraphValues();

}

function getInputValues(){
    value = document.getElementById("input").value; //Speichere Input Wert
    value2 = document.getElementById("input2").value; //Speichere Input Wert
    höhe = parseFloat(document.getElementById("inputHeight").value);
    höhe2 = parseFloat(document.getElementById("inputHeight2").value);
    StaucheUndStrecke = parseFloat(document.getElementById("inputStaucheUndStrecke").value);
    StaucheUndStrecke2 = parseFloat(document.getElementById("inputStaucheUndStrecke2").value);
    LinksUndRechts = parseFloat(document.getElementById("inputLinksUndRechts").value);
    LinksUndRechts2 = parseFloat(document.getElementById("inputLinksUndRechts2").value);
    pixelMultiplikator = parseFloat(document.getElementById("pixelmultiplikator").value);
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
            //drawLinearGraph(value, höhe);
            drawGraph2(value);
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
        else if (secondaryColor == true) { worldCtx.fillStyle = "blue";  }
        let x = (400 + i) ;
        let y = ((400 - (i + 10 * LinksUndRechts) / StaucheUndStrecke)  ) - höhe;
        if (secondaryColor == false){  y = ((400 - (i + 10 * LinksUndRechts) / StaucheUndStrecke)  ) - höhe; }
        else if (secondaryColor == true) {  y = ((400 - (i + 10 * LinksUndRechts2) / StaucheUndStrecke2)  ) - höhe2; }
        allFunction2(x, y);
    }
}

//For x^n Graphs
function drawGraph2(value) {
    this.value = value;
    let str = value;
    let rest = str.slice(0,1);
    let potenz = str.slice(2,3);


    for(let i = -range; i < range; i += PunktDichte){
        let x = 400 + i / pixelMultiplikator;
        let y = 0;
        allFunction1();
        if (secondaryColor == false){ y = (400 - Math.pow(i + LinksUndRechts,potenz)  / pixelMultiplikator / StaucheUndStrecke) - höhe; }
        else if (secondaryColor == true) { y = (400  - Math.pow(i + LinksUndRechts2,potenz)  / pixelMultiplikator / StaucheUndStrecke2) - höhe2; }
        allFunction2(x, y);
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
            let x = 400 + i / pixelMultiplikator;
            let y = 0;
            allFunction1();
            if (secondaryColor == false){ y = (400 - Math.sqrt(i + LinksUndRechts)  / pixelMultiplikator * StaucheUndStrecke) - höhe; }
            else if (secondaryColor == true) { y = (400 - Math.sqrt(i + LinksUndRechts2)  / pixelMultiplikator * StaucheUndStrecke2) - höhe2; }
            allFunction2(x, y);
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
        let x = 400 + i / pixelMultiplikator;
        let y = 0;
        allFunction1();
        if (secondaryColor == false){ y = (400 - Math.sin(i + LinksUndRechts)  / pixelMultiplikator * StaucheUndStrecke) - höhe; }
        else if (secondaryColor == true) { y = (400 - Math.sin(i + LinksUndRechts2)  / pixelMultiplikator * StaucheUndStrecke2) - höhe2;}
        allFunction2(x, y);
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
        let x = 400 + i / pixelMultiplikator;
        let y = 0;
        allFunction1();
        if (secondaryColor == false){ y = (400 - Math.cos(i + LinksUndRechts)  / pixelMultiplikator * StaucheUndStrecke) - höhe; }
        else if (secondaryColor == true) { y = (400 - Math.cos(i + LinksUndRechts2)  / pixelMultiplikator * StaucheUndStrecke2) - höhe2;}
        allFunction2(x, y);
    }
}
//drawHelp Function
function allFunction1(){
    worldCtx.beginPath();
    worldCtx.lineWidth = lineWidth;
    if (secondaryColor == false){ worldCtx.fillStyle = "orange"; }
    else if (secondaryColor ==true) { worldCtx.fillStyle = "blue";  }
}
function allFunction2(x, y){
    worldCtx.fillRect(x - (lineWidth/2), y - (lineWidth/2), lineWidth, lineWidth);
    worldCtx.stroke();
    //Füge alle Koordinaten in 2 Arrays rein und runde sie Vorher
    if (secondaryColor == false){ valueArray.push({x:Math.round(x * rundung) / rundung,y:Math.round(y * rundung) / rundung}); }
    else if (secondaryColor ==true) { valueArray2.push({x:Math.round(x * rundung) / rundung,y:Math.round(y * rundung) / rundung});}
    if (range == 0 ){MittelpunktX = x; MittelpunktY = y;}
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
function moveGraphUp2(){
    höhe2 = parseFloat(document.getElementById("inputHeight2").value);
    höhe2 = höhe2 + 10;
    document.getElementById("inputHeight2").value = höhe2;
    draw();
}
//Graph move Down
function moveGraphDown(){
    höhe = parseFloat(document.getElementById("inputHeight").value);
    höhe = höhe - 10;
    document.getElementById("inputHeight").value = höhe;
    draw();
}
function moveGraphDown2(){
    höhe2 = parseFloat(document.getElementById("inputHeight2").value);
    höhe2 = höhe2 - 10;
    document.getElementById("inputHeight2").value = höhe2;
    draw();
}
//Strecke den Graph m * x TODO:Noch falsch
function strecke(){
    StaucheUndStrecke = parseFloat(document.getElementById("inputStaucheUndStrecke").value);
    StaucheUndStrecke = StaucheUndStrecke * 2 ;
    document.getElementById("inputStaucheUndStrecke").value = StaucheUndStrecke;
    draw();
}
function strecke2(){
    StaucheUndStrecke2 = parseFloat(document.getElementById("inputStaucheUndStrecke2").value);
    StaucheUndStrecke2 = StaucheUndStrecke2 * 2 ;
    document.getElementById("inputStaucheUndStrecke2").value = StaucheUndStrecke2;
    draw();
}

//Stauche den Graph m / x TODO:Noch falsch
function stauche(){
    StaucheUndStrecke = parseFloat(document.getElementById("inputStaucheUndStrecke").value);
    StaucheUndStrecke = StaucheUndStrecke / 2 ;
    document.getElementById("inputStaucheUndStrecke").value = StaucheUndStrecke;
    draw();
}
function stauche2(){
    StaucheUndStrecke2 = parseFloat(document.getElementById("inputStaucheUndStrecke2").value);
    StaucheUndStrecke2 = StaucheUndStrecke2 / 2 ;
    document.getElementById("inputStaucheUndStrecke2").value = StaucheUndStrecke2;
    draw();
}

//Bewege den Graphen nach Links (x+k) TODO:Noch nicht fertig
function links1(){
    LinksUndRechts = parseFloat(document.getElementById("inputLinksUndRechts").value);
    LinksUndRechts = LinksUndRechts + 1 ;
    document.getElementById("inputLinksUndRechts").value = LinksUndRechts;
    draw();
}
function links2(){
    LinksUndRechts2 = parseFloat(document.getElementById("inputLinksUndRechts2").value);
    LinksUndRechts2 = LinksUndRechts2 + 1 ;
    document.getElementById("inputLinksUndRechts2").value = LinksUndRechts2;
    draw();
}

///Bewege den Graphen nach Rechts (x-k) TODO:Noch nicht fertig
function rechts(){
    LinksUndRechts = parseFloat(document.getElementById("inputLinksUndRechts").value);
    LinksUndRechts = LinksUndRechts - 1 ;
    document.getElementById("inputLinksUndRechts").value = LinksUndRechts;
    draw();
}
function rechts2(){
    LinksUndRechts2 = parseFloat(document.getElementById("inputLinksUndRechts2").value);
    LinksUndRechts2 = LinksUndRechts2 - 1 ;
    document.getElementById("inputLinksUndRechts2").value = LinksUndRechts2;
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
    //drawSegmentNumbers();
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
    //drawSegmentNumbers();
}

function showNotes(){
    document.getElementById("notes").style.visibility = "visible";

}

function hideNotes(){
    document.getElementById("notes").style.visibility = "collapse";

}

function rechnung(){
    let ergebnis = value + value2;
    /*
    document.getElementById("ergebnis").innerText = "Punktsumme: " + PunktSumme + " 0: " + valueArray[0].x
        + " 1: " + valueArray[1].x + " 2: " + valueArray[2].x+ " 59999: " + valueArray[59999].x +
        " 80001: " + valueArray[80000].x + " valueArrayLenght" + valueArray.length;
    */
    for (i = 0; i <= PunktSumme * 2; i++){
        if (valueArray[i].x == valueArray2[i].x && valueArray[i].y == valueArray2[i].y){
            let x = valueArray[i].x;
            let y = valueArray[i].y;
            schnittPunktArray.push({x:x,y:y});

            //schnittPunktArray[i].x = x;
            //schnittPunktArray[i].y = y;
            //console.log("x:" + x + " y:" + y  );

        }
        /*
        if(i%1000 == 0){
            console.log("test");
        }*/

    }
}

function drawSchnittpunkte (){
    console.clear();
    if (value == value2) {
        worldCtx.beginPath();
        worldCtx.font = '15px serif';
        worldCtx.fillStyle = "white";
        worldCtx.fillText("Unendlich Viele Schnittpunkte",  410, 420, 540);
    }
    else {
        for(i = 0;  i<schnittPunktArray.length; i++){
            worldCtx.beginPath();
            worldCtx.lineWidth = 2;
            worldCtx.fillStyle = "yellow";
            let x = schnittPunktArray[i].x ;
            let y = schnittPunktArray[i].y ;
            if (x > 0 && x < 800 && y > 0 && y < 800) {
                worldCtx.fillRect(x - (lineWidth / 2), y - (lineWidth / 2), lineWidth, lineWidth);
            }
            worldCtx.stroke();

            let fakeX = x - 400;
            let fakeY = y - 400;
            fakeY = (-fakeY);

            console.log("Koord: x:" + fakeX + " y:"+ fakeY);
            addKoordinates(x,y, fakeX, fakeY);
        }
    }

}
//Schnittpunkt Text auf Canvas
function addKoordinates(x,y, fakeX, fakeY){
    worldCtx.beginPath();
    worldCtx.font = '15px serif';
    worldCtx.fillStyle = "white";
    //worldCtx.fillRect(x , y, 50, parseInt(worldCtx.font, 10));
    //worldCtx.fillStyle = "black";
    //ctx.fillStyle = '#f50';
    worldCtx.fillText("x:" +fakeX + " y:" + fakeY , x + 10, y + 20, 540);
}

let MittelpunktX = 0;
let MittelpunktY = 0;
function drawMittelPunkt(){
    worldCtx.beginPath();
    worldCtx.lineWidth = 2;
    worldCtx.fillStyle = "red";
    worldCtx.fillRect(MittelpunktX - (lineWidth / 2), MittelpunktY - (lineWidth / 2), lineWidth, lineWidth);
    console.log(MittelpunktX + " " + MittelpunktY);
    worldCtx.stroke();

}

//Clear all Arrays for next Graphs
function clearSchnittpunktArray() {
    schnittPunktArray = [];
    valueArray = [];
    valueArray2 = [];
}
//<iframe id="notes" src="" style="display: block; position: absolute;
//  left: 820px; top: 70px; width: 800px; height: 800px;
//   border: 1px solid rgb(153, 153, 153);" title="Iframe Example"></iframe>

/*
if (isNaN(höhe)) {
    höhe = 0;
    document.getElementById("test2").innerText ="höhe: " +  höhe;
}
else {
    document.getElementById("test2").innerText ="höhe: " +  höhe;
}*/


//Start the App
draw();

