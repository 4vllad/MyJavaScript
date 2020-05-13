//Images
let playerModel = false;
let enemyModel = false;

//Rat
const rat = new Image(); rat.src="pictures/rat.png";
let ratVisibility = false;

function drawRat(x) {
    this.x = x;
    console.log("draw");
    worldCtx.drawImage(rat, xPositonRightGuy + x, yPositonRightGuy, saberWidth,saberHeight);
}

//Saber
const saber = new Image(); saber.src="pictures/SaberLeft.png";
let saberWidth = 314/2;
let saberHeight = 398/2;
let saberVisibility = false;

function drawSaber(x) {
    this.x = x;
    console.log("draw");
    worldCtx.drawImage(saber, xPositonLeftGuy + x, yPositonLeftGuy, saberWidth,saberHeight);
}

//Heracles
const heracles = new Image();heracles.src="pictures/HeraclesRight.png";
let heraclesWidth = 1299/4;
let heraclesHeight = 1299/4;




