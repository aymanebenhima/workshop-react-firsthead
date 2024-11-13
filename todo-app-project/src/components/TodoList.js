import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const { todos } = this.props;

    return (
      <div>
        <h2>Task List</h2>
        {todos.length > 0 ? (
          <ul className="list-group">
            {todos.map((todo) => (
              <Todo key={todo.id} text={todo.text} />
            ))}
          </ul>
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    );
  }
}

export default TodoList;
