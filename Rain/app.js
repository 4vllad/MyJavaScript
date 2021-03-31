    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let rain = [];
    let rainDropCount = 1000;

    for (let i = 0; i < rainDropCount; i++){
        let raindrop = {    x : 0 + Math.random() * 1920,
                            y : 0 - 10 - Math.random() * 2500,
                            width : 2,
                            height : 10,
                            speed : 2
        }
        rain.push(raindrop);
    }

    function init() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawRain();
        rainFall();
        checkFall();
        //requestAnimationFrame(init);
    }


function drawRain () {
    ctx.beginPath();
    //ctx.fillRect(rain.x, rain.y, rain.width, rain.height);
    for (let i = 0; i < rainDropCount; i++){
        ctx.fillRect(rain[i].x, rain[i].y, rain[i].width, rain[i].height);
        ctx.fillStyle = "blue";
    }
    ctx.closePath();
}


function rainFall() {
    for (let i = 0; i < rainDropCount; i++){
    rain[i].y = rain[i].y + rain[i].speed;
    }
}

function checkFall() {
    for (let i = 0; i < rainDropCount; i++){
        if (rain[i].y >= canvas.height){
            rain[i].y = 0 - Math.random() * 1000;
            rain[i].x = 0 + Math.random() * 1920;
        }
    }
    }

    setInterval(init, 10);


//init();