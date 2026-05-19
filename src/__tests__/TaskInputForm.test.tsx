import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskInputForm from '../components/TaskInputForm';

test('adds a new task with valid title and description', async () => {
  const { getByPlaceholderText, getByText } = render(<TaskInputForm onTaskAdded={jest.fn()} />);
  fireEvent.change(getByPlaceholderText('Task Title'), { target: { value: 'New Task' } });
  fireEvent.change(getByPlaceholderText('Task Description'), { target: { value: 'Task Description' } });
  fireEvent.click(getByText('Add Task'));
  // Add assertions for success notification and task addition
});

test('attempts to add a task without a title', async () => {
  const { getByText } = render(<TaskInputForm onTaskAdded={jest.fn()} />);
  fireEvent.click(getByText('Add Task'));
  // Add assertions for error notification
});