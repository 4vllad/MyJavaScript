let inventoryRow = 0;
let inventoryColumn = 0;
let inventorySquare = 0;

let playerHealth = 1;
let playerPower = 0;
let playerExp = 0;

let enemyHealth = 100;
let enemyPower = 1;

function inventory(){
    //clearCanvas();
    //drawPlayerStats();
}

function drawPlayerStats(){
    worldCtx.beginPath();
    worldCtx.font = "30px Arial";
    worldCtx.fillText("Stats:", 10, 50);
    worldCtx.fillText("Health: " + playerHealth, 10, 100);
    worldCtx.fillText("Power: " + playerPower, 10, 150);
    worldCtx.fillText("Exp: " + playerExp, 10, 200);
    worldCtx.closePath();
}

function upgradePower() {
    if (playerExp >= 1){
        playerExp = playerExp - 1;
        playerPower = playerPower + 1;
        worldCtx.beginPath();
        worldCtx.clearRect(0,0,150,250);
        worldCtx.closePath();
        drawPlayerStats();
    }
}

function drawEnemyStats() {

}