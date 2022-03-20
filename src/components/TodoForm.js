import {v4 as uuid} from "uuid";
import { useState } from "react";

function TodoForm({ addTodo }) {
    const[todo, setTodo] = useState({
      id: "",
      task: "",
      completed: false
    });
   
    // when the user types an input for a todo 
    // we keep track of it in out state
    function handleTaskInputChange(e) {
        setTodo ({...todo, task:e.target.value});
    }

    function handleSubmit(e) {
      e.preventDefault();
      if (todo.task.trim()) {
        addTodo({ ...todo, id: uuid() });
        setTodo({ ...todo, task: "" });
      }
    }
  

    return(
      <form>
        onSubmit={handleSubmit}
        <input 
        name = "task"
        type = "text"
        value = {todo.task}
        onChange = {handleTaskInputChange}
        />
        <button type="submit">Submit</button>
      </form >
    );
   }

export default TodoForm;