import React from "react";

const ToDo = (props) => {
    let styling;
    if(props.todo.completed === true) {
        styling = {
            textDecoration: 'line-through',
            background: 'green'
        }
    } else {
        styling = {
            textDecoration: 'none',
            background: 'blue'
        }
    }
    return (
        <div className='todo' 
            onClick={() => props.toggleTask(props.todo.id)} 
            styling={styling}>
            <li>{props.todo.task}</li>
        </div>
    )
}

export default ToDo;