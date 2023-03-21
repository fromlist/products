import {useState} from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray])
    setTodo("");
  }
  console.log(todos)
  return (
    <div>
      <h1>My To Dos ({todos.length})</h1>
    	<form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} type="text" placeholder="Write yout to do..." />
        <button type="submit">Add To do</button>
      </form>
    </div>
  );
}

export default TodoList;
