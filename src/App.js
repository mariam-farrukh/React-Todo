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
      todo: todoList
    };
  }

  toggleItem = id => {
    this.setState ({
      todo: this.state.todo.map(item => {
        if (item.id === id){
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })
  };

  addItem = itemTask => {
    const newTask = {
      task:itemTask,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newTask]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Todo List</h2>
          <TodoForm 
            addItem={this.addItem}
          />
        </div>
        <TodoList
          todo = {this.state.todo}
        />
      </div>
    );
  }
}

export default App;
