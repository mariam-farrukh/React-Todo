import React from "react";

const ToDo = ({ todo, toggleTask}) => {
    return (
        <div className={`todo ${todo.completed ? 'todo-completed' : ''}`} 
            onClick={() => toggleTask(todo.id)} 
        >
            <li>{todo.task}</li>
        </div>
    );
};

export default ToDo;