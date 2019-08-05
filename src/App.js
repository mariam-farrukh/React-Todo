import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js'
import TodoForm from './components/TodoComponents/TodoForm.js'

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
      toDo: todoList
    };
  }

  toggleTask = (id) => {
    this.setState ({
      toDo: this.state.toDo.map(todo => {
        if (todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      })
    })
  };

  submitTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      toDo: [...this.state.toDo, newTask]
    })
  }

  clearTask = e => {
    e.preventDefault();
    this.setState({
      toDo: [...this.state.toDo.filter(task => !task.completed)]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Todo List</h2>
          <TodoForm 
            addTask={this.submitTask}
          />
        </div>
        <TodoList
          toDo = {this.state.toDo}
          toggleTask={this.toggleTask}
        />
        <button onClick = {this.clearTask}>Clear Tasks</button>
      </div>
    );
  }
}

export default App;
