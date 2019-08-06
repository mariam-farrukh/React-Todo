import React from "react";
import './Todo.css'

const ToDo = (props) => {
    console.log(props)
    return (
        <div className={`todo${ props.todo.completed ? ' completed' : '' }`}
        
            onClick={() => props.toggleTask(props.todo.id)} 
        >
            <li>{props.todo.task}</li>
        </div>
    );
};

export default ToDo;

// const ToDo = ({ todo, toggleTask}) => {
//     console.log(todo)
//     return (
//         <div className={`todo${ todo.completed ? 'completed' : '' }`}
        
//             onClick={() => toggleTask(todo.id)} 
//         >
//             <li>{todo.task}</li>
//         </div>
//     );
// };

// export default ToDo;