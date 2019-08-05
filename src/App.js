import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js'

const todoList = [
  {
    task: 'Prepare from TK',
    id: 1,
    completed: false
  },
  {
    task: 'Follow guided project',
    id: 2,
    completed: false
  },
  {
    task: 'Work on Project',
    id: 3,
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      todo: todoList
    };
  }

  toggleTask = id => {
    this.setState ({
      todo: this.state.todo.map(task => {
        if (task.id === id){
          return {
            ...task,
            completed: !task.completed
          }
        }
      })
    })
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Todo List</h2>
        </div>
        <TodoList
        todo = {this.state.todo}
        />
      </div>
    );
  }
}

export default App;
