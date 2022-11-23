const lineWidth = document.querySelector('#line-width');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.lineWidth = 1;

canvas.width = '300';
canvas.height = '300';

let isPainting = false;
function onMove (event) {
// console.log(lineWidth.value)
if (isPainting === true) {
		ctx.lineTo(event.offsetX, event.offsetY)
		ctx.stroke();
		return;
	}
	ctx.moveTo(event.offsetX, event.offsetY)
}
function startPainting (event) {
	isPainting = true;
}

function cancelPainting (event) {
	isPainting = false;
}
function onlineWidthChange (event) {
	ctx.beginPath();
	console.log(event.target.value)
	ctx.lineWidth = event.target.value;

}


canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);

lineWidth.addEventListener('change', onlineWidthChange)