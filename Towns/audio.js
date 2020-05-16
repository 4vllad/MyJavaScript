//Gold Sound
let coinAudio = new Audio('audio/coins2.wav');
let startCoinAudio = false;
function playCoinAudio() {
    if (startCoinAudio === false) {
        startCoinAudio = true;
        coinAudio.play();

    } else if (startCoinAudio === true){
        coinAudio.pause();
        coinAudio.currentTime = 0;
        coinAudio.play();
        startCoinAudio = false;
    }
}

// Wood Sound
let woodAudio = new Audio('audio/woodchop.wav');
let startWoodAudio = false;
function playWoodAudio() {
    if (startWoodAudio === false) {
        startWoodAudio = true;
        woodAudio.play();

    } else if (startWoodAudio === true){
        woodAudio.pause();
        woodAudio.currentTime = 0;
        woodAudio.play();
        startWoodAudio = false;
    }
}
//Woodcutter sound
let woodCutterAudio = new Audio('audio/woodCutterSound.wav');
let startWoodCutterAudio = false;
function playWoodCutterAudio() {
    woodCutterAudio.volume = 0.35;
    if(startWoodCutterAudio === false){
        startWoodCutterAudio = true;
        woodCutterAudio.play();
    }
    else if (startWoodCutterAudio === true){
        woodCutterAudio.pause();
        woodCutterAudio.currentTime = 0;
        woodCutterAudio.play();
        woodCutterAudio = false;
    }

}
let woodCuttersAudio = new Audio('audio/woodCuttersSound.mp3');
let startWoodCuttersAudio = false;
function playWoodCuttersAudio() {
    woodCuttersAudio.volume = 0.35;
    if(startWoodCuttersAudio === false){
        startWoodCuttersAudio = true;
        woodCuttersAudio.play();
    }
    else if (startWoodCuttersAudio === true){
        woodCuttersAudio.pause();
        woodCuttersAudio.currentTime = 0;
        woodCuttersAudio.play();
        woodCuttersAudio = false;
    }

}

// Sword Sound
let swordAudio = new Audio('audio/sword.wav');
function playSwordAudio() {
        swordAudio.volume = 0.2;
        swordAudio.pause();
        swordAudio.currentTime = 0;
        swordAudio.play();
}
//Punch Sound
let punchAudio = new Audio('audio/punch.wav');
function playPunchAudio() {
    punchAudio.volume = 0.2;
    punchAudio.pause();
    punchAudio.currentTime = 0;
    punchAudio.play();
}

// Death Sound
let deathAudio = new Audio('audio/death.mp3');
function playDeathAudio() {
    deathAudio.pause();
    deathAudio.currentTime = 0;
    deathAudio.play();
}
// Death Sound
let splatAudio = new Audio('audio/splat.mp3');
function playSplatAudio() {
    splatAudio.volume = 0.2;
    splatAudio.pause();
    splatAudio.currentTime = 0;
    splatAudio.play();
}
//Enemy Death Sounds
const enemySound = new Audio(); enemySound.src="";
let enemySoundArray = [];
enemySoundArray.push("audio/uh2.mp3");
enemySoundArray.push("audio/uh3.mp3");
enemySoundArray.push("audio/uh4.mp3");
enemySoundArray.push("audio/uh5.mp3");
enemySoundArray.push("audio/uh6.mp3");
enemySoundArray.push("audio/nonono.mp3");
enemySoundArray.push("audio/uh7.mp3");
function playEnemySound(x) {
        this.x = x;
        enemySound.pause();
        enemySound.src = enemySoundArray[x];
        enemySound.currentTime = 0;
        enemySound.play();
}

//China
let trumpSound = new Audio(); trumpSound.src="audio/China.mp3";

//TODO: Hit Sound on enemy
//TODO: Winning Sounds