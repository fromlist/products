const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');
canvas.width = '350';
canvas.height = '350';

ctx.fillRect(100,100,25,100);
ctx.fillRect(200,100,25,100);

ctx.lineWidth = 2;
ctx.fillRect(150,150,25,50);

ctx.fillRect(100,100,100,25);

ctx.moveTo(100,100);
ctx.lineTo(162.5,75);
ctx.lineTo(225,100);
ctx.stroke();
ctx.fill();
