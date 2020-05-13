//Cheats
//addGold
function addGold() {
    var goldinput = 1000000;
    //document.getElementById("test2").innerHTML = goldinput;
    gold = gold + goldinput;
    document.getElementById("line21").innerHTML = "gold: " + gold;
}

//More Population
function cheatSpearmen() {
    spearmen++;
    document.getElementById("line71").innerHTML = " spearmen: " + spearmen;
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