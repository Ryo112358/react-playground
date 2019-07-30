import React, { Component } from 'react';
import './MutateState.css';

class MutateState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { task: 'do the dishes', done: false, id: 1},
        { task: 'vacuum the floor', done: true, id: 2}
      ]
    };
  }

  completeTodo(id) {

    // Array.prototype.map returns a new array
    const newTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        // make a copy of the todo object with done -> true
        return { ...todo, done: true };
      }
      return todo;  // old todos can pass through
    });

    this.setState({ todos: newTodos }); // setState to the new array
  }

  render() {
    return (
      <div className="MutateState">
        <ul className="MutateState-list">
          {this.state.todos.map(todo => <li className="MutateState-list-element" key={todo.id}>{todo.task}: {todo.done ? 'Complete' : 'Remaining'}</li>)}
        </ul>
      </div>
    );
  }
}

export default MutateState;