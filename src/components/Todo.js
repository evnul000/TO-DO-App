import React, {useState}from 'react'
import TodoForm from './TodoForm.js'
import {AiTwotoneEdit, AiOutlineFolderView, AiFillCloseCircle} from "react-icons/ai"


function Todo({todos, completeTodo, removeTodo, updateTodo}) {
const [edit, setEdit] = useState({
    id:null,
    value: ''
});

const submitUpdate = value => {
  updateTodo(edit.id, value);
  setEdit({
    id: null,
    value: ''
  });
};

if(edit.id){
  return <TodoForm edit={edit} onSubmit={submitUpdate}/>;
}
//when mapping, it shows how each todo item will be displayed with the edit icon and delete
  return todos.map((todo,index) =>(
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
    key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons"></div>
        <AiFillCloseCircle
        onClick={()=> removeTodo(todo.id)}
        className='delete-icon'
        />
        <AiOutlineFolderView/>
        <AiTwotoneEdit  
        onClick={() => setEdit({ id: todo.id, value: todo.text})}
        className='edit-icon'
        />
    </div>
  ));
};

export default Todo
