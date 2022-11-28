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
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

//line init
ctx.lineWidth = 1;
ctx.lineCap = 'round';

//paint init
let isPainting = false;
let isFilling = false;

//mode
const modeChange = document.querySelector('.mode-change');
const modeFill = modeChange.querySelector('#fill');
const modeDraw = modeChange.querySelector('#draw');
const modeDestroyBtn = modeChange.querySelector('#destroy');
const modeEreaseBtn = modeChange.querySelector('#erease');

// file
const fileInput = document.querySelector('#file');
const textInput = document.querySelector('#text');

//save
const save = document.querySelector('#save');


// mode fill
function onModeFill(event) {
	ctx.restore();
	isFilling = false;
	addActiveClass(event);
}

// mode Draw
function onModeDraw(event) {
	isFilling = true;
	addActiveClass(event);
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
function startPainting () {
	isPainting = true;
	ctx.beginPath();
}

// draw end
function cancelPainting () {
	isPainting = false;
}

//double click
function onDoubleClick (event) {
	const text = textInput.value;
	if (text !== '') {
		ctx.save();
		// ctx.lineWidth = 1;
		ctx.font = `${ctx.lineWidth * 20}px malgun-gothic`
		ctx.fillText(text, event.offsetX, event.offsetY);
		ctx.restore();
	}
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

//fill
function onCanvasClick() {
	if (isFilling) {
		ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
	}
}

//destroy
function onDestroyClick() {
	ctx.save();
	ctx.fillStyle = 'white';
	ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
	ctx.restore();
}

//erease
function onEreaseClick(event) {
	ctx.save();
	ctx.strokeStyle = 'white';
	isFilling = false;
	addActiveClass(event);
}

//image add
function onFileChange(event) {
	const file = event.target.files[0];
	const url = URL.createObjectURL(file);
	const image = new Image();
	const thumbnail = document.querySelector('.thumbnail img');
	image.src = url;
	thumbnail.src = url;
	thumbnail.style.display = 'block'
	image.addEventListener('load', function () {
		ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
		fileInput.value = null;
		
	});
}

//save
function onSaveClick () {
	const url = canvas.toDataURL()
	const anchor = document.createElement('a')
	anchor.href = url;
	anchor.download = 'myDrawing.png';
	anchor.click();
}

function addActiveClass (event) {
	event.target.classList.add('active');
	for (let i = 0; i <= siblings(event.target).length - 1; i++) {
		siblings(event.target)[i].classList.remove('active');
	}
}

function siblings(t) {
	var children = t.parentElement.children;
	var tempArr = [];
  
	for (var i = 0; i < children.length; i++) {
	  tempArr.push(children[i]);
	}
  
	return tempArr.filter(function(e){
	  return e != t;
	});
}


canvas.addEventListener('click', onCanvasClick);
canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
canvas.addEventListener('dblclick', onDoubleClick)

lineWidth.addEventListener('change', onlineWidthChange)
color.addEventListener('change', onColorChange)
colorPallete.forEach(color => color.addEventListener('click', onColorPallete))

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

modeFill.addEventListener('click', onModeFill);
modeDraw.addEventListener('click', onModeDraw);
modeDestroyBtn.addEventListener('click', onDestroyClick)
modeEreaseBtn.addEventListener('click', onEreaseClick)
fileInput.addEventListener('change', onFileChange)
save.addEventListener('click', onSaveClick)