const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const player = 
{
    x: 150,      y: 50,      width: 50,      height: 50,     color: 'red'
    , direction:"up"    , spd:12
};
const objeto = 
{
    x: 150,      y: 50,      width: 20,      height: 20,     color: 'red'
};
ctx.fillStyle = "rgba(100, 149, 237, 0.5)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = getRandomColor();
ctx.fillRect(player.x, player.y, player.width, player.height);

document.addEventListener("keypress", function(event) 
{ 
    if(event.key=="a" || event.key=="A"){player.direction="left"}
    if(event.key=="d" || event.key=="D"){player.direction="right"}
    if(event.key=="w" || event.key=="W"){player.direction="up"}
    if(event.key=="s" || event.key=="S"){player.direction="down"}
    console.log("player.direction: " + player.direction);
    if(event.key=="Enter" ){player.spd=player.spd+2;}
    
});


function update(event) {
    switch (player.direction) {
        case "up":
            player.y=player.y-player.spd
            break;
        case "down":
            player.y=player.y+player.spd
            break;
        case "left":
            player.x=player.x-player.spd
            break;
        case "right":
            player.x=player.x+player.spd
            break;
        
    }
    if(player.x<0){player.x=player.x+canvas.width-1}
    if(player.y<0){player.y=player.y+canvas.height-1}
    if(player.x>canvas.width){player.x=0}
    if(player.y>canvas.height){player.y=0}

    if(checkCollision(player,objeto)){
        objeto.x = Math.random() * (canvas.width - objeto.width);
        objeto.y = Math.random() * (canvas.height - objeto.height);
    }
}

function draw(event) {

    ctx.fillStyle = "rgba(100, 149, 237, 0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = objeto.color;
    ctx.fillRect(objeto.x, objeto.y, objeto.width, objeto.height);
    update(event);
    requestAnimationFrame(draw);
    ctx.font = "30px Arial";
    ctx.fillStyle = "rgb(0, 0, 0)"; 
    ctx.fillText("speed: "+player.spd,810, 70); 
    // ctx.strokeStyle = "rgb(255, 220, 125)"; 
    // ctx.strokeText("Texto", 50, 170);
}
requestAnimationFrame(draw);
    
    

function getRandomColor() 
{
    var letters = '0123456789ABCDEF'.split('');         var color = '#';
    for (var i = 0; i < 6; i++ ) {color += letters[Math.round(Math.random() * 15)];}
    return color;
}

function checkCollision(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
}

// ctx.fillStyle = "gray";
// ctx.fillRect(0, 0, 500, 500);
// ctx.fillStyle = "rgb(248, 149, 0)";
// ctx.fillRect(10, 10, 150, 100);
// ctx.fillStyle = "rgb(117, 23, 205)";
// ctx.fillRect(40, 40, 150, 100);
// ctx.fillStyle = "rgb(248, 149, 0)";
// ctx.fillRect(25, 25, 150, 100);
// ctx.beginPath();
// ctx.arc(200, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();
// ctx.beginPath();
// ctx.arc(300, 75, 50, 0, 2 * Math.PI);
// ctx.fill();
// ctx.beginPath();
// ctx.arc(200, 75, 30, 0, Math.PI, false); 
// ctx.fillStyle = "rgb(248, 49, 110)"; 
// ctx.fill();
// ctx.stroke();
// ctx.font = "30px Arial";
// ctx.fillStyle = "rgb(0, 0, 0)"; 
// ctx.fillText("Texto", 50, 170); 
// ctx.strokeStyle = "rgb(255, 220, 125)"; 
// ctx.strokeText("Texto", 50, 170);
// canvas.addEventListener("click", function(event) {
//     const rect = canvas.getBoundingClientRect();
//     const x = event.clientX - rect.left;const y = event.clientY - rect.top;

//     ctx.beginPath();
//     ctx.arc(x, y, 50, 0, 2 * Math.PI); 
//     ctx.fill();
//     ctx.lineWidth = 2; 
//     ctx.strokeStyle = "blue";
//     ctx.stroke();
// });
// canvas.addEventListener("mouseover", function(event) {
//     ctx.fillStyle = getRandomColor();
// });