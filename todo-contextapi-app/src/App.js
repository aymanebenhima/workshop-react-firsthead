import React from 'react';
import { Button } from 'antd';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider, useTaskContext } from './context/TaskContext';

const AppContent = () => {
  const { setEditingTask } = useTaskContext();

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>To-Do List</h1>
      <Button
        type="primary"
        onClick={() => setEditingTask({ name: '', description: '' })}
        block
        style={{ marginBottom: '20px' }}
      >
        Add Task
      </Button>
      <TaskList />
      <TaskForm />
    </div>
  );
};

const App = () => (
  <TaskProvider>
    <AppContent />
  </TaskProvider>
);

export default App;