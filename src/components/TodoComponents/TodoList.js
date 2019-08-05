import React from 'react';
import ToDo from './Todo.js'

const TodoList = props => {
    return (
        <div>
            {props.toDo.map(todo => (
                <ToDo key={todo.id} todo={todo} toggleTask={props.toggleTask} />
            ))}
        </div>
    );
};

export default TodoList;