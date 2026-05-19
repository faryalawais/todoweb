import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import TaskInputForm from '../components/TaskInputForm';
import { supabase } from '../supabaseClient';

jest.mock('../supabaseClient');

describe('TaskInputForm', () => {
  it('should add a new task with valid title and description', async () => {
    supabase.from.mockReturnValue({
      insert: jest.fn().mockResolvedValue({ data: [{ id: 1, title: 'Test Task' }], error: null }),
    });
    const { getByPlaceholderText, getByText } = render(<TaskInputForm onTaskAdded={jest.fn()} />);
    fireEvent.change(getByPlaceholderText('Task Title'), { target: { value: 'Test Task' } });
    fireEvent.change(getByPlaceholderText('Task Description'), { target: { value: 'This is a test task.' } });
    fireEvent.click(getByText('Add Task'));
    await waitFor(() => expect(supabase.from().insert).toHaveBeenCalled());
  });

  it('should not add a task without a title', async () => {
    const { getByText } = render(<TaskInputForm onTaskAdded={jest.fn()} />);
    fireEvent.click(getByText('Add Task'));
    await waitFor(() => expect(window.alert).toHaveBeenCalledWith('Task title is required.'));
  });
});