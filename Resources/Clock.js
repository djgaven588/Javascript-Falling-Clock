var mainLoop, canvas, ctx;
function Start()
{
    canvas = document.getElementById("ClockCanvas");
    ctx = canvas.getContext('2d');
    mainLoop = setInterval(Update, 1000/120);   
}

function Update()
{
    Draw(0, 0, canvas.width, canvas.height, "rgb(0, 0, 0)", 1);
    
    var dateTime = new Date();
    var millTime = dateTime.getTime() - dateTime.getTimezoneOffset() * 60000;
    
    var hourHandRotation        = millTime % 86400000  / 86400000 % 0.5 * 2;
    var minuteHandRotation      = millTime % 3600000   / 3600000;
    var secondHandRotation      = millTime % 60000     / 60000;
    var millisecondHandRotation = millTime % 1000      / 1000;
    
    Draw(0,                      0, canvas.width / 4, canvas.height * hourHandRotation,        "red",   1);
    Draw(canvas.width / 4,       0, canvas.width / 4, canvas.height * minuteHandRotation,      "orange",    1);
    Draw((canvas.width / 4) * 2, 0, canvas.width / 4, canvas.height * secondHandRotation,      "green", 1);
    Draw((canvas.width / 4) * 3, 0, canvas.width / 4, canvas.height * millisecondHandRotation, "blue",  1);

    for (let i = 0; i < 13; i++) {
        Draw(0, (canvas.height / 12) * i - canvas.height/600, canvas.width/64, canvas.height/300, "white", .8);
        Draw(canvas.width / 4 - canvas.width/128, (canvas.height / 12) * i - canvas.height/600, canvas.width/64, canvas.height/300, "white", .8);
        Draw(canvas.width / 2 - canvas.width/128, (canvas.height / 12) * i - canvas.height/600, canvas.width/64, canvas.height/300, "white", .8);
        Draw(canvas.width * 0.75 + canvas.width/128, (canvas.height / 12) * i - canvas.height/600, -canvas.width/64, canvas.height/300, "white", .8);
        Draw(canvas.width, (canvas.height / 12) * i - canvas.height/600, -canvas.width/64, canvas.height/300, "white", .8);
    }
}

function Draw(xPos, yPos, width, height, color, transparency)
{
    ctx.fillStyle = color;
    ctx.globalAlpha = transparency;
    ctx.fillRect(xPos, yPos, width, height);
}