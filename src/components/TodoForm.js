import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput]=useState('');

    const inputRef = useRef(null);

    useEffect(()=>{
      inputRef.current.focus();
    })
    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

       props.onSubmit({
        //specilized id for each todo item when submitted
       id: Math.floor(Math.random() * 10000),
       text:input
       });
      setInput('');
    };

    //this is how the todo will look when you are inputting information
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
        <>
        <input 
        type="text" 
        placeholder="Update your todo" 
        value={input} name="text" 
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
        />
        <button className='todo-button'>Update</button>
        </> ):
        ( <>
        <input 
        type="text" 
        placeholder="Add your todo" 
        value={input} name="text" 
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
        />
        <button className='todo-button'>Add todo</button>
        </>)
    }
    </form>
  )
}

export default TodoForm