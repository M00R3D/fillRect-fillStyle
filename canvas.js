const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const player = 
{
    x: 150,      y: 50,      width: 50,      height: 50,     color: 'red'
};
ctx.fillStyle = "rgba(100, 149, 237, 0.5)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = getRandomColor();
ctx.fillRect(player.x, player.y, player.width, player.height);

document.addEventListener("keypress", function(event) 
{
    console.log("Tecla presionada: " + event.key);
    
    if(event.key=="a" || event.key=="A"){player.x=player.x-6}
    if(event.key=="d" || event.key=="D"){player.x=player.x+6}
    if(event.key=="w" || event.key=="W"){player.y=player.y-6}
    if(event.key=="s" || event.key=="S"){player.y=player.y+6}

    if(player.x<0){player.x=player.x+canvas.width-1}
    if(player.y<0){player.y=player.y+canvas.height-1}
    if(player.x>canvas.width){player.x=0}
    if(player.y>canvas.height){player.y=0}
    ctx.fillStyle = "rgba(100, 149, 237, 0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(player.x, player.y, player.width, player.height);
});
function getRandomColor() 
{
    var letters = '0123456789ABCDEF'.split('');         var color = '#';
    for (var i = 0; i < 6; i++ ) {color += letters[Math.round(Math.random() * 15)];}
    return color;
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
