let resourcePositionX = 0;
let resourcePositionY = 0;
let resourceWidth = 16;
let resourceHeight = 16;

let resourceXOffset = 0;

//Wood Image
const woodImage = new Image(); woodImage.src="pictures/wood.png";
let woodImageArray = [];
let woodImageAmount = 0;
function drawWoodImage(x) {
    this.x = x;
    woodImageArray.push(woodImage);
    woodImageAmount++;
    for (let i = 0; i<woodImageArray.length; i++){
        worldCtx.drawImage(woodImageArray[i], resourcePositionX + x + resourceXOffset, resourcePositionY, resourceWidth, resourceHeight);
        resourceXOffset = resourceXOffset + 16;
    }
    resourceXOffset = 0;


}