//Cheats
//addGold
function addGold() {
    var goldinput = 1000000;
    //document.getElementById("test2").innerHTML = goldinput;
    gold = gold + goldinput;
    document.getElementById("line21").innerHTML = "gold: " + gold;
    playCoinAudio();
}

//More Population
function cheatHeroHealth() {
    clearCanvas();
    heroHealth = heroHealth + 1000;
    playerHealth = heroHealth;
    drawStats();
    resetCanvas();
}

//More Attack
function cheatAttack() {
    clearCanvas();
    playerPower = playerPower * 10;
    drawStats();
    resetCanvas();
}

//More Wood
function cheatWood() {
    var woodinput = 1000000;
    wood = wood + woodinput;
    document.getElementById("line11").innerHTML = "wood: " + wood + "/" + woodStorage;
    playWoodAudio();
}

//Custom Player Model
function visibleSaber() {
    playerPower = 100000;// More OP
    heroHealth = 100000;
    playerHealth = heroHealth;
    playerModel = true;
    saberVisibility = true;
    console.log("visible");
    enemyModel = true;
    ratVisibility = true;
    worldCtx.clearRect(0,0,920,1000);
    drawStats();
    resetCanvas();
    
}

function clearCanvas() {
    worldCtx.clearRect(0,0,920,1000);
}

function resetCanvas() {
    drawCircle();
    drawGround();
    drawRightGuy(0); //Right Guy
    drawLeftGuy(0) //Left Guy
}


//CheatsVisible
var cheatClickCount = false;
function cheatsVisible() {
    cheatClickCount = true;
    if (cheatClickCount == true) {
        document.getElementById("cheat").style.visibility = "visible";
    }
}
//TODO: delete THIS before uploud
//spearmen = 3;