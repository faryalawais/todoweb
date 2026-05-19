import { render, screen, fireEvent } from '@testing-library/react';
import TaskInputForm from '../components/TaskInputForm';
import { supabase } from '../supabaseClient';

jest.mock('../supabaseClient');

describe('TaskInputForm', () => {
  test('adds a new task with valid title and description', async () => {
    supabase.from.mockReturnValue({
      insert: jest.fn().mockResolvedValue({ data: [{ id: 1, title: 'Test Task' }], error: null }),
    });
    const onTaskAdded = jest.fn();
    render(<TaskInputForm onTaskAdded={onTaskAdded} />);
    fireEvent.change(screen.getByPlaceholderText('Task Title'), { target: { value: 'Test Task' } });
    fireEvent.change(screen.getByPlaceholderText('Task Description'), { target: { value: 'Description' } });
    fireEvent.click(screen.getByText('Add Task'));
    expect(onTaskAdded).toHaveBeenCalledWith({ id: 1, title: 'Test Task' });
  });

  test('shows error when title is empty', () => {
    const onTaskAdded = jest.fn();
    render(<TaskInputForm onTaskAdded={onTaskAdded} />);
    fireEvent.click(screen.getByText('Add Task'));
    expect(window.alert).toHaveBeenCalledWith('Task title is required.');
  });
});