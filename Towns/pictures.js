//Images
let playerModel = false;

//Enemy
const enemyImage = new Image(); enemyImage.src="";
let enemyImageArray = [];
enemyImageArray.push("pictures/rat.png");
enemyImageArray.push("pictures/gopnik.png");
enemyImageArray.push("pictures/bandit2.png");
enemyImageArray.push("pictures/merc.png");
enemyImageArray.push("pictures/merc2.png");
enemyImageArray.push("pictures/bitconectguy.png");
enemyImageArray.push("pictures/youwin.png");
enemyImageArray.push("pictures/don.png");
function drawEnemyImage(x) {
    this.x = x;
    enemyImage.src = enemyImageArray[x];
    worldCtx.drawImage(enemyImage, xPositonRightGuy - x, yPositonRightGuy, saberWidth,saberHeight);
}

//Player
const playerImage = new Image(); playerImage.src="pictures/randomguy.png";
function drawPlayerImage(x) {
    this.x = x;
    worldCtx.drawImage(playerImage, xPositonLeftGuy + x, yPositonLeftGuy, saberWidth,saberHeight);
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




