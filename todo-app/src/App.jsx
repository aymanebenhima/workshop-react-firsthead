import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import myTodos from "./data/myTodos";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(myTodos);

  const addTodo = (title) => {
    const newTodo = { id: Date.now(), title, isDone: false };
    setTodos([...todos, newTodo]);
  };

  const toggleIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  };
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">
          My Todo App with React
        </h1>
        <AddTask addTodo={addTodo} />
        <TodoList todos={todos} toggleIsDone={toggleIsDone} />
      </div>
    </>
  );
}

export default App;
