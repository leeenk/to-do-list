import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import {useState} from "react";
import React from "react";
import './App.css';
// import all the compoenets, displayed on screen

function App() {

const[todos, setTodos] = useState([])
 
//  create a new todos array by calling the setTodos array 
// and combining the new todos with the existing 
 function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    const newTodos = todos.filter((item) => item.id !== id)
         setTodos(newTodos)
      }
    


  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Todo
        </p>
        <TodoForm addTodo={addTodo}/>
        <TodoList 
          todos={todos} 
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          />
      </header>
    </div>
  );
}

export default App;
