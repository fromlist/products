//line
const lineWidth = document.querySelector('#line-width');

//color input
const color = document.querySelector('#color');
//color pallete
const colorPallete = Array.from(document.querySelectorAll('.colors .color'));

//canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//canvas init
canvas.width = '300';
canvas.height = '300';

//line init
ctx.lineWidth = 1;

//paint init
let isPainting = false;

//drag
function onMove (event) {
	if (isPainting === true) {
		ctx.lineTo(event.offsetX, event.offsetY)
		ctx.stroke();
		return;
	}
	ctx.moveTo(event.offsetX, event.offsetY)
}
function startPainting (event) {
	isPainting = true;
	ctx.beginPath();
}

function cancelPainting (event) {
	isPainting = false;
}

//line width change
function onlineWidthChange (event) {
	// console.log(event.target.value)
	ctx.lineWidth = event.target.value;

}
//line width change
function onColorChange (event) {
	ctx.strokeStyle = event.target.value;
	ctx.fillStyle = event.target.value;
}
function onColorPallete (event) {
	const colorValue = event.currentTarget.style.background;
	let colorValueRgb = colorValue.substring(4, colorValue .length-1).replace(/ /g, '').split(',');
	colorValueRgb = rgbToHex(parseInt(colorValueRgb[0]),parseInt(colorValueRgb[1]),parseInt(colorValueRgb[2])); // #0033ff
	// console.dir(colorValue)
	console.dir(colorValueRgb);
	ctx.strokeStyle = colorValue;
	ctx.fillStyle = colorValue;
	color.value = colorValueRgb;
	
	
}

canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);

lineWidth.addEventListener('change', onlineWidthChange)
color.addEventListener('change', onColorChange)
// colorPallete.addEventListener('click', onColorChange)
colorPallete.forEach(color => color.addEventListener('click', onColorPallete))
console.log(colorPallete)

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}