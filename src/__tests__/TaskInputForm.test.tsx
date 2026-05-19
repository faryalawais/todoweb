import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import TaskInputForm from '../components/TaskInputForm';
import { supabase } from '../supabaseClient';

jest.mock('../supabaseClient');

test('adds a new task with valid title and description', async () => {
  const { getByPlaceholderText, getByText } = render(<TaskInputForm onTaskAdded={() => {}} />);

  fireEvent.change(getByPlaceholderText('Task Title'), { target: { value: 'New Task' } });
  fireEvent.change(getByPlaceholderText('Task Description'), { target: { value: 'Task Description' } });
  fireEvent.click(getByText('Add Task'));

  await waitFor(() => expect(supabase.from).toHaveBeenCalledWith('tasks'));
});

test('shows error when title is empty', async () => {
  const { getByText } = render(<TaskInputForm onTaskAdded={() => {}} />);

  fireEvent.click(getByText('Add Task'));

  expect(window.alert).toHaveBeenCalledWith('Task title is required.');
});