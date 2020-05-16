let inventoryRow = 0;
let inventoryColumn = 0;
let inventorySquare = 0;

let playerHealth = 1;
let playerPower = 1;
let playerExp = 0;

let enemyHealth = 10;
let enemyPower = 1;
let enemyHealthMult = 10;
let enemyTextOffset = 740;

function stats(){
    //clearCanvas();
    //drawPlayerStats();
}

function drawStats() {
    drawPlayerStats();
    drawEnemyStats();
}

function drawPlayerStats(){
    worldCtx.beginPath();
    worldCtx.font = "30px Arial";
    worldCtx.fillText("Health: " + playerHealth, 10, 50);
    worldCtx.fillText("Power: " + playerPower, 10, 100);
    worldCtx.fillText("Exp: " + playerExp, 10, 150);
    worldCtx.closePath();

}

function drawEnemyStats() {
    worldCtx.beginPath();
    worldCtx.clearRect(10 + enemyTextOffset, 0, 200, 190);
    worldCtx.font = "30px Arial";
    worldCtx.fillText("Health: " + enemyHealth, 10 + enemyTextOffset, 50);
    worldCtx.fillText("Power: " + enemyPower, 10 + enemyTextOffset, 100);
    worldCtx.closePath();
}

function upgradePower() {
    /*
    if (playerExp >= 1){
        playerExp = playerExp - 1;
        playerPower = playerPower + 1;
        worldCtx.beginPath();
        worldCtx.clearRect(0,0,200,190);
        worldCtx.closePath();
        drawStats();
    }
    */
    if (playerExp >= 1){
        playerPower = playerPower + playerExp;
        playerExp = 0;
        worldCtx.beginPath();
        worldCtx.clearRect(0,0,200,190);
        worldCtx.closePath();
        clearCanvas();
        drawCircle();
        drawStats();
        drawGround();
        drawLeftGuy(0);
        drawRightGuy(0);
    }
}

//TODO: Town Menu

