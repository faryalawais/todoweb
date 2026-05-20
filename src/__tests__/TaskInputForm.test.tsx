import { render, screen, fireEvent } from '@testing-library/react';
import TaskInputForm from '../components/TaskInputForm';
import { supabase } from '../supabaseClient';

jest.mock('../supabaseClient');

describe('TaskInputForm', () => {
  test('adds a new task with valid title and description', async () => {
    supabase.from.mockReturnValue({
      insert: jest.fn().mockResolvedValue({ data: [{ id: 1, title: 'Test Task' }], error: null })
    });

    render(<TaskInputForm onTaskAdded={jest.fn()} />);
    fireEvent.change(screen.getByPlaceholderText('Task Title'), { target: { value: 'Test Task' } });
    fireEvent.change(screen.getByPlaceholderText('Task Description'), { target: { value: 'Description' } });
    fireEvent.click(screen.getByText('Add Task'));

    expect(await screen.findByText('Task added successfully!')).toBeInTheDocument();
  });

  test('shows error when title is empty', async () => {
    render(<TaskInputForm onTaskAdded={jest.fn()} />);
    fireEvent.click(screen.getByText('Add Task'));

    expect(await screen.findByText('Task title is required.')).toBeInTheDocument();
  });
});