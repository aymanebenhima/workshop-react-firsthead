import React from 'react';
import { List, Button, Typography } from 'antd';
import { useTaskContext } from '../context/TaskContext';

const { Text } = Typography;

const TaskItem = ({ task }) => {
  const { toggleComplete, setEditingTask, deleteTask } = useTaskContext();

  return (
    <List.Item
      actions={[
        <Button onClick={() => toggleComplete(task.id)}>
          {task.completed ? 'Activate' : 'Complete'}
        </Button>,
        <Button onClick={() => setEditingTask(task)}>Edit</Button>,
        <Button danger onClick={() => deleteTask(task.id)}>Delete</Button>,
      ]}
    >
      <List.Item.Meta
        title={<Text delete={task.completed}>{task.name}</Text>}
        description={task.description}
      />
    </List.Item>
  );
};

export default TaskItem;