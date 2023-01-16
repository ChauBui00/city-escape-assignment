// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// Right Building Windows
ctx.fillStyle = "white";
ctx.fillRect(165, 120, 13, 500);
ctx.fillRect(193, 120, 13, 500);
ctx.fillRect(223, 120, 13, 500);
ctx.fillRect(250, 120, 13, 500);
ctx.fillRect(275, 120, 13, 500);

// Top Left Building Grid of Windows

for (let ySqr = 200; ySqr <= 345; ySqr += 15) {
  // Draws a single row of windows
  for (let xSqr = 45; xSqr < 120; xSqr += 15) {
    ctx.fillRect(xSqr, ySqr, 7, 7);
  }
}

for (let yRect = 367; yRect < 630; yRect += 40) {
  ctx.fillRect(17, yRect, 120, 17);
}
