let inventoryRow = 0;
let inventoryColumn = 0;
let inventorySquare = 0;

let playerHealth = 1;
let playerPower = 0;
let playerExp = 0;

let enemyHealth = 100;
let enemyPower = 1;
let enemyTextOffset = 740;

function inventory(){
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
    //drawEnemyStats();
}

function upgradePower() {
    if (playerExp >= 1){
        playerExp = playerExp - 1;
        playerPower = playerPower + 1;
        worldCtx.beginPath();
        worldCtx.clearRect(0,0,150,250);
        worldCtx.closePath();
        drawStats();

    }
}

function drawEnemyStats() {
    worldCtx.beginPath();
    worldCtx.clearRect(10 + enemyTextOffset, 0, 150, 200);
    worldCtx.font = "30px Arial";
    worldCtx.fillText("Health: " + enemyHealth, 10 + enemyTextOffset, 50);
    worldCtx.fillText("Power: " + enemyPower, 10 + enemyTextOffset, 100);
    worldCtx.closePath();
}

