//Images
const saber = new Image();saber.src="pictures/SaberLeft.png"
var saberWidth = 314/2;
var saberHeight = 398/2;

const heracles = new Image();heracles.src="pictures/HeraclesRight.png";
var heraclesWidth = 1299/4;
var heraclesHeight = 1299/4;

let saberVisibility;
function visibleSaber() {
    //saberVisibility = true;
    console.log("visible");
    //worldCtx.drawImage(saber, xPositonLeftGuy, yPositonLeftGuy, saberWidth,saberHeight);
}

function drawSaber() {
    console.log("draw");
    worldCtx.drawImage(saber, xPositonLeftGuy, yPositonLeftGuy, saberWidth,saberHeight);
}

