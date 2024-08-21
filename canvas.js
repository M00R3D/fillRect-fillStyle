const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



// ctx.fillStyle = "gray";
// ctx.fillRect(0, 0, 500, 500);
ctx.fillStyle = "rgb(248, 149, 0)";
ctx.fillRect(10, 10, 150, 100);
ctx.fillStyle = "rgb(117, 23, 205)";
ctx.fillRect(40, 40, 150, 100);
ctx.fillStyle = "rgb(248, 149, 0)";
ctx.fillRect(25, 25, 150, 100);

ctx.beginPath();
ctx.arc(200, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.arc(300, 75, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(200, 75, 30, 0, Math.PI, false); 
ctx.fillStyle = "rgb(248, 49, 110)"; 
ctx.fill();
ctx.stroke();

ctx.font = "30px Arial";

ctx.fillStyle = "rgb(0, 0, 0)"; 
ctx.fillText("Texto", 50, 170); 
ctx.strokeStyle = "rgb(255, 220, 125)"; 
ctx.strokeText("Texto", 50, 170);