import React from "react";

class TodoForm extends React.Component {
    constructor(){
      super();
      this.state = {
        item: ''
      };
    }
  
    handleChanges = e => {
      this.setState({
        [e.target.task]: e.target.value
      });
    };
  
    submitItem = e => {
      e.preventDefault();
      this.props.addItem(this.state.item);
    };
  
    render () {
      return (
        <form onSubmit={this.submitItem}>
          <input
            type="text"
            value={this.state.item}
            task="item"
            onChange={this.handleChanges}
          />
          <button>Add</button>
        </form>
      ); 
    };
  }
  
  export default TodoForm;