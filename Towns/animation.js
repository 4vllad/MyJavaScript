function rotateLeftGuy(){

    //setInterval(rotateI, 200);


}

// TODO: this ist "meh"
let c = 0;
function rotateI(){
    clearCanvas();
    worldCtx.drawImage(playerImage, xPositonLeftGuy + x, yPositonLeftGuy, saberWidth,saberHeight);
    worldCtx.rotate((Math.PI / 64) * c);
    c++;
    console.log(c + " " + (Math.PI / 16) * c );
}
