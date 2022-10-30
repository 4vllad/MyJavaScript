let resourcePositionX = 0;
let resourcePositionY = 0;
let resourceWidth = 16;
let resourceHeight = 16;

let resourceXOffset = 0;
let resourceYOffset = 0;

//Wood Image
const woodImage = new Image(); woodImage.src="pictures/wood.png";
let woodImageArray = [];
let woodImageAmount = 0;
function drawWoodImage(x) {
    this.x = x;
    woodImageArray.push(woodImage);
    woodImageAmount++;
    for (let i = 0; i<woodImageArray.length; i++){
        worldCtx.drawImage(woodImageArray[i], resourcePositionX + x + resourceXOffset, resourcePositionY + resourceYOffset, resourceWidth, resourceHeight);
        resourceXOffset = resourceXOffset + 16;
        if (resourceXOffset%57 == 0){
            resourceYOffset = resourceYOffset + 16;
            resourceXOffset = 0;
        }

    }
    resourceXOffset = 0;
    resourceYOffset = 0;

}

//House Image
const houseImage = new Image(); houseImage.src="pictures/house.png";
let houseImageArray = [];
let houseImageAmount = 0;
function drawHouseImage(x) {
    this.x = x;
    houseImageArray.push(houseImage);
    houseImageAmount++;
    for (let i = 0; i<houseImageArray.length; i++){
        worldCtx.drawImage(houseImageArray[i], 0 + x + resourceXOffset, 0 + resourceYOffset, 32, 32);
        resourceXOffset = resourceXOffset + 32;
        if (resourceXOffset%50 == 0){
            resourceYOffset = resourceYOffset + 32;
            resourceXOffset = 0;
        }

    }
    resourceXOffset = 0;
    resourceYOffset = 0;

}