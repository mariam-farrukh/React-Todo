import React from "react";

const ToDo = ({ todo, toggleTask}) => {
    // let styling;
    // if(props.todo.completed === true) {
    //     styling = {
    //         textDecoration: 'line-through',
    //         background: 'green'
    //     }
    // } else {
    //     styling = {
    //         textDecoration: 'none',
    //         background: 'blue'
    //     }
    // }
    return (
        <div className='todo' 
            onClick={() => toggleTask(todo.id)} 
        >
            <li>{todo.task}</li>
        </div>
    )
}

export default ToDo;