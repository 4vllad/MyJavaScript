//Cheats
//addGold
function addGold() {
    var goldinput = 1000000;
    //document.getElementById("test2").innerHTML = goldinput;
    gold = gold + goldinput;
    document.getElementById("line21").innerHTML = "gold: " + gold;
}

//More Population
function cheatHeroHealth() {
    heroHealth = heroHealth + 100;
    document.getElementById("line71").innerHTML = " spearmen: " + spearmen;
}

//More Attack
function cheatAttack() {
    playerPower = playerPower * 10;
    drawStats();
}

function visibleSaber() {
    playerModel = true;
    saberVisibility = true;
    console.log("visible");
    enemyModel = true;
    ratVisibility = true;
}



//CheatsVisible
var cheatClickCount = false;
function cheatsVisible() {
    cheatClickCount = false;
    if (cheatClickCount == true) {
        document.getElementById("cheat").style.visibility = "visible";
    }
}
//TODO: delete THIS before uploud
//spearmen = 3;