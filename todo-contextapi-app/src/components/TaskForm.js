import React, { useEffect } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { useTaskContext } from '../context/TaskContext';

const TaskForm = () => {
  const [form] = Form.useForm();
  const { addTask, editTask, editingTask, setEditingTask } = useTaskContext();

  useEffect(() => {
    if (editingTask) {
      form.setFieldsValue({
        name: editingTask.name || '',
        description: editingTask.description || '',
      });
    } else {
      form.resetFields();
    }
  }, [editingTask, form]);

  useEffect(() => {
    console.log('Editing Task:', editingTask);
  }, [editingTask]);
  

  const handleFinish = (values) => {
    if (editingTask) {
      editTask({ ...editingTask, ...values });
    } else {
      addTask(values);
    }
    form.resetFields();
    setEditingTask(null);
  };

  const handleCancel = () => {
    form.resetFields();
    setEditingTask(null);
  };

  return (
    <Modal
      title={editingTask ? 'Edit Task' : 'Add Task'}
      open={!!editingTask}
      onCancel={handleCancel}
      footer={null}
    >
      <Form forceRender form={form} onFinish={handleFinish} layout="vertical">
        <Form.Item
          name="name"
          label="Task Name"
          rules={[{ required: true, message: 'Task name is required!' }]}
        >
          <Input placeholder="Enter task name" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Task Description"
          rules={[{ required: true, message: 'Task description is required!' }]}
        >
          <Input.TextArea placeholder="Enter task description" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          {editingTask ? 'Save Changes' : 'Add Task'}
        </Button>
      </Form>
    </Modal>
  );
};

export default TaskForm;