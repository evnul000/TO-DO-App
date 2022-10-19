import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([]);
  
    
    const addTodos = todo => {
      //checks wheather or not input is empty it will return nothing
      if(!todo.text || /^\s*$/.test(todo.text)){
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
    };
  
    const updateTodo = (todoId, newValue) => {
      //if the update to-do is empty and enter is hitted, it will do nothing
      
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
  
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
  //Removes a todo by filtering the array by id in the array
  const removeTodo =  id => {
          const removeArr = [...todos].filter(todo => todo.id !==id);
          setTodos(removeArr);
        };
//maps todo information
  const completeTodo = (id) => {
          let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
              todo.isComplete = true;
            }
            return todo;
          });
          setTodos(updatedTodos);
        };
  return (
    <>
    <h1>Whats the plans for today?</h1>
    <TodoForm 
    onSubmit={addTodos} 
    />
    
    <Todo
      todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      updateTodo={updateTodo}
    />
  </>
  );
  }
export default TodoList;