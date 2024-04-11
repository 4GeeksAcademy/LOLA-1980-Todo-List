import React, { useState } from 'react';

const ToDoList = () => {
    //se crea el array vacio que almacena todas las tareas
    const [todos, setTodos] = useState([]);
    
    // es una cadena que almacena la tarea actual que esta siendo escrita
    const [todo, setTodo] = useState("");

    //es una función que se llama al presionar Enter o hacer clic en el botón "Agregar".  
    const addTodo = (task) => {
        if (task !== "") { //Si la tarea no está vacía,
            setTodos([...todos, task]);//agrega la tarea al array 'todos'
            setTodo("");//y luego limpia la entrada de texto 'todo'
        }
    };

    const deleteTodo = index => {
        setTodos(todos.filter((_, idx) => idx !== index));
    };

  return (
    <div className='container-fluid background-GrayLight p-5'>
        <div>
            <h1 className='text-center font-color-grey font-size-55 mt-3'>ToDo's</h1>
            <input type="text" className="form-control shadow-lg fs-2 font-color-grey" aria-label="Sizing example input"  placeholder="Agregar una nueva tarea" 
                aria-describedby="inputGroup-sizing-default" 
                
                value = {todo}
                onChange={(e) => {
                    setTodo(e.target.value)
                    //console.log("onchange", e)
                }} 

                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addTodo(todo);
                    }
                }}
            />
        </div>
                
        {todos.length === 0 ? (
            <p className='mb-5 font-color-greyDark fw-bold'>No hay tareas, añadir tareas</p>
        ) : (             

            <ul className='list-group shadow-lg'>
                {todos.map((item, index) => (
                    <li key={index} className='d-flex justify-content-between list-group-item font-color-grey fs-2 px-5'>
                        {item}
                        <button className='btn' onClick={() => deleteTodo(index)}>
                           {/* <i className='fas fa-trash-alt hidden-iconDelete' />*/}
                           <span className='hidden-iconDelete fw-bold fs-3'>X</span>
                        </button>
                    </li>
                ))}
                <li className='list-group-item font-color-grey fs-5 text-start px-5'>{todos.length} item left</li>
            </ul>
        )}
    </div>
  );
};

export default ToDoList


                {/*<h3>El To Do es: {todo}</h3>
                <button className='btn btn-primary' onClick={addTodo}>Agregar</button>
                <button className='btn btn-danger' 
                        onClick={()=> {
                            setTodo([])
                        }}
                    >
                        Limpiar
                    </button>*/}
