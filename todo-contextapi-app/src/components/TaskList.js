import React from 'react';
import { List } from 'antd';
import TaskItem from './TaskItem';
import { useTaskContext } from '../context/TaskContext';

const TaskList = () => {
  const { tasks } = useTaskContext();

  return (
    <List
      dataSource={tasks}
      renderItem={(task) => <TaskItem task={task} />}
    />
  );
};

export default TaskList