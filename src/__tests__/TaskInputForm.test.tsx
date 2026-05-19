import { render, screen, fireEvent } from '@testing-library/react';
import TaskInputForm from '../components/TaskInputForm';

test('adds a new task with valid title and description', async () => {
  const mockOnTaskAdded = jest.fn();
  render(<TaskInputForm onTaskAdded={mockOnTaskAdded} />);

  fireEvent.change(screen.getByPlaceholderText(/Task Title/i), { target: { value: 'New Task' } });
  fireEvent.change(screen.getByPlaceholderText(/Task Description/i), { target: { value: 'Task Description' } });
  fireEvent.click(screen.getByText(/Add Task/i));

  expect(mockOnTaskAdded).toHaveBeenCalled();
});

test('attempts to add a task without a title', async () => {
  const mockOnTaskAdded = jest.fn();
  render(<TaskInputForm onTaskAdded={mockOnTaskAdded} />);

  fireEvent.change(screen.getByPlaceholderText(/Task Description/i), { target: { value: 'Task Description' } });
  fireEvent.click(screen.getByText(/Add Task/i));

  expect(mockOnTaskAdded).not.toHaveBeenCalled();
});