import { render, screen, fireEvent } from '@testing-library/react';
import TaskInputForm from '../components/TaskInputForm';

test('adds a new task with valid title and description', async () => {
  const mockOnTaskAdded = jest.fn();
  render(<TaskInputForm onTaskAdded={mockOnTaskAdded} />);

  fireEvent.change(screen.getByPlaceholderText('Task Title'), { target: { value: 'New Task' } });
  fireEvent.change(screen.getByPlaceholderText('Task Description'), { target: { value: 'Task Description' } });
  fireEvent.click(screen.getByText('Add Task'));

  expect(mockOnTaskAdded).toHaveBeenCalled();
});

test('attempts to add a task without a title', async () => {
  const mockOnTaskAdded = jest.fn();
  render(<TaskInputForm onTaskAdded={mockOnTaskAdded} />);

  fireEvent.change(screen.getByPlaceholderText('Task Description'), { target: { value: 'Task Description' } });
  fireEvent.click(screen.getByText('Add Task'));

  expect(window.alert).toHaveBeenCalledWith('Task title is required.');
});