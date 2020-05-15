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
let woodCutterAudio;
let startCutterWoodAudio = false;
function playWoodCutterAudio(x) {
    this.x = x;

    if (x >= 50){
        woodCutterAudio = new Audio('audio/woodCuttersSound.mp3');
        woodCutterAudio.volume = 0.5;
    }
    else {
        woodCutterAudio = new Audio('audio/woodCutterSound.wav');
        woodCutterAudio.volume = 0.5;
    }
    if (startCutterWoodAudio  === false) {
        //startCutterWoodAudio  = true;
        woodCutterAudio.play();

    } else if (startCutterWoodAudio === true){
        woodCutterAudio.pause();
        woodCutterAudio.currentTime = 0;
        woodCutterAudio.play();
        startCutterWoodAudio  = false;
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

// Death Sound
let deathAudio = new Audio('audio/death.mp3');
function playDeathAudio() {
    deathAudio.pause();
    deathAudio.currentTime = 0;
    deathAudio.play();
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