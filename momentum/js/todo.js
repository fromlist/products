const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');
let toDos = [];
const TODOS_KEY = 'todos'

function saveToDo() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function paintTodo(newToDo) {
	const paintTodoWrap = document.createElement('li') ;
	paintTodoWrap.id = newToDo.id;
	const paintTodoText = document.createElement('span');
	const removeTodo = document.createElement('button');

	paintTodoText.innerText = newToDo.text;
	removeTodo.innerText = "❌";

	paintTodoWrap.appendChild(paintTodoText);
	paintTodoWrap.appendChild(removeTodo);
	todoList.appendChild(paintTodoWrap);

	removeTodo.addEventListener('click', deleteTodo);

}

function deleteTodo(event){
	const paintTodoWrap = event.target.closest('li');
	// console.log(typeof(paintTodoWrap.id))
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(paintTodoWrap.id))
	paintTodoWrap.remove();
	saveToDo();
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newToDo = toDoInput.value;
	toDoInput.value = '';
	const newTodoObj = {
		text : newToDo,
		id : Date.now()
	}
	toDos.push(newTodoObj);
	paintTodo(newTodoObj);
	saveToDo();
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintTodo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
function sayHello (item) {
	console.log('item : ' , item)
}