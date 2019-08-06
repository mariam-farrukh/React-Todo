import React from "react";

class TodoForm extends React.Component {
    constructor(){
      super();
      this.state = {
        task: '',
      };
    }
  
    handleChanges = e => {
      this.setState({
        task: e.target.value
      });
    };
  
    submitTask = e => {
      e.preventDefault();
      this.props.addTask(this.state.task);
    };
  
    render () {
      return (
        <form onSubmit={this.submitTask}>
          <input
            placeholder="Add Task"
            type="text"
            value={this.state.task}
            onChange={this.handleChanges}
          />
          <button>Add</button>
        </form>
      ); 
    };
  }
  
  export default TodoForm;