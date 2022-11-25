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
const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 300;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

//line init
ctx.lineWidth = 1;

//paint init
let isPainting = false;
let isFilling = false;

//mode
const modeChange = document.querySelector('.mode-change');
const modeBtn = modeChange.querySelector('#fill');
const modeDestroyBtn = modeChange.querySelector('#destroy');
const modeEreaseBtn = modeChange.querySelector('#erease');

// file
const fileInput = document.querySelector('#file');



// mode fill
function onModeClick() {
	if (isFilling) {
		isFilling = false;
		modeBtn.innerText = 'fill';
	} else {
		isFilling = true;
		modeBtn.innerText = 'draw';
	}
}

//drag
function onMove (event) {
	if (isPainting === true) {
		ctx.lineTo(event.offsetX, event.offsetY)
		ctx.stroke();
		return;
	}
	ctx.moveTo(event.offsetX, event.offsetY)
}


// draw start
function startPainting (event) {
	isPainting = true;
	ctx.beginPath();
}

// draw end
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
	// console.dir(colorValueRgb);
	ctx.strokeStyle = colorValue;
	ctx.fillStyle = colorValue;
	color.value = colorValueRgb;
}

function onCanvasClick() {
	if (isFilling) {
		ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
		// ctx.fill()
	}
}

function onDestroyClick() {
	ctx.fillStyle = 'white';
	ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}

function onEreaseClick() {
	ctx.strokeStyle = 'white';
	isFilling = false;
}
function onFileChange(event) {
	const file = event.target.files[0]
	const url = URL.createObjectURL(file);
	const image = new Image();
	image.src = url;
	image.addEventListener('load', function () {
		ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
	});
}
canvas.onmousemove
canvas.addEventListener('click', onCanvasClick);
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

modeBtn.addEventListener('click', onModeClick);
modeDestroyBtn.addEventListener('click', onDestroyClick)
modeEreaseBtn.addEventListener('click', onEreaseClick)
fileInput.addEventListener('change', onFileChange)