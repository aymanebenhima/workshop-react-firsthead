import React, { Component} from 'react';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';

class App extends Component {
  state = {
    todos: [
      { id: 1, text: "Learn React and Express Js"}
    ]
  }
  addTask = (task) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, { id: Date.now(), text: task }]
    }))
  }
  render() {
    return (
      <div className='container mx-auto p-4'>
        <h1 className='text-center'>My Todo App with React</h1>
        <AddTask addTask={this.addTask} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
